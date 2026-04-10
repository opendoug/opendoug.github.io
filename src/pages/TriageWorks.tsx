import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Brain, Zap, Calendar, Rocket, Sparkles, Filter, Shuffle, MousePointer2, ListTodo } from "lucide-react";
import { Contact } from "@/components/Contact";
import waltersworksLogo from "@/assets/waltersworks-logo.png";

const comparisonData = [
  {
    category: "(Input)",
    manual: "Manual Entry (Scattered lists across multiple apps)",
    triage: "Centralized Brain Dump (One frictionless capture point)",
    icon: ListTodo
  },
  {
    category: "(Processing)",
    manual: "Decision Fatigue (Agonizing over priority order)",
    triage: "AI Priority Sort (Algorithmic, instant ranking)",
    icon: Shuffle
  },
  {
    category: "(Structuring)",
    manual: "Time Tetris (Guessing durations and calendar gaps)",
    triage: "AI Auto-Schedule (Mathematical time blocking)",
    icon: Calendar
  },
  {
    category: "(Execution)",
    manual: "App Toggling (Manually copying tasks to calendar)",
    triage: "Direct Launch (Seamless API synchronization)",
    icon: Rocket
  }
];

const phases = [
  {
    phase: "Phase 1",
    title: "Unstructured Brain Dump",
    description: "Capture intent without worrying about order or timing. Just log the task and the estimated duration.",
    icon: Brain,
    color: "bg-primary/20"
  },
  {
    phase: "Phase 2",
    title: "AI Priority Sort",
    description: "Bypass decision fatigue. Let the engine determine what matters most using algorithmic instant ranking.",
    icon: Shuffle,
    color: "bg-secondary/20"
  },
  {
    phase: "Phase 3",
    title: "AI Auto-Schedule",
    description: "Knowing what to do is only half the battle. Now, the engine calculates exactly when to do it.",
    icon: Calendar,
    color: "bg-accent/20"
  },
  {
    phase: "Phase 4",
    title: "Seamless Integration",
    description: "Structured data flows instantly from the planning engine to your live execution timeline.",
    icon: Rocket,
    color: "bg-highlight/20"
  }
];

