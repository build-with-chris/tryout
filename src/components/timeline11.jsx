"use client";;
import { motion } from "framer-motion";
import { Cpu, FlagIcon, LocateFixed, RocketIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Timeline11 = ({
  className
}) => {
  const currentPhase = 2;
  const timelinePhases = [
    {
      id: 0,
      date: "",
      title: "Bewerbung uploaden",
      description: "Einfach und schnell: Lade deine Bewerbung hoch – kein Schnickschnack, kein Papierkram.",
      icon: RocketIcon,
    },
    {
      id: 1,
      date: "",
      title: "Check abwarten",
      description: "Wir melden uns schneller bei dir, als du drei Pfund Hackfleisch halb und halb sagen kannst. Zumindest fast.",
      icon: Cpu,
    },
    {
      id: 2,
      date: "",
      title: "Kennenlernen",
      description: "Persönlich oder telefonisch: Hier können wir über alles sprechen, was dir wichtig ist.",
      icon: LocateFixed,
    },
    {
      id: 3,
      date: "",
      title: "Rückmeldung",
      description: "",
      icon: FlagIcon,
    },
  ];

  return (
    <section className={cn("bg-background", className)}>
      <div className="container flex flex-col items-center justify-center">
        <Card className="relative w-full border-none shadow-none">
          <CardContent className="relative flex flex-col items-center p-0">
            {/* Desktop horizontale Timeline ausblenden */}
            <Separator className="absolute -top-8 left-0 hidden" />
            {currentPhase && (
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${(currentPhase / timelinePhases.length) * 104}%`,
                }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className={cn("absolute -top-[33px] left-0 hidden h-0.5 bg-foreground")} />
            )}
            {/* Vertikale Timeline für md und größer */}
            <div className="relative flex flex-col gap-6 w-full">
              {/* Vertikale Linie durch alle Items */}
              <Separator
                orientation="vertical"
                className="absolute left-[18px] top-0 bottom-0 w-0.5 block" />
              <motion.div
                initial={{ height: 0 }}
                whileInView={{
                  height: currentPhase * 125,
                }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className={cn("absolute left-[18px] top-22 z-10 w-0.5 bg-foreground")} />
              {timelinePhases.map((phase, index) => {
                const PhaseIcon = phase.icon;
                return (
                  <div key={phase.id} className="relative flex items-start gap-4 z-10">
                    {/* Icon */}
                    <div className="relative z-10 flex size-18 items-center justify-center rounded-full bg-background p-1 flex-shrink-0">
                      <div
                        className="flex size-10 items-center justify-center rounded-lg border border-border bg-background p-[5px]">
                        <div
                          className="flex size-full items-center justify-center rounded-md border border-border bg-muted">
                          <PhaseIcon size={16} />
                        </div>
                      </div>
                    </div>
                    {/* Text neben dem Icon auf gleicher Höhe */}
                    <div className="flex-1 pt-0">
                      {phase.date && (
                        <p className="text-sm text-muted-foreground">
                          {phase.date}
                        </p>
                      )}
                      <h2 className="text-xl font-bold tracking-tighter text-foreground">
                        {phase.title}
                      </h2>
                      {phase.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {phase.description}
                        </p>
                      )}
                      {phase.title === "Bewerbung uploaden" && (
                        <div className="mt-3">
                          <Button asChild className="rounded-full">
                            <a href="https://karriere.rewe.de/jobs/">
                              Hier geht&apos;s weiter
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Timeline11 };
