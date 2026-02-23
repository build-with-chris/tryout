import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const Hero244 = ({
  className
}) => {
  const containerRef = useRef(null);
  const hintRef = useRef(null);
  const [maxLeft, setMaxLeft] = useState(0);

  useEffect(() => {
    const updateMaxLeft = () => {
      if (containerRef.current && hintRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const hintWidth = hintRef.current.offsetWidth;
        setMaxLeft(Math.max(0, containerWidth - hintWidth));
      }
    };
    updateMaxLeft();
    const ro = new ResizeObserver(updateMaxLeft);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updateMaxLeft);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateMaxLeft);
    };
  }, []);

  const items = [
    {
      title: "Bereichsleiter Frischetheke",
      image: "/Alterative/Bereichsleiter Frischetheke.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Duales Studium Wirtschaftsingenieurwesen",
      image: "/Alterative/Duales Studium Wirtschaftsingenieurwesen.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Fachlageristin",
      image: "/Alterative/Fachlageristin.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Marketing und PR",
      image: "/Alterative/Marketing und PR.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Mitarbeiter Obst und Gemüse",
      image: "/Alterative/Mitarbeiter Obst und Gemüse.jpg",
      className: "absolute top-20 lg:right-[35%] rotate-[2deg]",
    },
    {
      title: "Qualitätsprüfer",
      image: "/Alterative/Qualitätsprüfer.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Schichtleitung",
      image: "/Alterative/Schichtleitung.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <section
      className={cn(
        "relative grid w-screen overflow-hidden border py-32 lg:min-h-screen bg-white",
        className
      )}>
      <div
        className="relative z-10 container h-full grid-cols-1 items-center justify-center gap-10 lg:grid lg:grid-cols-2">
        <div
          className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="max-w-lg font-calSans text-7xl text-neutral-900">
            Viele Wege führen zu deinem Traum
          </h1>
          <p className="mt-10 max-w-md text-neutral-600">
            Dein Traum ist nicht „der eine" Job? Perfekt. Bei REWE Süd gibt's viele Wege: im Markt, in der Logistik oder in der Verwaltung. Vom ersten Schritt bis zur Verantwortung – du bringst den Antrieb, wir den Rahmen.
          </p>
        </div>
        <div
          ref={containerRef}
          className="relative flex h-[80vh] w-full items-center justify-center lg:h-full">
          <DraggableCardContainer className="absolute inset-0 flex items-center justify-center">
          <motion.p
            ref={hintRef}
            className="absolute bottom-6 left-0 flex w-max items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-base font-medium text-neutral-600 shadow-sm"
            aria-hidden
            animate={{ x: [0, maxLeft] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}>
            <GripVertical className="h-4 w-4 shrink-0 text-neutral-500" strokeWidth={2} />
            Entdecke ihre Berufung.
          </motion.p>
          <p
            className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center font-calSans text-4xl text-neutral-400">
            REWE Region Süd wartet auf DICH!
          </p>
          {items.map((item) => (
            <DraggableCardBody
              key={item.title}
              className={cn(
                item.className,
                "w-80 -translate-x-20 scale-75 rounded-2xl p-3 lg:translate-x-0 lg:scale-100"
              )}>
              {/* Bildbereich 5 % kürzer: aspect 16/19 ≈ 95 % von 4/5 */}
              <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/19] bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-center text-xl tracking-tighter text-neutral-900">
                {item.title}
              </h3>
              <div className="mt-3 flex justify-end">
                <GripVertical className="h-3.5 w-3.5 text-neutral-400/70" strokeWidth={2} aria-hidden />
              </div>
            </DraggableCardBody>
          ))}
          </DraggableCardContainer>
        </div>
      </div>
    </section>
  );
};

export { Hero244 };
