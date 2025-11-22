import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, TrendingUp, Users, Database, Globe, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Executive Leadership",
    description: "Operational leadership and business management - from running day-to-day operations to scaling organizations for sustainable growth."
  },
  {
    icon: Users,
    title: "Executive & Leadership Coaching",
    description: "Personalized coaching for executives and leaders to accelerate growth, improve decision-making, and build high-performing teams."
  },
  {
    icon: TrendingUp,
    title: "Business Growth Strategy",
    description: "Comprehensive strategies to drive revenue, optimize operations, and achieve ambitious business objectives with technology as an accelerator."
  },
  {
    icon: Database,
    title: "Data & Analytics Infrastructure",
    description: "Build data stacks and analytics systems that turn information into competitive advantage and enable data-driven decisions."
  },
  {
    icon: Globe,
    title: "Digital Infrastructure",
    description: "Web development, digital marketing systems, and technology platforms that power modern business operations and growth."
  },
  {
    icon: Lightbulb,
    title: "Technology-Enabled Solutions",
    description: "Hands-on implementation of technology solutions that solve real business problems and create measurable value."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-4">
            <span className="text-primary">Leadership</span> & Growth Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Executive leadership, business strategy, and coaching - with technology expertise to accelerate every initiative
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border bg-[var(--gradient-card)] hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-outfit text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
