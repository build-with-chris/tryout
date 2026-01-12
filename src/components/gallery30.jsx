"use client";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

const Gallery30 = ({
  className
}) => {
  const [shuffledImages, setShuffledImages] = useState([]);

  const images = useMemo(() => [
    {
      src: "/Marktstimmen Bilder/links.jpg",
      className:
        "md:w-50 w-47 h-47 rotate-7 md:rotate-0 z-1 absolute left-[calc(50%-240px)] md:left-[calc(50%-230px)] top-[8%] md:h-72",
    },
    {
      src: "/Marktstimmen Bilder/Mitte.jpg",
      className:
        "md:w-38 w-47 h-47 -rotate-7 md:rotate-0 z-1 md:left-[calc(50%-220px)] md:h-45 absolute left-[calc(50%-230px)] top-[32%]",
    },
    {
      src: "/Marktstimmen Bilder/rechts.jpg",
      className:
        "md:w-50 w-45 h-45 z-1 md:right-[calc(50%-240px)] absolute right-[calc(50%-230px)] top-[12%] md:h-52",
    },
    {
      src: "/Marktstimmen Bilder/rewe_logstik_sued_foto-craft_8323.jpg",
      className:
        "hidden md:block w-40 h-40 z-1 md:h-42 absolute md:left-[calc(50%-350px)] md:w-60 top-[58%]",
    },
    {
      src: "/Marktstimmen Bilder/rewe_logstik_sued_foto-craft_8531.jpg",
      className:
        "md:w-55 hidden md:block z-1 md:h-65 md:absolute right-[calc(50%-340px)] lg:right-[calc(50%-360px)] top-[3%]",
    },
    {
      src: "/Marktstimmen Bilder/rewe_logstik_sued_foto-craft_8774.jpg",
      className:
        "md:w-50 hidden md:block z-1 md:h-78 md:absolute right-[calc(50%-260px)] top-[68%]",
    },
    {
      src: "/Marktstimmen Bilder/rewe_logstik_sued_foto-craft_8831.jpg",
      className:
        "hidden md:block z-1 md:absolute left-[calc(50%-320px)] top-[82%] md:h-48 md:w-60",
    },
    {
      src: "/Marktstimmen Bilder/rewe_logstik_sued_foto-craft_9057.jpg",
      className:
        "hidden md:block z-1 md:absolute right-[calc(50%-330px)] top-[78%] md:h-48 md:w-60",
    },
  ], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const shuffled = [...images]
        .sort(() => Math.random() - 0.5)
        .map((image) => ({
          ...image,
          delay: Math.random() * 0.4,
        }));
      setShuffledImages(shuffled);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [images]);

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden bg-white", className)}>
      <div
        className="relative h-full w-full flex items-center justify-center">
        <div className="mt-30 flex items-center justify-center relative w-full h-full">
          {shuffledImages.map((image) => (
            <motion.div
              key={image.src}
              className={cn(image.className)}
              drag={false}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.4,
                type: "spring",
                bounce: 0.2,
                delay: image.delay,
              }}>
              <img
                src={image.src}
                alt=""
                className="pointer-events-none h-full w-full object-cover shadow-lg rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
      <Illustration />
    </div>
  );
};
export { Gallery30 };

const Illustration = () => {
  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 1920 1081" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="-356.326"
          y="-222.305"
          width="1041.41"
          height="1041.41"
          rx="520.707"
          stroke="#D9D9D9" />
        <rect
          x="1362.49"
          y="391.957"
          width="1041.41"
          height="1041.41"
          rx="520.707"
          stroke="#D9D9D9" />
      </svg>
    </div>
  );
};
