import { ArrowRight } from "lucide-react";
import { valuesData } from "../data/valuesData";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Icon-Mapping für die Werte
const getValueIcon = (iconName) => {
  const icons = {
    shield: "🛡️",
    "arrow-up": "📈",
    users: "👥",
    "check-list": "✅",
    leaf: "🌱",
    star: "⭐"
  };
  return icons[iconName] || "✨";
};

// Farb-Gradient-Mapping für jeden Wert
const getValueGradient = (index) => {
  const gradients = [
    "linear-gradient(135deg, #CC071E 0%, #9E0012 50%, #CC071E 100%)", // Sicherheit - Rot
    "linear-gradient(135deg, #0065CB 0%, #004A9A 50%, #0065CB 100%)", // Karriere - Blau
    "linear-gradient(135deg, #007D3E 0%, #005A2B 50%, #007D3E 100%)", // Respekt - Grün
    "linear-gradient(135deg, #676767 0%, #1C1C1C 50%, #676767 100%)", // Klarheit - Grau
    "linear-gradient(135deg, #007D3E 0%, #0065CB 50%, #007D3E 100%)", // Verantwortung - Grün-Blau
    "linear-gradient(135deg, #FFE85C 0%, #D67701 50%, #FFE85C 100%)" // Wertschätzung - Gelb
  ];
  return gradients[index % gradients.length];
};

const Card = ({
  link,
  title,
  definition,
  shortLabel,
  icon,
  gradient
}) => {
  return (
    <a
      href={link || "#"}
      className="group relative min-h-auto w-full overflow-hidden rounded-[.5rem] transition-all duration-300 sm:aspect-square md:aspect-auto md:min-h-[30rem] md:max-w-[30rem]"
      style={{ background: gradient }}
    >
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
        }} />
      </div>

      {/* Icon Background */}
      <div className="absolute top-8 right-8 text-white/20 text-8xl">
        {getValueIcon(icon)}
      </div>

      {/* Content */}
      <div className="relative z-20 flex size-full flex-col justify-between gap-20 p-5 md:gap-16">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-white/90 uppercase tracking-wide">
            {shortLabel}
          </div>
          <div className="text-2xl leading-[1.2] font-bold text-white md:text-3xl">
            {title}
          </div>
        </div>
        <div className="flex w-full flex-col gap-8">
          <div className="text-white/95 text-base leading-relaxed">
            {definition}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-fit bg-white/20 border-white/40 text-white backdrop-blur-sm hover:bg-white/30 hover:text-white hover:border-white/60 transition-all"
          >
            Mehr erfahren
            <ArrowRight className="size-3.5 ml-1" />
          </Button>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
};

const Feature222 = ({
  className
}) => {
  // Verwende die Werte-Daten mit CI-Styling
  const valuesWithStyling = valuesData.map((value, index) => ({
    ...value,
    gradient: getValueGradient(index),
    link: `#werte-${value.id}`
  }));

  return (
    <section id="werte" className={cn("py-32", className)}>
      <div className="container">
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-[#CC071E] bg-[#F5E5E7] rounded-full">
            Sicher. Fair. Mit Zukunft.
          </div>
          <h2 className="text-4xl font-bold mb-4">Unsere Werte. Deine Stufen.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Was dir wichtig ist, sollst du bei uns spüren – jeden Tag.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {valuesWithStyling.map((item, i) => (
            <Card key={`feature-222-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature222 };
