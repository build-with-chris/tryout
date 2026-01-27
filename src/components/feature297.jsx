import { cn } from "@/lib/utils";

const Feature297 = ({
  className,
  items = [],
  activeItem = null,
  onItemClick = () => {}
}) => {
  return (
    <div className={cn("grid gap-4 md:grid-cols-4", className)}>
      {items.map((item, index) => {
        const isActive = activeItem === item.id;
        return (
          <button
            key={item.id || index}
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
        );
      })}
    </div>
  );
};

export { Feature297 };
