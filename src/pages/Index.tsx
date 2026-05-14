import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Atom, BrainCircuit, GraduationCap, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

  // Redirect authenticated users to the dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 z-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] z-0 animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] z-0 animate-pulse-glow delay-300" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 backdrop-blur-sm"
            >
              <Atom className="h-4 w-4 animate-spin-slow" />
              <span className="text-sm font-medium tracking-wide uppercase">Voorbereiding op het Eindexamen</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
            >
              Slaag voor <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">HAVO 5 Natuurkunde</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed"
            >
              Oefen met echte examenvragen, verdien punten, en krijg direct gepersonaliseerde uitleg van onze AI als je vastloopt.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_0_40px_rgba(79,70,229,0.4)] transition-all hover:scale-105">
                <Link to="/register">
                  Start met Oefenen
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link to="/login">
                  Inloggen
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-32 max-w-5xl mx-auto">
            <FeatureCard 
              icon={<GraduationCap className="h-8 w-8 text-blue-400" />}
              title="Echte Examenvragen"
              description="Oefen met opgaven uit eerdere centrale examens om perfect voorbereid te zijn."
              delay={0.4}
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-yellow-400" />}
              title="Puntensysteem"
              description="Verdien punten voor elk goed antwoord en houd je voortgang nauwkeurig bij."
              delay={0.5}
            />
            <FeatureCard 
              icon={<BrainCircuit className="h-8 w-8 text-indigo-400" />}
              title="AI Uitleg"
              description="Vraag fout? Geen probleem. Onze AI docent legt het stap voor stap aan je uit."
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="glass p-8 rounded-2xl flex flex-col items-center text-center space-y-4 hover:bg-white/10 transition-colors"
  >
    <div className="p-4 rounded-full bg-slate-800/50 border border-slate-700/50">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-slate-300">
      {description}
    </p>
  </motion.div>
);

export default Index;
