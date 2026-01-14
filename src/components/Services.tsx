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
    <section id="services" className="py-24 halftone-bg">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="comic-headline text-4xl md:text-5xl text-foreground mb-4">
            <span className="text-primary">Leadership</span> & Growth Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Executive leadership, business strategy, and coaching - with technology expertise to accelerate every initiative
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group"
            >
              <div className="comic-icon mb-4 group-hover:shadow-comic-colored transition-all">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-outfit font-bold text-xl text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};