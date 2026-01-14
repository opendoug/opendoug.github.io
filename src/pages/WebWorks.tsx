import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code2, Palette, Server, Shield, TrendingUp, RefreshCcw, Sparkles } from "lucide-react";
import { Contact } from "@/components/Contact";
import waltersworksLogo from "@/assets/waltersworks-logo.png";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Custom web applications built with modern frameworks and best practices"
  },
  {
    icon: Palette,
    title: "Design & UX",
    description: "Beautiful, responsive designs that engage users and drive conversions"
  },
  {
    icon: Server,
    title: "Hosting Services",
    description: "Reliable hosting solutions in partnership with major providers"
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Secure web servers, regular updates, and proactive monitoring"
  },
  {
    icon: TrendingUp,
    title: "SEO & Optimization",
    description: "Search engine optimization and local SEO services to boost visibility"
  },
  {
    icon: RefreshCcw,
    title: "Migrations & Backups",
    description: "Seamless site migrations, automated backups, and reliable restores"
  }
];

const highlights = [
  "Custom development and CMS solutions",
  "WordPress, Webflow, and HTML5 expertise",
  "Enterprise-grade hosting and security",
  "Comprehensive SEO and optimization"
];

const WebWorks = () => {
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
                  <Code2 className="h-10 w-10 text-highlight" />
                </div>
              </div>
              
              <h1 className="comic-headline text-5xl md:text-7xl text-primary-foreground mb-6">
                Build Your <span className="text-highlight">Digital Presence</span>
              </h1>
              
              <div className="speech-bubble max-w-2xl mx-auto mb-10">
                <p className="text-xl md:text-2xl text-foreground font-medium">
                  Full-stack web development, design, hosting, and maintenance services that <span className="text-primary font-bold">bring your vision to life</span>
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
                End-to-end web solutions from concept to launch and beyond
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
                  <span className="text-primary">Complete Web Solutions</span> for Modern Businesses
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whether you need a brand new website or want to upgrade your existing one, we deliver comprehensive web development services. From custom HTML5 builds to popular CMS platforms like WordPress and Webflow, we have the expertise to bring your vision to life.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Beyond development, we provide enterprise-grade hosting through partnerships with major providers, implement robust security measures, optimize for search engines, and ensure your site stays backed up and secure.
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
                    <div className="font-outfit font-black text-5xl text-primary mb-2">Design</div>
                    <div className="text-2xl text-muted-foreground mb-2">+</div>
                    <div className="font-outfit font-black text-5xl text-primary mb-4">Develop</div>
                    <div className="inline-block success-badge">
                      Complete Solutions
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
              © 2024 WebWorks. Full-Stack Web Development & Design.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebWorks;