import {
  Shield,
  ArrowUp,
  Users,
  CheckSquare,
  Leaf,
  Star,
} from "lucide-react";
import { valuesData } from "../data/valuesData";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Icon-Mapping für die Werte
const getValueIcon = (iconName) => {
  const iconMap = {
    shield: Shield,
    "arrow-up": ArrowUp,
    users: Users,
    "check-list": CheckSquare,
    leaf: Leaf,
    star: Star,
  };
  return iconMap[iconName] || Shield;
};

// Farb-Gradient-Mapping für jeden Wert
const getValueGradient = (index) => {
  const gradients = [
    "linear-gradient(135deg, #CC071E 0%, #9E0012 100%)", // Sicherheit - Rot
    "linear-gradient(135deg, #0065CB 0%, #004A9A 100%)", // Karriere - Blau
    "linear-gradient(135deg, #007D3E 0%, #005A2B 100%)", // Respekt - Grün
    "linear-gradient(135deg, #676767 0%, #1C1C1C 100%)", // Klarheit - Grau
    "linear-gradient(135deg, #007D3E 0%, #0065CB 100%)", // Verantwortung - Grün-Blau
    "linear-gradient(135deg, #FFE85C 0%, #D67701 100%)" // Wertschätzung - Gelb
  ];
  return gradients[index % gradients.length];
};

const Feature52 = ({
  className
}) => {
  // Konvertiere Werte-Daten in Tab-Format
  const tabs = valuesData.map((value, index) => {
    const IconComponent = getValueIcon(value.icon);
    return {
      id: value.id,
      title: value.shortLabel,
      fullTitle: value.title,
      definition: value.definition,
      bullets: value.bullets,
      proofLine: value.proofLine,
      icon: <IconComponent className="size-6 text-[#CC071E] lg:size-8" strokeWidth={1.5} />,
      gradient: getValueGradient(index),
    };
  });

  return (
    <section className={cn("py-16", className)} id="werte">
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

        <Tabs defaultValue={`feature-${tabs[0].id}`}>
          <TabsList
            className="flex h-full w-full flex-wrap justify-between gap-2 bg-background p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={`feature-${tab.id}`}
                className="flex flex-1 flex-col items-start justify-start gap-2 rounded-md border border-border bg-muted px-2 py-4 text-left whitespace-normal text-[#CC071E] hover:border-[#CC071E]/40 hover:ring-1 hover:ring-[#CC071E]/20 data-[state=active]:border data-[state=active]:border-[#CC071E] data-[state=active]:bg-[#F5E5E7] lg:py-6">
                <div className="flex w-full flex-col items-center gap-4">
                  {tab.icon}
                  <p className="text-sm font-semibold lg:text-base">
                    {tab.title}
                  </p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={`feature-${tab.id}`} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Bild/Visual Bereich */}
                <div 
                  className="aspect-video w-full rounded-md overflow-hidden relative"
                  style={{ background: tab.gradient }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-9xl font-bold">
                      {tab.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                </div>

                {/* Content Bereich */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{tab.fullTitle}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {tab.definition}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Das bedeutet für dich:</h4>
                    <ul className="space-y-2">
                      {tab.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-[#CC071E] mt-1">•</span>
                          <span className="text-muted-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-lg font-medium text-[#CC071E]">
                      {tab.proofLine}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { Feature52 };
