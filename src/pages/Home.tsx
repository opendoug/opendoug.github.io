import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Database, Code2, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import waltersworksLogo from "@/assets/waltersworks-logo.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section - Comic Style */}
        <section className="comic-hero min-h-[90vh] flex items-center relative">
          <div className="container relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo with comic pop effect */}
              <div className="inline-block mb-8 animate-pop-in">
                <div className="relative">
                  <img 
                    src={waltersworksLogo} 
                    alt="WaltersWorks" 
                    className="w-28 h-28 mx-auto"
                  />
                  <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-highlight animate-float" />
                </div>
              </div>
              
              {/* Comic-style headline */}
              <h1 className="comic-headline text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-primary-foreground mb-6">
                <span className="font-muli font-black">WALTERS</span>
                <span className="font-muli font-extralight italic">WORKS</span>
              </h1>
              
              {/* Speech bubble tagline */}
              <div className="speech-bubble max-w-2xl mx-auto mb-10">
                <p className="text-xl md:text-2xl text-foreground font-medium">
                  Helping organizations scale through <span className="text-primary font-bold">systems</span>, <span className="text-primary font-bold">clarity</span>, and <span className="text-primary font-bold">strategic decision-making</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="comic-button bg-secondary text-secondary-foreground hover:bg-secondary/90 font-outfit font-bold text-lg"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="comic-button bg-card text-foreground hover:bg-muted font-outfit font-bold text-lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative comic elements */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-foreground" />
        </section>

        {/* Services Section - Comic Panels */}
        <section id="services" className="py-24 halftone-bg">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="comic-headline text-4xl md:text-5xl text-foreground mb-4">
                Our <span className="text-primary">Brands</span>
              </h2>
              <div className="inline-block">
                <span className="success-badge">
                  <TrendingUp className="w-4 h-4" />
                  Building Success Together
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* ExecWorks Card */}
              <div className="service-card group">
                <div className="comic-icon mb-6 group-hover:shadow-comic-colored transition-all">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-outfit font-bold text-2xl text-foreground mb-3">
                  Exec<span className="text-primary">Works</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Executive leadership, business growth strategy, and coaching - powered by technology to accelerate results
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Executive leadership & operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Business growth strategy & coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Technology-enabled decision making</span>
                  </li>
                </ul>
                <Link to="/execworks">
                  <Button className="w-full comic-button bg-primary text-primary-foreground hover:bg-primary/90 group-hover:shadow-comic">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* DataWorks Card */}
              <div className="service-card group">
                <div className="comic-icon mb-6 group-hover:shadow-comic-colored transition-all">
                  <Database className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-outfit font-bold text-2xl text-foreground mb-3">
                  Data<span className="text-primary">Works</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Data engineering, analytics, and automation services that transform siloed data into integrated, actionable insights
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Data engineering & integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Analytics & business intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Process automation & optimization</span>
                  </li>
                </ul>
                <Link to="/dataworks">
                  <Button className="w-full comic-button bg-primary text-primary-foreground hover:bg-primary/90 group-hover:shadow-comic">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* WebWorks Card */}
              <div className="service-card group">
                <div className="comic-icon mb-6 group-hover:shadow-comic-colored transition-all">
                  <Code2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-outfit font-bold text-2xl text-foreground mb-3">
                  Web<span className="text-primary">Works</span>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Full-stack web development, design, hosting, and maintenance services that bring your vision to life
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Full-stack development & CMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Hosting & security services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>SEO & site optimization</span>
                  </li>
                </ul>
                <Link to="/webworks">
                  <Button className="w-full comic-button bg-primary text-primary-foreground hover:bg-primary/90 group-hover:shadow-comic">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA - Comic Panel Style */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="comic-panel p-8 md:p-12 text-center bg-card">
                <h2 className="comic-headline text-4xl md:text-5xl text-foreground mb-6">
                  Ready to <span className="text-primary">Scale</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's discuss how <span className="font-bold text-foreground">WALTERSWORKS</span> can help you achieve clarity, build systems, and make strategic decisions that drive growth
                </p>
                <Button 
                  size="lg"
                  className="comic-button bg-secondary text-secondary-foreground hover:bg-secondary/90 font-outfit font-bold text-lg"
                  asChild
                >
                  <a href="mailto:doug@waltersworks.com?subject=Website%20Meeting%20Request">
                    Let's Talk
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Clean Comic Style */}
      <footer className="py-12 border-t-4 border-foreground bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={waltersworksLogo} alt="WaltersWorks" className="w-8 h-8" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                <span className="font-muli font-black">WALTERS</span>
                <span className="font-muli font-extralight italic">WORKS</span>
              </span>
            </div>
            <p className="text-muted-foreground text-center text-sm">
              © 2024 WaltersWorks. Systems, Clarity, and Strategic Decision-Making.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;