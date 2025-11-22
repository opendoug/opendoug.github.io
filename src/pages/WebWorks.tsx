import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Code2, Palette, Server, Shield, TrendingUp, RefreshCcw } from "lucide-react";
import { Contact } from "@/components/Contact";
import heroImage from "@/assets/hero-consultation.jpg";
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
                Build Your <span className="text-primary">Digital Presence</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
                Full-stack web development, design, hosting, and maintenance services that bring your vision to life
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

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-4">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                End-to-end web solutions from concept to launch and beyond
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:border-primary/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-outfit text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6">
                  <span className="text-primary">Complete Web Solutions</span> for Modern Businesses
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Whether you need a brand new website or want to upgrade your existing one, we deliver comprehensive web development services. From custom HTML5 builds to popular CMS platforms like WordPress and Webflow, we have the expertise to bring your vision to life.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Beyond development, we provide enterprise-grade hosting through partnerships with major providers, implement robust security measures, optimize for search engines, and ensure your site stays backed up and secure. We handle everything from initial design to ongoing maintenance and migrations.
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
                      <div className="font-outfit font-bold text-6xl mb-2">Design</div>
                      <div className="text-xl mb-4">+</div>
                      <div className="font-outfit font-bold text-6xl mb-2">Develop</div>
                      <div className="text-xl mt-8">Complete Web Solutions<br />That Drive Results</div>
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
              © 2024 WebWorks. Full-Stack Web Development & Design.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebWorks;
