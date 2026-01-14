import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 halftone-bg">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="comic-headline text-4xl md:text-5xl text-foreground mb-4">
            Ready to <span className="text-primary">Accelerate</span> Your Growth?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how executive leadership and technology enablement can drive your business forward
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="comic-panel p-8 md:p-12 bg-card">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="comic-icon flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">doug@waltersworks.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="comic-icon flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">(717) 467-1227</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="font-outfit font-bold text-2xl mb-4">
                  Let's Talk Growth & Leadership
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation to discuss your business challenges and leadership needs.
                </p>
                <Button 
                  size="lg"
                  className="comic-button bg-secondary text-secondary-foreground hover:bg-secondary/90 font-outfit font-bold w-full md:w-auto"
                  asChild
                >
                  <a href="mailto:doug@waltersworks.com?subject=Website%20Meeting%20Request">
                    Schedule Meeting
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};