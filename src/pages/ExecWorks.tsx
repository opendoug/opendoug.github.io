import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Sparkles } from "lucide-react";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import waltersworksLogo from "@/assets/waltersworks-logo.png";

const highlights = [
  "Executive leadership & operations experience",
  "Business growth strategist & coach",
  "Technology-enabled decision making",
  "From boardroom strategy to hands-on execution"
];

const ExecWorks = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section - Comic Style */}
        <section className="comic-hero min-h-[90vh] flex items-center relative">
          <div className="container relative z-10 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-6 animate-pop-in">
                <div className="comic-icon w-20 h-20 mx-auto bg-highlight/20 border-highlight shadow-[2px_2px_0_hsl(var(--highlight))]">
                  <Users className="h-10 w-10 text-highlight" />
                </div>
              </div>
              
              <h1 className="comic-headline text-5xl md:text-7xl text-primary-foreground mb-6">
                Tech-Enabled <span className="text-highlight">Executive</span>
              </h1>
              
              <div className="speech-bubble max-w-2xl mx-auto mb-10">
                <p className="text-xl md:text-2xl text-foreground font-medium">
                  Executive leadership, business growth strategy, and coaching — <span className="text-primary font-bold">powered by technology</span> to accelerate results
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
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="comic-button bg-card text-foreground hover:bg-muted font-outfit font-bold text-lg"
                >
                  View Services
                </Button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-foreground" />
        </section>

        <Services />

        {/* About Section - Comic Panel Layout */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="comic-headline text-4xl md:text-5xl text-foreground mb-6">
                  <span className="text-primary">Executive Leadership</span> Powered by Technology
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a tech-enabled executive who can run your business, coach your leadership team, and drive growth - with deep technology expertise that accelerates every initiative. Not just an IT consultant, but an executive who understands operations, strategy, and how to build and scale organizations.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you need someone to step into an executive role, develop your leaders, architect your business strategy, or build the data and digital infrastructure to support it all - I deliver results by combining business acumen with technology enablement.
                </p>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center border-2 border-foreground">
                        <CheckCircle className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="comic-panel p-8 bg-card">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-highlight mx-auto mb-4 animate-float" />
                    <div className="font-outfit font-black text-5xl text-primary mb-2">Business</div>
                    <div className="text-2xl text-muted-foreground mb-2">+</div>
                    <div className="font-outfit font-black text-5xl text-primary mb-4">Technology</div>
                    <div className="inline-block success-badge">
                      Accelerated Growth
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      {/* Footer - Comic Style */}
      <footer className="py-12 border-t-4 border-foreground bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={waltersworksLogo} alt="WaltersWorks" className="w-8 h-8" />
              <span className="text-muted-foreground">A <span className="font-bold text-foreground">WALTERSWORKS</span> Brand</span>
            </div>
            <p className="text-muted-foreground text-center text-sm">
              © 2024 ExecWorks. Executive Leadership & Business Growth.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExecWorks;