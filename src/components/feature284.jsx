import React from "react";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const featureData = [
  {
    title: "Markt",
    badgeTitle: "Sicherheit",
    badgeColor: "bg-[#CC071E]",
    points: [
      "Urlaubs- und Weihnachtsgeld",
      "Vergünstigtes Deutschlandticket / Fahrrad-Leasing",
    ],
    img: "/Logisitik/rewe_logstik_sued_foto-craft_9133.jpg",
    imageClass: "scale-[1.24] md:scale-[1.32]",
    gridClass: "md:col-span-1",
  },
  {
    title: "Logistik",
    badgeTitle: "Zusammenhalt",
    badgeColor: "bg-[#E57200]",
    points: [
      "Kommunikationsprinzipien",
      "Verhaltenskodex",
    ],
    img: "/Logisitik/rewe_logstik_sued_foto-craft_8234.jpg",
    imageClass: "scale-[1.24] md:scale-[1.32]",
    gridClass: "lg:col-span-2",
  },
  {
    title: "Frischetheke",
    badgeTitle: "Karriere",
    badgeColor: "bg-[#00843D]",
    points: [
      "Seminarangebot und Weiterbildungsprogramme",
      "Kickstart-Formate wie REWE Akademie, myCampus und Women's Drive",
    ],
    img: "/Markt/rewe_kolbermoor_foto-craft_3091.jpg",
    imageClass: "scale-[1.24] md:scale-[1.32]",
    gridClass: "md:col-span-1 lg:col-start-4 lg:row-span-2",
  },
  {
    title: "Zentrale & Außendienst",
    badgeTitle: "Klarheit",
    badgeColor: "bg-[#003DA5]",
    points: [
      "Regelmäßige Personalgespräche",
      "Strukturierte Kommunikation",
    ],
    img: "/Logisitik/rewe_logstik_sued_foto-craft_8883.jpg",
    imageClass: "scale-[1.24] md:scale-[1.32]",
    gridClass: "lg:col-span-2",
  },
  {
    title: "Zentrale & Außendienst",
    badgeTitle: "Wertschätzung",
    badgeColor: "bg-[#6B2D6B]",
    points: [
      "Flexible Arbeitszeiten",
      "Sport-/Gesundheitsangebote",
    ],
    img: "/Marktstimmen%20Bilder/rewe_logstik_sued_foto-craft_9057.jpg",
    imageClass: "scale-[1.24] md:scale-[1.32]",
    gridClass: "md:col-span-1",
  },
];

const Feature284 = ({
  className
}) => {
  return (
    <section className={cn("h-full overflow-hidden pb-32 pt-12", className)}>
      <div className="container flex h-full w-full items-center justify-center">
        <div
          className="grid w-full max-w-6xl grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 lg:h-[1000px] lg:grid-cols-4">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className={cn("relative flex flex-col gap-1.5 rounded-3xl border p-3.5", feature.gridClass)}>
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01} />
              <div className="flex w-full items-center">
                <span className={cn("inline-block rounded-full px-4 py-1 text-base font-semibold text-white tracking-wide leading-relaxed", feature.badgeColor)}>
                  {feature.badgeTitle}
                </span>
              </div>
              <div className={cn("w-full flex-[3] overflow-hidden rounded-2xl bg-muted")}>
                <img
                  src={feature.img}
                  alt={feature.title}
                  className={cn(
                    "pointer-events-none h-full w-full object-cover transform-gpu",
                    feature.imageClass
                  )}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold tracking-tight">
                  {feature.title}
                </h3>
                {feature.gridClass?.includes("col-span-2") ? (
                  <div className="mt-1.5 grid grid-cols-2 gap-4">
                    {(feature.points || []).map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-2 text-base leading-relaxed text-muted-foreground">
                        <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#CC071E]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="mt-1.5 space-y-1">
                    {(feature.points || []).map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-base leading-relaxed text-muted-foreground">
                        <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#CC071E]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature284 };
