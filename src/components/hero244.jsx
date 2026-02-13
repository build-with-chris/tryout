import React from "react";

import { cn } from "@/lib/utils";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const Hero244 = ({
  className
}) => {
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
        <DraggableCardContainer
          className="relative flex h-[80vh] w-full items-center justify-center lg:h-full">
          <p
            className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center font-calSans text-4xl text-neutral-400">
            REWE Region Süd wartet auf DICH!
          </p>
          {items.map((item) => (
            <DraggableCardBody
              key={item.title}
              className={cn(
                item.className,
                "-translate-x-20 scale-75 rounded-2xl p-3 lg:translate-x-0 lg:scale-100"
              )}>
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-82 w-80 rounded-2xl object-cover" />
              <h3 className="mt-4 text-center text-xl tracking-tighter text-neutral-900">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
      <div
        className="absolute inset-0 flex h-full w-full items-center justify-between">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="h-full w-px bg-neutral-200"></div>
        ))}
      </div>
    </section>
  );
};

export { Hero244 };
