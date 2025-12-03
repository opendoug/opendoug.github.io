import { useEffect, useRef } from "react";

interface Logo {
  name: string;
  src: string;
}

const logos: Logo[] = [
  { name: "QuickBase", src: "https://logo.clearbit.com/quickbase.com" },
  { name: "QuickBooks", src: "https://logo.clearbit.com/quickbooks.intuit.com" },
  { name: "AppFolio", src: "https://logo.clearbit.com/appfolio.com" },
  { name: "Trello", src: "https://logo.clearbit.com/trello.com" },
  { name: "TSheets", src: "https://logo.clearbit.com/tsheets.com" },
  { name: "Google Workspace", src: "https://logo.clearbit.com/workspace.google.com" },
  { name: "RingCentral", src: "https://logo.clearbit.com/ringcentral.com" },
  { name: "Google Cloud", src: "https://logo.clearbit.com/cloud.google.com" },
  { name: "Amazon Redshift", src: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "Fivetran", src: "https://logo.clearbit.com/fivetran.com" },
  { name: "Stitch", src: "https://logo.clearbit.com/stitchdata.com" },
  { name: "Airbyte", src: "https://logo.clearbit.com/airbyte.com" },
  { name: "dbt", src: "https://logo.clearbit.com/getdbt.com" },
  { name: "Sisense", src: "https://logo.clearbit.com/sisense.com" },
  { name: "Metabase", src: "https://logo.clearbit.com/metabase.com" },
];

export const LogoMarquee = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mb-8">
        <h3 className="font-outfit font-semibold text-2xl md:text-3xl text-center text-foreground">
          Systems We've <span className="text-primary">Worked With</span>
        </h3>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee container */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee gap-12 py-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee gap-12 py-4" aria-hidden="true">
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-24 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
