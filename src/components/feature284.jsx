import { HelpCircleIcon } from "lucide-react";
import React from "react";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const featureData = [
  {
    title: "Markt",
    badgeTitle: "Sicherheit",
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
    badgeTitle: "Wertschätzung",
    points: [
      "Flexible Arbeitszeiten",
      "Sport-/Gesundheitsangebote",
    ],
    img: "/Marktstimmen%20Bilder/rewe_logstik_sued_foto-craft_9057.jpg",
    imageClass: "scale-[1.24] md:scale-[1.32]",
    gridClass: "md:col-span-1",
  },
  {
    title: "Zentrale & Außendienst",
    badgeTitle: "Klarheit",
    points: [
      "Regelmäßige Personalgespräche",
      "Strukturierte Kommunikation",
    ],
    img: "/Logisitik/rewe_logstik_sued_foto-craft_8883.jpg",
    imageClass: "scale-[1.24] md:scale-[1.32]",
    gridClass: "lg:col-span-2",
  },
];

const Feature284 = ({
  className
}) => {
  return (
    <section className={cn("h-full overflow-hidden py-32", className)}>
      <div className="container flex h-full w-full items-center justify-center">
        <div
          className="grid w-full max-w-6xl grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 lg:h-[800px] lg:grid-cols-4">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className={cn("relative flex flex-col gap-2 rounded-3xl border p-4", feature.gridClass)}>
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01} />
              <div className="flex w-full items-center justify-between">
                <p className="text-muted-foreground">{feature.badgeTitle}</p>
                <HelpCircleIcon className="size-4 text-muted-foreground" />
              </div>
              <div className={cn("w-full flex-1 overflow-hidden rounded-3xl bg-muted")}>
                <img
                  src={feature.img}
                  alt={feature.title}
                  className={cn(
                    "pointer-events-none h-full w-full object-cover transform-gpu",
                    feature.imageClass
                  )}
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {feature.title}
              </h3>
              <ul className="mt-1 space-y-1.5">
                {(feature.points || []).map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#CC071E]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature284 };
