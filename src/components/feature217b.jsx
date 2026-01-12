import { Briefcase, Users, Shield } from "lucide-react";
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
  
  return (
    <section className={cn("", className)}>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 md:py-12 xl:py-16"
        style={{
          backgroundImage: backgroundImage ? `url('${backgroundImage}')` : "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/futuristic-device-design-qcufu.png')",
        }}>
        {/* Subtiler dunkler Overlay für besseren Kontrast und Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" aria-hidden="true" />
        <div className="relative z-20 container">
          <div className="flex flex-col gap-8">
            <div className="mx-auto max-w-4xl text-center">
              {badge && (
                <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-white bg-white/20 rounded-full backdrop-blur-sm">
                  {badge}
                </div>
              )}
              {headline && (
                <h2 className="mb-24 md:mb-32 lg:mb-40 text-2xl tracking-tight text-white md:text-3xl lg:text-4xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap">
                  {headline}
                </h2>
              )}
              {description && (
                <div className="text-lg md:text-xl font-medium tracking-tight text-white leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_3px_rgba(0,0,0,0.9)]">
                  {description}
                </div>
              )}
            </div>

            {features.length > 0 && (
              <div className="grid items-stretch gap-8 lg:grid-cols-3">
                {features.map((item, index) => {
                  const IconComponent = item.icon || defaultIcons[index] || Briefcase;
                  return (
                    <div
                      key={item.title || index}
                      className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-white/30 bg-white/10 p-6 backdrop-blur-md hover:bg-white/15 transition-all group">
                      <IconComponent className="size-10 stroke-white group-hover:scale-110 transition-transform drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                      <div className="max-w-sm text-center text-xl font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] [text-shadow:_1px_1px_3px_rgba(0,0,0,0.9)]">
                        {item.title}
                      </div>
                      {item.items && item.items.length > 0 ? (
                        <ul className="max-w-sm text-center text-sm text-white leading-relaxed space-y-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] [text-shadow:_1px_1px_2px_rgba(0,0,0,0.8)]">
                          {item.items.map((listItem, itemIndex) => (
                            <li key={itemIndex}>{listItem}</li>
                          ))}
                        </ul>
                      ) : (
                        <div className="max-w-sm text-center text-sm text-white leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] [text-shadow:_1px_1px_2px_rgba(0,0,0,0.8)]">
                          {item.summary}
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
