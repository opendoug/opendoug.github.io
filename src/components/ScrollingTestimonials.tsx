import { cn } from "@/lib/utils";

const testimonials = [
  "Doug was awesome.",
  "He spent extra time in the beginning of the project to fine tune his understanding of our needs and then delivered great work.",
  "Very responsive and the work was done to perfection!",
  "Sincerity to projects.",
  "Doug came through for me as usual when I needed extra help.",
];

interface ScrollingRowProps {
  direction: "left" | "right";
  speed?: number;
  className?: string;
}

const ScrollingRow = ({ direction, speed = 30, className }: ScrollingRowProps) => {
  // Double the testimonials for seamless loop
  const items = [...testimonials, ...testimonials];
  
  return (
    <div className={cn("flex whitespace-nowrap overflow-hidden", className)}>
      <div
        className={cn(
          "flex gap-12 animate-marquee",
          direction === "right" && "animate-marquee-reverse"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {items.map((text, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-muli italic text-primary-foreground/[0.13] select-none"
          >
            "{text}"
          </span>
        ))}
      </div>
      <div
        className={cn(
          "flex gap-12 animate-marquee",
          direction === "right" && "animate-marquee-reverse"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
        aria-hidden="true"
      >
        {items.map((text, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-muli italic text-primary-foreground/[0.13] select-none"
          >
            "{text}"
          </span>
        ))}
      </div>
    </div>
  );
};

export const ScrollingTestimonials = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex flex-col justify-center gap-12 py-12">
      <ScrollingRow direction="left" speed={80} />
      <ScrollingRow direction="right" speed={89} className="mt-4" />
      <ScrollingRow direction="left" speed={70} className="mt-4" />
      <ScrollingRow direction="right" speed={97} className="mt-4" />
    </div>
  );
};
