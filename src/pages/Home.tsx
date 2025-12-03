import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Database, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import waltersworksLogo from "@/assets/waltersworks-logo.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
          
          <div className="container relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <img 
                src={waltersworksLogo} 
                alt="WaltersWorks" 
                className="w-32 h-32 mx-auto mb-8 animate-in fade-in duration-1000"
              />
              <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 tracking-tight">
                <span className="font-muli font-black">WALTERS</span><span className="font-muli font-extralight italic">WORKS</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
                Helping organizations scale through systems, clarity, and strategic decision-making
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary text-white hover:bg-primary/90 font-outfit font-semibold text-lg group shadow-[var(--shadow-elegant)]"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-primary text-primary hover:bg-primary/10 font-outfit font-semibold text-lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-4">
                Our <span className="text-primary">Brands</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized services tailored to your organizational needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* ExecWorks Card */}
              <Card className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-primary/50">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-outfit font-bold text-2xl text-foreground mb-3">
                  Exec<span className="text-primary">Works</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Executive leadership, business growth strategy, and coaching - powered by technology to accelerate results
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Executive leadership & operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Business growth strategy & coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Technology-enabled decision making</span>
                  </li>
                </ul>
                <Link to="/execworks">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>

              {/* DataWorks Card */}
              <Card className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-primary/50">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-outfit font-bold text-2xl text-foreground mb-3">
                  Data<span className="text-primary">Works</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Data engineering, analytics, and automation services that transform siloed data into integrated, actionable insights
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Data engineering & integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Analytics & business intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Process automation & optimization</span>
                  </li>
                </ul>
                <Link to="/dataworks">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>

              {/* WebWorks Card */}
              <Card className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-2 hover:border-primary/50">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-outfit font-bold text-2xl text-foreground mb-3">
                  Web<span className="text-primary">Works</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Full-stack web development, design, hosting, and maintenance services that bring your vision to life
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Full-stack development & CMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Hosting & security services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>SEO & site optimization</span>
                  </li>
                </ul>
                <Link to="/webworks">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6">
                Ready to <span className="text-primary">Scale Your Organization</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how <span className="tracking-tight text-foreground"><span className="font-muli font-black">WALTERS</span><span className="font-muli font-extralight italic">WORKS</span></span> can help you achieve clarity, build systems, and make strategic decisions that drive growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 font-outfit font-semibold text-lg"
                  asChild
                >
                  <a href="mailto:doug@waltersworks.com?subject=Website%20Meeting%20Request">
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/50 py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={waltersworksLogo} alt="WaltersWorks" className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-sm sm:text-lg tracking-tight text-foreground">
                <span className="font-muli font-black">WALTERS</span><span className="font-muli font-extralight italic">WORKS</span>
              </span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 WaltersWorks. Systems, Clarity, and Strategic Decision-Making.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
