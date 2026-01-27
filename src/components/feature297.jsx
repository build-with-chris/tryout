import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import "./feature297.css";

const Feature297 = ({
  className,
  items = [],
  activeItem = null,
  onItemClick = () => {},
  renderContent = null // Callback für Content-Rendering auf Mobile
}) => {
  const [animatedIndex, setAnimatedIndex] = useState(0);

  // Animation: Rote Umrandung bewegt sich im Uhrzeigersinn
  useEffect(() => {
    if (activeItem) return; // Stoppe Animation wenn eine Kachel aktiv ist
    
    const interval = setInterval(() => {
      setAnimatedIndex((prev) => (prev + 1) % items.length);
    }, 2000); // Wechselt alle 2 Sekunden

    return () => clearInterval(interval);
  }, [items.length, activeItem]);

  return (
    <div className={cn("grid gap-4 md:grid-cols-4 relative", className)}>
      {items.map((item, index) => {
        const isActive = activeItem === item.id;
        const isAnimated = !activeItem && animatedIndex === index;
        return (
          <React.Fragment key={item.id || index}>
            <button
              onClick={() => onItemClick(item.id)}
              className={cn(
                "group relative overflow-hidden rounded-sm",
                isActive && "ring-2 ring-primary ring-offset-2"
              )}
              aria-pressed={isActive}
              aria-expanded={isActive}
              aria-controls="path-content"
              id={`path-cta-${item.id}`}
            >
            {/* Animierte rote Umrandung - fährt um die Kachel herum */}
            {isAnimated && (
              <div className="absolute inset-0 rounded-sm pointer-events-none z-20 overflow-visible">
                <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 4px #CC071E)' }}>
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="4"
                    fill="none"
                    stroke="#CC071E"
                    strokeWidth="3"
                    strokeDasharray="200 400"
                    strokeDashoffset="0"
                    className="animate-border-rotate"
                  />
                </svg>
              </div>
            )}
            <img
              src={item.imageSrc}
              alt={item.imageAlt || item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            {/* Dunkler Overlay für bessere Textlesbarkeit */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
              <div className="relative">
                {/* Text mit starkem Shadow für maximale Lesbarkeit */}
                <h2 className="text-4xl font-medium tracking-tight font-caveat text-white drop-shadow-[0_2px_12px_rgba(0,0,0,1)] [text-shadow:_3px_3px_6px_rgba(0,0,0,1),_0_0_10px_rgba(0,0,0,0.8)]">
                  {item.title}
                </h2>
              </div>
              {/* Button unten mittig - Plus wenn nicht aktiv, X wenn aktiv */}
              <div className="flex justify-center">
                  <div className={cn(
                    "w-12 h-12 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300",
                    isActive ? "bg-[#CC071E]" : "bg-white"
                  )}>
                    {isActive ? (
                      // X-Symbol wenn aktiv (weiß auf rot)
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      // Plus-Symbol wenn nicht aktiv (rot auf weiß)
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300"
                      >
                        <path
                          d="M12 5V19M5 12H19"
                          stroke="#CC071E"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </button>
            {/* Mobile: Content direkt nach der aktiven Kachel */}
            {isActive && renderContent && (
              <div className="md:hidden col-span-full mt-4">
                {renderContent(item.id)}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export { Feature297 };
