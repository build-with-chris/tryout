import { Users, ArrowRight, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Echte Geschichten",
    summary:
      "Höre von echten Menschen bei REWE – ihre Wege, ihre Erfolge, ihre Erfahrungen. 15–25 Sekunden, einfach reinhören.",
    icon: Users,
    link: "#marktstimmen",
  },
  {
    title: "Zwei Wege zu REWE",
    summary:
      "Heute loslegen: In 60 Sekunden bewerben. Oder weiterkommen mit Plan: Individuelle Beratung für deinen Karriereweg.",
    icon: ArrowRight,
    link: "#bewerbung",
  },
  {
    title: "Werte, die zählen",
    summary:
      "Sicherheit, Karriere, Respekt, Klarheit, Verantwortung und Wertschätzung – was dir wichtig ist, sollst du bei uns spüren.",
    icon: Heart,
    link: "#werte",
  },
];

const Feature217b = ({
  className
}) => {
  return (
    <section className={cn("", className)}>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 after:absolute after:inset-0 after:z-10 after:block after:size-full after:bg-gradient-to-br after:from-[#CC071E]/80 after:to-[#9E0012]/90 after:content-[''] md:py-12 xl:py-16"
        style={{
          backgroundImage:
            "url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/futuristic-device-design-qcufu.png')",
        }}>
        <div className="relative z-20 container">
          <div className="flex flex-col gap-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-white bg-white/20 rounded-full backdrop-blur-sm">
                REWE bringt's
              </div>
              <h2 className="mb-6 text-3xl tracking-tight text-white md:text-6xl lg:text-7xl font-bold">
                REWE deinen Traum
              </h2>
              <div className="text-lg md:text-xl font-medium tracking-tight text-white/95 leading-relaxed">
                Was du schon kannst, bringt dich weiter. Mehr als ein Supermarkt – eine Chance für dein Leben. 
                Entdecke echte Geschichten, finde deinen Weg und erlebe Werte, die zählen.
              </div>
            </div>

            <div className="grid items-stretch gap-8 lg:grid-cols-3">
              {FEATURES.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.link);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-white/30 bg-white/10 p-6 backdrop-blur-md hover:bg-white/15 transition-all cursor-pointer group">
                  <item.icon className="size-10 stroke-white group-hover:scale-110 transition-transform" />
                  <div className="max-w-sm text-center text-xl font-bold text-white">
                    {item.title}
                  </div>
                  <div className="max-w-sm text-center text-sm text-white/90 leading-relaxed">
                    {item.summary}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature217b };
