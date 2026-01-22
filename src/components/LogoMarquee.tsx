import { useEffect, useRef } from "react";

interface Logo {
  name: string;
  domain: string;
  src?: string;
}

const logos: Logo[] = [
  { name: "QuickBase", domain: "quickbase.com", src: "https://www.quickbase.com/images/quickbase-logo.svg" },
  { name: "QuickBooks", domain: "quickbooks.intuit.com", src: "https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Graphic/qb-logo-horizontal-preferred.svg" },
  { name: "AppFolio", domain: "appfolio.com", src: "https://www.appfolioinc.com/hubfs/AppFolio-Logo.svg" },
  { name: "Trello", domain: "trello.com", src: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
  { name: "Google Workspace", domain: "workspace.google.com", src: "https://cdn.worldvectorlogo.com/logos/google-workspace-icon.svg" },
  { name: "RingCentral", domain: "ringcentral.com", src: "https://cdn.worldvectorlogo.com/logos/ringcentral-1.svg" },
  { name: "Google Cloud", domain: "cloud.google.com", src: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
  { name: "AWS", domain: "aws.amazon.com", src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { name: "Fivetran", domain: "fivetran.com", src: "https://cdn.worldvectorlogo.com/logos/fivetran-1.svg" },
  { name: "Airbyte", domain: "airbyte.com", src: "https://cdn.worldvectorlogo.com/logos/airbyte-1.svg" },
  { name: "dbt", domain: "getdbt.com", src: "https://cdn.worldvectorlogo.com/logos/dbt.svg" },
  { name: "Metabase", domain: "metabase.com", src: "https://cdn.worldvectorlogo.com/logos/metabase.svg" },
  { name: "Quo", domain: "quo.app", src: "https://cdn.worldvectorlogo.com/logos/openphone.svg" },
  { name: "Make", domain: "make.com", src: "https://cdn.worldvectorlogo.com/logos/make-1.svg" },
  { name: "Zapier", domain: "zapier.com", src: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg" },
  { name: "IFTTT", domain: "ifttt.com", src: "https://cdn.worldvectorlogo.com/logos/ifttt-1.svg" },
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
                  src={logo.src ?? `https://www.google.com/s2/favicons?domain=${logo.domain}&sz=128`}
                  alt={`${logo.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  title={logo.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    const fallback = `https://www.google.com/s2/favicons?domain=${logo.domain}&sz=128`;
                    if (img.src !== fallback) img.src = fallback;
                  }}
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
                  src={logo.src ?? `https://www.google.com/s2/favicons?domain=${logo.domain}&sz=128`}
                  alt={`${logo.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  title={logo.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.currentTarget;
                    const fallback = `https://www.google.com/s2/favicons?domain=${logo.domain}&sz=128`;
                    if (img.src !== fallback) img.src = fallback;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
