import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { valuesData } from "@/data/valuesData";

const About14 = ({
  className
}) => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const currentValue = valuesData[currentValueIndex];

  const handlePrevious = () => {
    setCurrentValueIndex((prev) => (prev === 0 ? valuesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentValueIndex((prev) => (prev === valuesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={cn("py-32 relative", className)} id="werte">
      <div className="container space-y-10 lg:space-y-20">
        <div className="w-full grid-cols-6 gap-10 space-y-5 lg:grid lg:space-y-0">
          <h1
            className="col-span-2 text-2xl font-semibold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white">
            <span className="block">Unsere Werte.</span>
            <span className="block">Deine Stufen.</span>
          </h1>
          <div />
          <div className="col-span-3 flex items-center justify-center">
            <p className="w-fit text-white/70 lg:translate-y-2">
              Was dir wichtig ist, sollst du bei uns spüren – jeden Tag.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png"
            alt="REWE Werte"
            className="mt-4 h-64 md:h-80 lg:h-96 w-full object-cover rounded-lg" />
        </div>
        <div
          className="grid grid-cols-1 gap-10 space-y-12 lg:grid-cols-6 lg:space-y-0">
          <p className="hidden text-white/70 lg:block">
            Sicher. Fair. Mit Zukunft.
          </p>
          <div className="order-2 col-span-2 lg:order-none lg:pr-24 lg:pl-10">
            <p className="text-sm text-white/80 leading-relaxed">
              {currentValue.definition} {currentValue.bullets.join(", ")}. {currentValue.proofLine}
            </p>
            <div className="mt-5 flex items-center gap-5 lg:mt-12">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-lg font-medium tracking-tight text-white">{currentValue.title}</h3>
                <p className="text-sm text-white/70">{currentValue.proofLine}</p>
              </div>
            </div>
          </div>
          <div className="order-1 col-span-3 lg:order-none lg:mt-0 lg:pl-10">
            <p className="text-base lg:text-lg font-medium tracking-tight leading-relaxed text-white/90">
              <strong className="text-white">{currentValue.title}</strong>: {currentValue.definition} {currentValue.bullets.join(", ")}. {currentValue.proofLine}
            </p>
            
            {/* Pagination */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {valuesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentValueIndex(index)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === currentValueIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Zu Wert ${index + 1} wechseln`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevious}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Vorheriger Wert"
                >
                  ← Zurück
                </button>
                <span className="text-sm text-white/70">
                  {currentValueIndex + 1} / {valuesData.length}
                </span>
                <button
                  onClick={handleNext}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Nächster Wert"
                >
                  Weiter →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About14 };
