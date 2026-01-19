import { useState } from "react";
import { Briefcase, Users, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Feature217b = ({
  className,
  badge = "",
  headline = "",
  description = "",
  features = [],
  backgroundImage = ""
}) => {
  // Default Icons für die Features
  const defaultIcons = [Briefcase, Users, Shield];
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <section className={cn("", className)}>
      <div
        className="relative bg-cover bg-no-repeat py-10 md:py-12 xl:py-16"
        style={{
          backgroundImage: backgroundImage ? `url('${backgroundImage}')` : "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/futuristic-device-design-qcufu.png')",
          backgroundPosition: 'center 70%',
        }}>
        {/* Subtiler dunkler Overlay für besseren Kontrast und Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" aria-hidden="true" />
        <div className="relative z-20 container">
          <div className="flex flex-col gap-8">
            <div className="w-full">
              <div className="w-full lg:w-1/3">
                {badge && (
                  <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-white bg-white/20 rounded-full backdrop-blur-sm">
                    {badge}
                  </div>
                )}
                {headline && (
                  <div className="mb-24 md:mb-32 lg:mb-40">
                    <h2 className="text-2xl tracking-tight text-white md:text-3xl lg:text-4xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.9)] text-left">
                      {headline}
                    </h2>
                    {description && (
                      <p className="mt-4 text-xl md:text-2xl text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.9)] text-left">
                        {description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {features.length > 0 && (
              <div className="grid items-stretch gap-8 lg:grid-cols-3">
                {features.map((item, index) => {
                  const IconComponent = item.icon || defaultIcons[index] || Briefcase;
                  const isOpen = openIndex === index;
                  const hasContent = (item.items && item.items.length > 0) || item.summary;
                  const isSimpleBox = !hasContent; // Einfache Box wenn keine Items und kein Summary
                  
                  return (
                    <div
                      key={item.title || index}
                      className={cn(
                        "flex flex-col items-center justify-start gap-3 rounded-xl border border-white/30 bg-white/10 p-5 backdrop-blur-md transition-all group",
                        isSimpleBox ? "hover:bg-white/15" : "cursor-pointer"
                      )}
                      onClick={!isSimpleBox ? () => setOpenIndex(isOpen ? null : index) : undefined}
                    >
                      <IconComponent className="size-12 stroke-white group-hover:scale-110 transition-transform drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                      <div className="max-w-sm text-center text-xl font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_3px_rgba(0,0,0,0.9)]">
                        {item.title}
                      </div>
                      {hasContent && !isSimpleBox && (
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <span>{isOpen ? "Weniger anzeigen" : "Mehr erfahren"}</span>
                          {isOpen ? (
                            <ChevronUp className="size-4" />
                          ) : (
                            <ChevronDown className="size-4" />
                          )}
                        </div>
                      )}
                      {hasContent && (
                        <div className={cn(
                          "w-full transition-all duration-300 overflow-hidden",
                          isOpen ? "opacity-100 max-h-[500px] mt-4" : "opacity-0 max-h-0 mt-0 pointer-events-none"
                        )}>
                          {item.items && item.items.length > 0 ? (
                            <ul className="max-w-sm mx-auto text-center text-sm text-white leading-relaxed space-y-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] [text-shadow:_1px_1px_2px_rgba(0,0,0,0.8)]">
                              {item.items.map((listItem, itemIndex) => (
                                <li key={itemIndex}>{listItem}</li>
                              ))}
                            </ul>
                          ) : (
                            <div className="max-w-sm mx-auto text-center text-sm text-white leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] [text-shadow:_1px_1px_2px_rgba(0,0,0,0.8)]">
                              {item.summary}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature217b };
