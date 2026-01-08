"use client";;
import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

const Gallery25 = ({
  className
}) => {
  const column1Images = [
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3040.jpg",
      alt: "REWE Marktbild 1",
      height: "23rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3056.jpg",
      alt: "REWE Marktbild 2",
      height: "28rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3059.jpg",
      alt: "REWE Marktbild 3",
      height: "12rem",
    },
  ];

  const column2Images = [
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3091.jpg",
      alt: "REWE Marktbild 4",
      height: "13rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3106.jpg",
      alt: "REWE Marktbild 5",
      height: "32rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3113.jpg",
      alt: "REWE Marktbild 6",
      height: "18rem",
    },
  ];

  const column3Images = [
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3119.jpg",
      alt: "REWE Marktbild 7",
      height: "32rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3135.jpg",
      alt: "REWE Marktbild 8",
      height: "32rem",
    },
  ];

  const column4Images = [
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3154.jpg",
      alt: "REWE Marktbild 9",
      height: "13rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3165.jpg",
      alt: "REWE Marktbild 10",
      height: "22.5rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3192.jpg",
      alt: "REWE Marktbild 11",
      height: "22rem",
    },
  ];

  // Second row images
  const column1ImagesRow2 = [
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3210.jpg",
      alt: "REWE Marktbild 12",
      height: "23rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3216.jpg",
      alt: "REWE Marktbild 13",
      height: "28rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3231.jpg",
      alt: "REWE Marktbild 14",
      height: "12rem",
    },
  ];

  const column2ImagesRow2 = [
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3242.jpg",
      alt: "REWE Marktbild 15",
      height: "13rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3254.jpg",
      alt: "REWE Marktbild 16",
      height: "32rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3267.jpg",
      alt: "REWE Marktbild 17",
      height: "18rem",
    },
  ];

  const column3ImagesRow2 = [
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3276.jpg",
      alt: "REWE Marktbild 18",
      height: "32rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3291.jpg",
      alt: "REWE Marktbild 19",
      height: "32rem",
    },
  ];

  const column4ImagesRow2 = [
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3304.jpg",
      alt: "REWE Marktbild 20",
      height: "13rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3310.jpg",
      alt: "REWE Marktbild 21",
      height: "22.5rem",
    },
    {
      src: "/Markt/rewe_kolbermoor_foto-craft_3342.jpg",
      alt: "REWE Marktbild 22",
      height: "22rem",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="relative container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Column 1 */}
          <div className="grid gap-4">
            {column1Images.map((image, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}>
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt} />
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="grid gap-4">
            {column2ImagesRow2.map((image, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}>
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt} />
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="grid gap-4">
            {column3ImagesRow2.map((image, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}>
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt} />
              </motion.div>
            ))}
          </div>

          {/* Column 4 */}
          <div className="grid gap-4">
            {column4ImagesRow2.map((image, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}>
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt} />
              </motion.div>
            ))}
            <div className="h-17 w-full rounded-2xl bg-muted"></div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* Column 1 */}
          <div className="grid gap-4">
            {column1ImagesRow2.map((image, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}>
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt} />
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="grid gap-4">
            {column2Images.map((image, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}>
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt} />
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="grid gap-4">
            {column3Images.map((image, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}>
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt} />
              </motion.div>
            ))}
          </div>

          {/* Column 4 */}
          <div className="grid gap-4">
            {column4Images.map((image, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: -50,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted"
                style={{ height: image.height }}>
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt} />
              </motion.div>
            ))}
            <div className="h-17 w-full rounded-2xl bg-muted"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery25 };
