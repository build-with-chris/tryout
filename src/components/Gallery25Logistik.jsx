"use client";;
import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

const Gallery25Logistik = ({
  className
}) => {
  const column1Images = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8135.jpg",
      alt: "REWE Logistikbild 1",
      height: "23rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8185.jpg",
      alt: "REWE Logistikbild 2",
      height: "28rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8222.jpg",
      alt: "REWE Logistikbild 3",
      height: "12rem",
    },
  ];

  const column2Images = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8226.jpg",
      alt: "REWE Logistikbild 4",
      height: "13rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8234.jpg",
      alt: "REWE Logistikbild 5",
      height: "32rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8258.jpg",
      alt: "REWE Logistikbild 6",
      height: "18rem",
    },
  ];

  const column3Images = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8298.jpg",
      alt: "REWE Logistikbild 7",
      height: "32rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8323.jpg",
      alt: "REWE Logistikbild 8",
      height: "32rem",
    },
  ];

  const column4Images = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8335.jpg",
      alt: "REWE Logistikbild 9",
      height: "13rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8372.jpg",
      alt: "REWE Logistikbild 10",
      height: "22.5rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8421.jpg",
      alt: "REWE Logistikbild 11",
      height: "22rem",
    },
  ];

  // Second row images
  const column1ImagesRow2 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8507.jpg",
      alt: "REWE Logistikbild 12",
      height: "23rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8518.jpg",
      alt: "REWE Logistikbild 13",
      height: "28rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8531.jpg",
      alt: "REWE Logistikbild 14",
      height: "12rem",
    },
  ];

  const column2ImagesRow2 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8559.jpg",
      alt: "REWE Logistikbild 15",
      height: "13rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8577.jpg",
      alt: "REWE Logistikbild 16",
      height: "32rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8660.jpg",
      alt: "REWE Logistikbild 17",
      height: "18rem",
    },
  ];

  const column3ImagesRow2 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8666.jpg",
      alt: "REWE Logistikbild 18",
      height: "32rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8673.jpg",
      alt: "REWE Logistikbild 19",
      height: "32rem",
    },
  ];

  const column4ImagesRow2 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8675.jpg",
      alt: "REWE Logistikbild 20",
      height: "13rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8691.jpg",
      alt: "REWE Logistikbild 21",
      height: "22.5rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8723.jpg",
      alt: "REWE Logistikbild 22",
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
      </div>
    </section>
  );
};

export { Gallery25Logistik };

