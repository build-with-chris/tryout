import { motion, useInView } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

// Custom hook to get previous value
const usePrevious = value => {
  const [prev, setPrev] = useState(undefined);
  const ref = useRef(value);

  useEffect(() => {
    setPrev(ref.current);
    ref.current = value;
  }, [value]);

  return prev;
};

// Toggle Component
const ProcessToggle = ({ activeProcess, onToggle }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-lg border-2 border-[#CC071E]/20 bg-white p-1" role="tablist">
        <button
          className={cn(
            "px-6 py-2 rounded-md font-semibold transition-all text-sm md:text-base",
            activeProcess === 'fast'
              ? "bg-[#CC071E] text-white shadow-md"
              : "text-[#CC071E] hover:bg-[#F5E5E7]"
          )}
          onClick={() => onToggle('fast')}
          role="tab"
          aria-selected={activeProcess === 'fast'}
        >
          Schnellbewerbung
        </button>
        <button
          className={cn(
            "px-6 py-2 rounded-md font-semibold transition-all text-sm md:text-base",
            activeProcess === 'deep'
              ? "bg-[#CC071E] text-white shadow-md"
              : "text-[#CC071E] hover:bg-[#F5E5E7]"
          )}
          onClick={() => onToggle('deep')}
          role="tab"
          aria-selected={activeProcess === 'deep'}
        >
          Fachkraft/Marktleiter
        </button>
      </div>
    </div>
  );
};

const Process2 = ({
  className
}) => {
  const [activeProcess, setActiveProcess] = useState('fast');
  const [active, setActive] = useState(0);
  const previousActive = usePrevious(active);

  // Schnellbewerbung Prozess
  const fastProcess = [
    {
      step: "01",
      title: "Profil erstellen",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img11.png",
      description:
        "In 60 Sekunden dein Profil anlegen und grundlegende Informationen hinterlegen.",
    },
    {
      step: "02",
      title: "Bewerbung absenden",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img12.png",
      description:
        "Mit einem Klick deine Bewerbung für passende Stellen senden.",
    },
    {
      step: "03",
      title: "Schnelle Rückmeldung",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
      description:
        "Innerhalb von 24 Stunden erhältst du eine erste Rückmeldung von uns.",
    },
    {
      step: "04",
      title: "Start bei REWE",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img9.png",
      description:
        "Nach erfolgreichem Matching startest du direkt in deinem neuen Job.",
    },
  ];

  // Fachkraft/Marktleiter Prozess
  const deepProcess = [
    {
      step: "01",
      title: "Ausführliches Profil",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img11.png",
      description:
        "Detaillierte Angaben zu deiner Erfahrung, Qualifikationen und Wünschen.",
    },
    {
      step: "02",
      title: "Persönliches Gespräch",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img12.png",
      description:
        "Wir lernen uns in einem ausführlichen Gespräch kennen.",
    },
    {
      step: "03",
      title: "Individuelle Beratung",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
      description:
        "Gemeinsam finden wir den perfekten Karrierepfad für dich.",
    },
    {
      step: "04",
      title: "Maßgeschneiderte Lösung",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img9.png",
      description:
        "Dein individueller Einstieg bei REWE, genau wie du es dir vorstellst.",
    },
  ];

  const process = activeProcess === 'fast' ? fastProcess : deepProcess;

  // Reset active step when process changes
  useEffect(() => {
    setActive(0);
  }, [activeProcess]);

  return (
    <section id="bewerbung" className={cn("py-16", className)}>
      <div className="container">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bewerbung in 4 Schritten
          </h2>
        </div>

        {/* Toggle */}
        <ProcessToggle activeProcess={activeProcess} onToggle={setActiveProcess} />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-20">
          <div className="top-10 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <h1
              className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              {activeProcess === 'fast' ? 'Schnellbewerbung' : 'Fachkraft/Marktleiter'}
            </h1>
            <p className="text-base text-foreground/50">
              {activeProcess === 'fast' 
                ? "Dein Weg zu REWE – einfach, schnell und unkompliziert. In nur wenigen Schritten startest du deine Karriere bei uns."
                : "Dein individueller Weg zu REWE – mit ausführlicher Beratung und maßgeschneiderter Lösung für deine Karriere."}
            </p>
            <div className="relative h-90 overflow-hidden border">
              {previousActive !== undefined && (
                <div className="absolute top-0 h-full w-full">
                  <img
                    src={process[previousActive].image}
                    className="h-full w-full object-cover"
                    alt="" />
                </div>
              )}
              <motion.div
                initial={{ clipPath: "inset(100% 100% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                key={`${activeProcess}-${active}`}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                }}
                className="h-full w-full">
                <img src={process[active].image} className="h-full w-full object-cover" alt="" />
              </motion.div>
            </div>
            <Button 
              variant="ghost" 
              className="flex items-center justify-start gap-2"
              style={{ color: '#CC071E' }}
            >
              <CornerDownRight className="text-[#CC071E]" />
              {activeProcess === 'fast' ? 'In 60 Sekunden bewerben' : 'Karrierepfad ansehen'}
            </Button>
          </div>
          <ul className="relativew-full lg:pl-22">
            {process.map((step, index) => (
              <ProcessCard key={index} step={step} index={index} setActive={setActive} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ProcessCard = ({
  step,
  index,
  setActive
}) => {
  const ref = useRef(null);

  const itemInView = useInView(ref, {
    amount: 0,
    margin: "0px 0px -60% 0px",
  });

  useEffect(() => {
    if (itemInView) {
      setActive(index);
    }
  }, [itemInView, index, setActive]);

  return (
    <li
      ref={ref}
      key={index}
      className="relative flex flex-col justify-between gap-12 border-b py-8 lg:py-16">
      <div
        className="flex w-fit items-center justify-center px-4 py-1 text-9xl tracking-tighter">
        0{index + 1}
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
          {step.title}
        </h3>
        <p className="text-foreground/50">{step.description}</p>
      </div>
    </li>
  );
};

export { Process2 };