const TriageWorks = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="comic-hero min-h-[90vh] flex items-center relative">
          <div className="container relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 animate-pop-in">
                <div className="comic-icon w-20 h-20 mx-auto bg-highlight/20 border-highlight shadow-[2px_2px_0_hsl(var(--highlight))]">
                  <Rocket className="h-10 w-10 text-highlight" />
                </div>
              </div>
              
              <h1 className="comic-headline text-4xl md:text-7xl text-primary-foreground mb-6">
                Reclaim Your <span className="text-highlight">Cognitive Capacity</span>
              </h1>
              
              <div className="speech-bubble max-w-2xl mx-auto mb-10">
                <p className="text-xl md:text-2xl text-foreground font-medium">
                  Stop managing lists. <span className="text-primary font-bold">Start executing your day.</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  className="comic-button bg-secondary text-secondary-foreground hover:bg-secondary/90 font-outfit font-bold text-lg"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('chaos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="comic-button bg-card text-foreground hover:bg-muted font-outfit font-bold text-lg"
                >
                  See How it Works
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-foreground" />
        </section>

        {/* Chaos to Calendar Section */}
        <section id="chaos" className="py-24 halftone-bg">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="comic-headline text-4xl md:text-5xl text-foreground mb-4">
                From <span className="text-primary font-black uppercase">Chaos</span> to <span className="text-secondary font-black uppercase">Calendar</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Turning raw thoughts into actionable schedules without the cognitive friction.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="comic-panel p-8 bg-card flex flex-col items-center justify-center min-h-[300px]">
                <div className="relative w-full h-full flex items-center justify-center grayscale opacity-50">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="comic-panel p-3 bg-muted border-dashed rotate-3">
                        <div className="h-2 w-12 bg-muted-foreground/30 rounded mb-2"></div>
                        <div className="h-2 w-8 bg-muted-foreground/20 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-background px-4 py-2 border-comic font-black text-xl rotate-[-2deg]">RAW THOUGHTS</div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-16 h-16 text-primary animate-pulse hidden lg:block" />
                <ArrowRight className="w-16 h-16 text-primary animate-pulse rotate-90 lg:hidden" />
              </div>

              <div className="comic-panel p-8 bg-card flex flex-col items-center justify-center min-h-[300px] lg:col-start-2">
                <div className="w-full">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-4 mb-4 items-center">
                      <div className="text-sm font-bold w-12 text-muted-foreground">{10 + i} AM</div>
                      <div className="flex-1 comic-panel p-2 bg-primary/10 border-primary/30">
                        <div className="h-2 w-3/4 bg-primary/40 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="bg-background px-4 py-2 border-comic font-black text-xl rotate-[2deg]">ACTIONABLE SCHEDULE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="comic-headline text-4xl md:text-5xl text-foreground mb-4">
                The <span className="text-primary">Cognitive Load</span> Crisis
              </h2>
              <p className="text-xl text-muted-foreground">Why traditional task management fails modern executives.</p>
            </div>

            <div className="max-w-5xl mx-auto overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0 border-comic-thick rounded-xl overflow-hidden shadow-comic">
                {/* Header */}
                <div className="bg-foreground text-foreground-foreground p-4 text-center border-b-2 border-foreground font-black uppercase text-sm tracking-widest hidden md:block">Process</div>
                <div className="bg-foreground text-background p-4 text-center border-b-2 border-foreground font-black uppercase text-sm tracking-widest">The Manual Paradigm</div>
                <div className="bg-primary text-primary-foreground p-4 text-center border-b-2 border-foreground font-black uppercase text-sm tracking-widest">The Triage Automation</div>

                {/* Rows */}
                {comparisonData.map((row, i) => (
                  <div key={i} className="contents group">
                    <div className="bg-card p-6 border-b-2 border-r-2 border-foreground flex flex-col items-center justify-center md:flex hidden">
                      <row.icon className="w-8 h-8 text-muted-foreground mb-2" />
                      <span className="text-xs font-bold text-muted-foreground uppercase">{row.category}</span>
                    </div>
                    <div className="bg-card p-6 border-b-2 border-r-2 border-foreground italic text-muted-foreground text-center md:text-left">
                      <div className="md:hidden font-black text-primary mb-2 uppercase text-xs">{row.category} (Manual)</div>
                      {row.manual}
                    </div>
                    <div className="bg-primary/5 p-6 border-b-2 border-foreground font-bold text-foreground text-center md:text-left">
                      <div className="md:hidden font-black text-primary mb-2 uppercase text-xs">{row.category} (Triage)</div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{row.triage}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Phased Journey */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container relative z-10">
             <div className="text-center mb-16">
              <h2 className="comic-headline text-4xl md:text-5xl text-foreground mb-4">
                The <span className="text-primary uppercase">Automation</span> Pipeline
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((p, i) => (
                <div key={i} className="comic-panel p-6 bg-card group hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="success-badge scale-75 origin-left">{p.phase}</span>
                    <p.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-outfit font-black text-xl mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  
                  {i < 3 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block speech-bubble">
                <p className="text-2xl font-black text-primary uppercase tracking-tighter">
                  Zero Manual Drag. Maximum Cognitive Bandwidth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="py-12 border-t-4 border-foreground bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={waltersworksLogo} alt="WaltersWorks" className="w-8 h-8" />
              <span className="text-muted-foreground">A <span className="font-bold text-foreground">WALTERSWORKS</span> Brand</span>
            </div>
            <p className="text-muted-foreground text-center text-sm">
              © 2024 Triage. Built for Execution.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TriageWorks;
