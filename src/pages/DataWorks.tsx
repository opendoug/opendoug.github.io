import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Database, GitMerge, Zap, BarChart3, RefreshCw, Lock, Sparkles } from "lucide-react";
import { Contact } from "@/components/Contact";
import { LogoMarquee } from "@/components/LogoMarquee";
import waltersworksLogo from "@/assets/waltersworks-logo.png";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Design and build robust data infrastructure that scales with your business needs"
  },
  {
    icon: GitMerge,
    title: "Data Integration",
    description: "Connect siloed systems and create unified data pipelines for seamless information flow"
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Transform raw data into actionable insights with advanced analytics and visualization"
  },
  {
    icon: RefreshCw,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows to increase efficiency and reduce errors"
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    description: "Build event-driven architectures that deliver insights when you need them most"
  },
  {
    icon: Lock,
    title: "Data Governance",
    description: "Implement secure, compliant data management practices that protect your business"
  }
];

const highlights = [
  "End-to-end data engineering solutions",
  "Break down data silos across your organization",
  "Automated workflows and intelligent systems",
  "Faster, data-driven decision making"
];

const DataWorks = () => {
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
              {/* Comic sparkle decoration */}
              <div className="inline-block mb-6 animate-pop-in">
                <div className="comic-icon w-20 h-20 mx-auto bg-highlight/20 border-highlight shadow-[2px_2px_0_hsl(var(--highlight))]">
                  <Database className="h-10 w-10 text-highlight" />
                </div>
              </div>
              
              <h1 className="comic-headline text-5xl md:text-7xl text-primary-foreground mb-6">
                Transform <span className="text-highlight">Your Data</span>
              </h1>
              
              <div className="speech-bubble max-w-2xl mx-auto mb-10">
                <p className="text-xl md:text-2xl text-foreground font-medium">
                  Data engineering, analytics, and automation that turn <span className="text-primary font-bold">siloed information</span> into <span className="text-primary font-bold">integrated, actionable insights</span>
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

        {/* Services Section - Comic Grid */}
        <section id="services" className="py-24 halftone-bg">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="comic-headline text-4xl md:text-5xl text-foreground mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive data solutions that drive better decisions, faster
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="service-card group">
                  <div className="comic-icon mb-4 group-hover:shadow-comic-colored transition-all">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-outfit font-bold text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Comic Panel Layout */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="comic-headline text-4xl md:text-5xl text-foreground mb-6">
                  <span className="text-primary">Integrated Data Systems</span> for Smarter Decisions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Your data lives in different systems, formats, and platforms - making it hard to see the full picture. We take your siloed data and engineer an integrated, automated information system that puts insights at your fingertips.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From data pipelines and warehouses to real-time analytics and intelligent automation, we build the infrastructure that enables your organization to make better decisions, faster.
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
                    <div className="font-outfit font-black text-5xl text-primary mb-2">Data</div>
                    <div className="text-2xl text-muted-foreground mb-2">+</div>
                    <div className="font-outfit font-black text-5xl text-primary mb-4">Systems</div>
                    <div className="inline-block success-badge">
                      Integrated Intelligence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LogoMarquee />

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
              © 2024 DataWorks. Data Engineering & Analytics Excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataWorks;