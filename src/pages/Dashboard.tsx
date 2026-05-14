import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserNav } from "@/components/auth/UserNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useAuth } from "@/hooks/use-auth";
import { UserScoreService, UserScore } from "@/entities/UserScore";
import { BookOpen, Trophy, ArrowRight, Activity, Zap, Sparkles, Brain } from "lucide-react";
import { physicsTopics } from "@/data/questions";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [scoreData, setScoreData] = useState<UserScore | null>(null);
  const [loading, setLoading] = useState(true);
  const [difficulty, setDifficulty] = useState<'Makkelijk' | 'Gemiddeld' | 'Moeilijk'>('Gemiddeld');

  useEffect(() => {
    const fetchScore = async () => {
      if (user?.userId) {
        try {
          const data = await UserScoreService.findByUserId(user.userId);
          setScoreData(data);
        } catch (error) {
          console.error("Error fetching score:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchScore();
  }, [user]);

  const startQuiz = (topic?: string) => {
    const baseUrl = topic ? `/quiz/${encodeURIComponent(topic)}` : `/quiz/Gemengd`;
    navigate(`${baseUrl}?difficulty=${difficulty}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg shadow-blue-500/20">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              FysicaLeren
            </span>
          </div>
          <UserNav />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Welkom terug, {user?.username}!
          </h1>
          <p className="text-muted-foreground">
            De AI staat klaar om nieuwe vragen voor je te genereren.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Stats Cards */}
          <Card className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white border-none shadow-xl shadow-blue-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-100 text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                <Trophy className="h-4 w-4" /> Jouw Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold">
                  {loading ? "..." : (scoreData?.totalScore || 0)}
                </span>
                <span className="text-blue-200 font-medium">XP</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                <Activity className="h-4 w-4" /> Vragen Beantwoord
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-foreground">
                {loading ? "..." : (scoreData?.questionsAnswered || 0)}
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                <Brain className="h-4 w-4" /> Niveau
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                {loading ? "..." : 
                  ((scoreData?.totalScore || 0) > 200 ? "Expert" : 
                  (scoreData?.totalScore || 0) > 50 ? "Gevorderd" : "Beginner")
                }
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Difficulty Selection */}
        <div className="mb-8 p-6 glass rounded-2xl border border-border/50 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-500" /> 
            Kies je AI-moeilijkheidsgraad
          </h2>
          <ToggleGroup type="single" value={difficulty} onValueChange={(v) => v && setDifficulty(v as any)} className="justify-start">
            <ToggleGroupItem value="Makkelijk" aria-label="Toggle Makkelijk" className="data-[state=on]:bg-green-100 data-[state=on]:text-green-700 dark:data-[state=on]:bg-green-900/30 dark:data-[state=on]:text-green-400">
              Makkelijk
            </ToggleGroupItem>
            <ToggleGroupItem value="Gemiddeld" aria-label="Toggle Gemiddeld" className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700 dark:data-[state=on]:bg-blue-900/30 dark:data-[state=on]:text-blue-400">
              Gemiddeld
            </ToggleGroupItem>
            <ToggleGroupItem value="Moeilijk" aria-label="Toggle Moeilijk" className="data-[state=on]:bg-red-100 data-[state=on]:text-red-700 dark:data-[state=on]:bg-red-900/30 dark:data-[state=on]:text-red-400">
              Moeilijk (Examen niveau)
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="text-sm text-muted-foreground mt-3">
            De AI genereert direct unieke vragen op basis van jouw keuze.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">Kies een Onderwerp</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mix Mode Card */}
          <Card 
            onClick={() => startQuiz()} 
            className="group hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer flex flex-col relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent z-0 pointer-events-none" />
            <CardHeader className="relative z-10">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 w-fit rounded-xl mb-3 text-blue-600 dark:text-blue-400 shadow-inner">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle>Gemengde Opgaven</CardTitle>
              <CardDescription>Laat de AI een unieke mix van alle onderwerpen genereren.</CardDescription>
            </CardHeader>
            <div className="flex-grow" />
            <CardFooter className="relative z-10">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:opacity-90 transition-opacity">
                Genereer Quiz <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Specific Topic Cards */}
          {physicsTopics.map((topic) => (
            <Card 
              key={topic} 
              onClick={() => startQuiz(topic)}
              className="group hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all cursor-pointer flex flex-col"
            >
              <CardHeader>
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 w-fit rounded-xl mb-3 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{topic}</CardTitle>
                <CardDescription>Oefen specifiek met {topic.toLowerCase()}.</CardDescription>
              </CardHeader>
              <div className="flex-grow" />
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 transition-colors">
                  Start <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
