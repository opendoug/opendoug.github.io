import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-4">
            Ready to <span className="text-primary">Accelerate</span> Your Growth?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how executive leadership and technology enablement can drive your business forward
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-[var(--gradient-card)] shadow-[var(--shadow-elegant)]">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">doug@waltersworks.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">(717) 467-1227</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="font-outfit font-semibold text-2xl mb-4">
                  Let's Talk Growth & Leadership
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation to discuss your business challenges and leadership needs.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-outfit font-semibold w-full md:w-auto"
                >
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
