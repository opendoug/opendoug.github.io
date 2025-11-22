import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import waltersworksLogo from "@/assets/waltersworks-logo.png";

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={waltersworksLogo} alt="WaltersWorks" className="w-8 h-8" />
            <div className="text-2xl text-foreground tracking-tight">
              <span className="font-muli font-black">WALTERS</span><span className="font-muli font-extralight italic">WORKS</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/execworks"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              ExecWorks
            </Link>
            <Link 
              to="/dataworks"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              DataWorks
            </Link>
            <Link 
              to="/webworks"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              WebWorks
            </Link>
            {!isHome && (
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            )}
          </div>

          <Button 
            onClick={() => {
              if (isHome) {
                scrollToSection('contact');
              } else {
                scrollToSection('contact');
              }
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-medium"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
