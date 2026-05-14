import { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { fallbackQuestions, Question } from "@/data/questions";
import { generateQuestions } from "@/lib/question-generator";
import { useAuth } from "@/hooks/use-auth";
import { UserScoreService } from "@/entities/UserScore";
import { AI } from "@/lib/ai-service";
import { ArrowLeft, ArrowRight, BrainCircuit, CheckCircle2, Loader2, XCircle, Sparkles, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const POINTS_PER_CORRECT_ANSWER = 10;

const Quiz = () => {
  const { topic } = useParams<{ topic?: string }>();
  const [searchParams] = useSearchParams();
  const difficulty = (searchParams.get('difficulty') || 'Gemiddeld') as 'Makkelijk' | 'Gemiddeld' | 'Moeilijk';
  
  const navigate = useNavigate();
  const { user } = useAuth();

  // Quiz state
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [sessionScore, setSessionScore] = useState(0);
  const [isGenerating, setIsGenerating] = useState(true);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  // AI Explanation state
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsGenerating(true);
      setIsUsingFallback(false);
      
      const decodedTopic = topic ? decodeURIComponent(topic) : 'Gemengd';

      try {
        // Vraag 5 unieke vragen aan de AI
        const aiQuestions = await generateQuestions(decodedTopic, difficulty, 5);
        setQuestions(aiQuestions);
        toast.success("Unieke AI vragen geladen!");
      } catch (error) {
        console.error("Failed to generate AI questions, using fallback:", error);
        setIsUsingFallback(true);
        toast.error("AI generatie mislukt. We gebruiken standaard oefenvragen.");
        
        // Fallback logica (zelfde als voorheen)
        let filtered = fallbackQuestions;
        if (decodedTopic !== 'Gemengd') {
          filtered = fallbackQuestions.filter(q => q.topic.includes(decodedTopic) || decodedTopic.includes(q.topic));
        }
        
        // Als fallback filter te strikt was, gebruik alle fallbacks
        if (filtered.length === 0) filtered = fallbackQuestions;
        
        const shuffled = [...filtered].sort(() => Math.random() - 0.5);
        setQuestions(shuffled.slice(0, 5)); // max 5 per sessie
      } finally {
        setIsGenerating(false);
      }
    };

    fetchQuestions();
  }, [topic, difficulty]);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionId: string) => {
    if (hasAnswered) return;
    setSelectedOption(optionId);
  };

  const handleSubmit = async () => {
    if (!selectedOption || !currentQuestion || hasAnswered) return;

    const correctOption = currentQuestion.options.find(o => o.isCorrect);
    const isAnswerCorrect = selectedOption === correctOption?.id;
    
    setIsCorrect(isAnswerCorrect);
    setHasAnswered(true);

    if (isAnswerCorrect) {
      // XP is hoger voor moeilijkere vragen in theorie, maar we houden het simpel op 10 voor nu
      const points = difficulty === 'Moeilijk' ? 15 : difficulty === 'Gemiddeld' ? 10 : 5;
      toast.success(`Goed gedaan! +${points} XP`);
      setSessionScore(prev => prev + points);
      
      if (user?.userId) {
        await UserScoreService.updateScore(user.userId, points);
      }
    } else {
      if (user?.userId) {
        await UserScoreService.updateScore(user.userId, 0);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setIsCorrect(null);
      setAiExplanation(null);
    } else {
      // Quiz finished
      toast.success(`Sessie voltooid! Je hebt ${sessionScore} XP verdiend.`);
      navigate("/dashboard");
    }
  };

  const askAiForExplanation = async () => {
    if (!currentQuestion || !selectedOption) return;
    
    setIsAiLoading(true);
    setAiExplanation(null);
    
    const correctOption = currentQuestion.options.find(o => o.isCorrect);
    const userOption = currentQuestion.options.find(o => o.id === selectedOption);

    const prompt = `
      Je bent een behulpzame natuurkunde docent voor een Nederlandse HAVO 5 leerling.
      De leerling heeft de volgende vraag zojuist beantwoord op niveau '${difficulty}'.
      
      Vraag: "${currentQuestion.text}"
      De leerling koos: "${userOption?.text}" (Dit was fout)
      Het juiste antwoord is: "${correctOption?.text}"

      Leg in eenvoudig, bemoedigend Nederlands uit in maximaal 3 alinea's:
      1. Waarom het antwoord van de leerling onjuist is (welke denkfout werd er gemaakt?).
      2. Hoe je tot het juiste antwoord komt (welke formule, wet of theorie is nodig?).
      Gebruik markdown voor opmaak (vetgedrukt voor belangrijke termen, wiskundige notatie waar nuttig).
    `;

    try {
      const response = await AI.generateText(prompt);
      setAiExplanation(response);
    } catch (error) {
      console.error("AI Error:", error);
      toast.error("Kon de AI uitleg niet laden. Controleer je verbinding.");
      setAiExplanation("Er ging iets mis bij het ophalen van de uitleg. Probeer het later nog eens.");
    } finally {
      setIsAiLoading(false);
    }
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse-glow" />
          <BrainCircuit className="h-16 w-16 text-blue-600 animate-bounce relative z-10" />
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-2 text-center">
          AI genereert jouw unieke quiz...
        </h2>
        <p className="text-muted-foreground text-center max-w-md">
          Bedenken van 5 <strong>{difficulty.toLowerCase()}</strong> vragen over <strong>{decodeURIComponent(topic || 'alle onderwerpen')}</strong>.
        </p>
        <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
          <Loader2 className="h-4 w-4 animate-spin" /> Dit duurt een paar seconden
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-12">
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" asChild className="text-muted-foreground">
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" /> Stoppen
            </Link>
          </Button>
          <div className="font-semibold flex items-center gap-2">
            <span className="hidden sm:inline">Vraag</span> {currentIndex + 1} / {questions.length}
          </div>
          <div className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
             {sessionScore} XP
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 mt-8 max-w-3xl">
        {/* Warnings / Info */}
        {isUsingFallback && (
          <div className="mb-6 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg flex items-start gap-3 text-amber-800 dark:text-amber-300 text-sm">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <p>We konden momenteel geen verbinding maken met de AI. Je oefent nu met standaard vragen uit de database.</p>
          </div>
        )}

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full mb-8 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-none shadow-xl bg-white dark:bg-slate-900 overflow-hidden">
              {/* Top accent line based on difficulty */}
              <div className={`h-1 w-full ${
                difficulty === 'Moeilijk' ? 'bg-red-500' : 
                difficulty === 'Gemiddeld' ? 'bg-blue-500' : 'bg-green-500'
              }`} />
              
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-300 px-3 py-1 rounded-full">
                    {currentQuestion.topic}
                  </span>
                  <div className="flex gap-2">
                    <span className="text-xs text-muted-foreground bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md flex items-center">
                      Niveau: {difficulty}
                    </span>
                    {!isUsingFallback && (
                      <span className="text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md flex items-center gap-1">
                        <Sparkles className="h-3 w-3" /> AI Gegenereerd
                      </span>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl md:text-2xl leading-relaxed mt-4">
                  <ReactMarkdown>{currentQuestion.text}</ReactMarkdown>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedOption === option.id;
                  const showCorrect = hasAnswered && option.isCorrect;
                  const showWrong = hasAnswered && isSelected && !option.isCorrect;

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      disabled={hasAnswered}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between
                        ${!hasAnswered && !isSelected ? "border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20" : ""}
                        ${!hasAnswered && isSelected ? "border-blue-600 bg-blue-50 dark:bg-blue-900/30" : ""}
                        ${showCorrect ? "border-green-500 bg-green-50 dark:bg-green-900/30 text-green-900 dark:text-green-100" : ""}
                        ${showWrong ? "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-900 dark:text-red-100" : ""}
                        ${hasAnswered && !showCorrect && !showWrong ? "border-slate-200 dark:border-slate-800 opacity-50" : ""}
                      `}
                    >
                      <span className="font-medium text-base md:text-lg">
                         <ReactMarkdown className="[&>p]:m-0">{option.text}</ReactMarkdown>
                      </span>
                      {showCorrect && <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 ml-4" />}
                      {showWrong && <XCircle className="h-6 w-6 text-red-500 shrink-0 ml-4" />}
                    </button>
                  );
                })}
              </CardContent>
              <CardFooter className="flex-col gap-4 pt-6 bg-slate-50 dark:bg-slate-900/50 rounded-b-xl">
                {!hasAnswered ? (
                  <Button 
                    onClick={handleSubmit} 
                    disabled={!selectedOption}
                    className="w-full h-14 text-lg shadow-lg shadow-blue-500/20"
                  >
                    Controleer Antwoord
                  </Button>
                ) : (
                  <div className="w-full space-y-4">
                    {isCorrect === false && !aiExplanation && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-5 rounded-xl bg-white dark:bg-slate-800 border shadow-sm flex flex-col items-center text-center space-y-4"
                      >
                        <p className="font-medium text-lg">Dat was helaas niet correct.</p>
                        <Button 
                          onClick={askAiForExplanation}
                          disabled={isAiLoading}
                          variant="outline"
                          className="w-full sm:w-auto border-indigo-200 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-950 h-12"
                        >
                          {isAiLoading ? (
                            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> AI docent schrijft uitleg...</>
                          ) : (
                            <><BrainCircuit className="mr-2 h-5 w-5" /> Vraag uitleg aan de AI Docent</>
                          )}
                        </Button>
                      </motion.div>
                    )}

                    {aiExplanation && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="p-6 rounded-xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/50 dark:to-slate-900 dark:border-indigo-800 shadow-sm"
                      >
                        <div className="flex items-center gap-2 mb-4 text-indigo-700 dark:text-indigo-400 font-bold text-lg">
                          <Sparkles className="h-5 w-5" />
                          <span>Uitleg van je AI Docent</span>
                        </div>
                        <div className="prose prose-indigo dark:prose-invert max-w-none text-sm md:text-base leading-relaxed">
                          <ReactMarkdown>{aiExplanation}</ReactMarkdown>
                        </div>
                      </motion.div>
                    )}

                    <Button 
                      onClick={handleNextQuestion} 
                      className="w-full h-14 text-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                      {currentIndex < questions.length - 1 ? "Volgende Vraag" : "Bekijk Resultaten"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Quiz;
