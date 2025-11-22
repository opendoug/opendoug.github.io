import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import heroImage from "@/assets/hero-consultation.jpg";
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
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          
          <div className="container relative z-10 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-outfit font-bold text-5xl md:text-7xl text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-lg">
                Tech-Enabled <span className="text-primary">Executive</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
                Executive leadership, business growth strategy, and coaching - powered by technology to accelerate results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-primary text-white hover:bg-primary/90 font-outfit font-semibold text-lg group shadow-[var(--shadow-elegant)]"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-primary text-primary hover:bg-primary/10 font-outfit font-semibold text-lg"
                >
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Services />

        {/* About Section */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6">
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
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-[var(--gradient-hero)] p-1">
                  <div className="w-full h-full rounded-xl bg-primary/95 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="font-outfit font-bold text-6xl mb-2">Business</div>
                      <div className="text-xl mb-4">+</div>
                      <div className="font-outfit font-bold text-6xl mb-2">Technology</div>
                      <div className="text-xl mt-8">Executive Leadership<br />That Accelerates Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="bg-muted/50 py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={waltersworksLogo} alt="WaltersWorks" className="w-8 h-8" />
              <span className="text-muted-foreground">A <span className="tracking-tight text-foreground"><span className="font-muli font-black">WALTERS</span><span className="font-muli font-extralight italic">WORKS</span></span> Brand</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 ExecWorks. Executive Leadership & Business Growth.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExecWorks;
