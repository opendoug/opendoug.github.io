import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import waltersworksLogo from "@/assets/waltersworks-logo-new.png";

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-3 border-foreground">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={waltersworksLogo} 
              alt="WaltersWorks" 
              className="w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform" 
            />
            <div className="hidden sm:block text-xl md:text-2xl text-foreground tracking-tight font-bold">
              <span className="font-muli font-black">WALTERS</span>
              <span className="font-muli font-extralight italic">WORKS</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/"
              className="text-foreground hover:text-primary transition-colors font-bold uppercase text-sm tracking-wide"
            >
              Home
            </Link>
            <Link 
              to="/execworks"
              className="text-foreground hover:text-primary transition-colors font-bold uppercase text-sm tracking-wide"
            >
              ExecWorks
            </Link>
            <Link 
              to="/dataworks"
              className="text-foreground hover:text-primary transition-colors font-bold uppercase text-sm tracking-wide"
            >
              DataWorks
            </Link>
            <Link 
              to="/webworks"
              className="text-foreground hover:text-primary transition-colors font-bold uppercase text-sm tracking-wide"
            >
              WebWorks
            </Link>
            {!isHome && (
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-bold uppercase text-sm tracking-wide"
              >
                Contact
              </button>
            )}
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="comic-button bg-secondary text-secondary-foreground hover:bg-secondary/90 font-outfit font-bold text-sm"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};