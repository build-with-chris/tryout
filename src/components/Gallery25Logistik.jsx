"use client";;
import { motion } from "framer-motion";
import React, { useState, useMemo } from "react";

import { cn } from "@/lib/utils";
import ImageLightbox from "./ImageLightbox";

const Gallery25Logistik = ({
  className
}) => {
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
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

  // Third row images
  const column1ImagesRow3 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8729.jpg",
      alt: "REWE Logistikbild 23",
      height: "23rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8774.jpg",
      alt: "REWE Logistikbild 24",
      height: "28rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8805.jpg",
      alt: "REWE Logistikbild 25",
      height: "12rem",
    },
  ];

  const column2ImagesRow3 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8831.jpg",
      alt: "REWE Logistikbild 26",
      height: "13rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8852.jpg",
      alt: "REWE Logistikbild 27",
      height: "32rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8883.jpg",
      alt: "REWE Logistikbild 28",
      height: "18rem",
    },
  ];

  const column3ImagesRow3 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8892.jpg",
      alt: "REWE Logistikbild 29",
      height: "32rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8915.jpg",
      alt: "REWE Logistikbild 30",
      height: "32rem",
    },
  ];

  const column4ImagesRow3 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8924.jpg",
      alt: "REWE Logistikbild 31",
      height: "13rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8954.jpg",
      alt: "REWE Logistikbild 32",
      height: "22.5rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8958.jpg",
      alt: "REWE Logistikbild 33",
      height: "22rem",
    },
  ];

  // Fourth row images
  const column1ImagesRow4 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_8996.jpg",
      alt: "REWE Logistikbild 34",
      height: "23rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9003.jpg",
      alt: "REWE Logistikbild 35",
      height: "28rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9023.jpg",
      alt: "REWE Logistikbild 36",
      height: "12rem",
    },
  ];

  const column2ImagesRow4 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9057.jpg",
      alt: "REWE Logistikbild 37",
      height: "13rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9080.jpg",
      alt: "REWE Logistikbild 38",
      height: "32rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9101.jpg",
      alt: "REWE Logistikbild 39",
      height: "18rem",
    },
  ];

  const column3ImagesRow4 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9124.jpg",
      alt: "REWE Logistikbild 40",
      height: "32rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9133.jpg",
      alt: "REWE Logistikbild 41",
      height: "32rem",
    },
  ];

  const column4ImagesRow4 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9146.jpg",
      alt: "REWE Logistikbild 42",
      height: "13rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9152.jpg",
      alt: "REWE Logistikbild 43",
      height: "22.5rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9161.jpg",
      alt: "REWE Logistikbild 44",
      height: "22rem",
    },
  ];

  // Fifth row images
  const column1ImagesRow5 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9176.jpg",
      alt: "REWE Logistikbild 45",
      height: "23rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9208.jpg",
      alt: "REWE Logistikbild 46",
      height: "28rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9229.jpg",
      alt: "REWE Logistikbild 47",
      height: "12rem",
    },
  ];

  const column2ImagesRow5 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9234.jpg",
      alt: "REWE Logistikbild 48",
      height: "13rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9247.jpg",
      alt: "REWE Logistikbild 49",
      height: "32rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9254.jpg",
      alt: "REWE Logistikbild 50",
      height: "18rem",
    },
  ];

  const column3ImagesRow5 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9275.jpg",
      alt: "REWE Logistikbild 51",
      height: "32rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9302.jpg",
      alt: "REWE Logistikbild 52",
      height: "32rem",
    },
  ];

  const column4ImagesRow5 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9334.jpg",
      alt: "REWE Logistikbild 53",
      height: "13rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9375.jpg",
      alt: "REWE Logistikbild 54",
      height: "22.5rem",
    },
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9383.jpg",
      alt: "REWE Logistikbild 55",
      height: "22rem",
    },
  ];

  // Sixth row images (remaining 1)
  const column1ImagesRow6 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9394.jpg",
      alt: "REWE Logistikbild 56",
      height: "23rem",
    },
  ];

  const column2ImagesRow6 = [
    {
      src: "/Logisitik/rewe_logstik_sued_foto-craft_9400.jpg",
      alt: "REWE Logistikbild 57",
      height: "28rem",
    },
  ];

  // Flatten all images into a single array for lightbox navigation
  const allImages = useMemo(() => {
    return [
      ...column1Images,
      ...column2Images,
      ...column3Images,
      ...column4Images,
      ...column1ImagesRow2,
      ...column2ImagesRow2,
      ...column3ImagesRow2,
      ...column4ImagesRow2,
      ...column1ImagesRow3,
      ...column2ImagesRow3,
      ...column3ImagesRow3,
      ...column4ImagesRow3,
      ...column1ImagesRow4,
      ...column2ImagesRow4,
      ...column3ImagesRow4,
      ...column4ImagesRow4,
      ...column1ImagesRow5,
      ...column2ImagesRow5,
      ...column3ImagesRow5,
      ...column4ImagesRow5,
      ...column1ImagesRow6,
      ...column2ImagesRow6,
    ];
  }, []);

  const handleImageClick = (imageIndex) => {
    setLightboxImageIndex(imageIndex);
  };

  const handleCloseLightbox = () => {
    setLightboxImageIndex(null);
  };

  const handleNext = () => {
    if (lightboxImageIndex < allImages.length - 1) {
      setLightboxImageIndex(lightboxImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (lightboxImageIndex > 0) {
      setLightboxImageIndex(lightboxImageIndex - 1);
    }
  };

  const currentLightboxImage = lightboxImageIndex !== null ? allImages[lightboxImageIndex] : null;

  // Helper function to get image index from column and row
  const getImageIndex = (column, row, index) => {
    const rowLayouts = [
      [column1Images, column2ImagesRow2, column3ImagesRow2, column4ImagesRow2], // Row 1
      [column1ImagesRow2, column2Images, column3Images, column4Images], // Row 2
      [column1ImagesRow3, column2ImagesRow3, column3ImagesRow3, column4ImagesRow3], // Row 3
      [column1ImagesRow4, column2ImagesRow4, column3ImagesRow4, column4ImagesRow4], // Row 4
      [column1ImagesRow5, column2ImagesRow5, column3ImagesRow5, column4ImagesRow5], // Row 5
      [column1ImagesRow6, column2ImagesRow6, [], []], // Row 6
    ];

    let offset = 0;
    for (let r = 0; r < row - 1; r++) {
      rowLayouts[r].forEach(col => {
        offset += col.length;
      });
    }

    for (let i = 0; i < column; i++) {
      offset += rowLayouts[row - 1][i].length;
    }

    return offset + index;
  };

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
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(0, 1, index))}>
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
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(1, 1, index))}>
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
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(2, 1, index))}>
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
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(3, 1, index))}>
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt} />
              </motion.div>
            ))}
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
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(0, 2, index))}>
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
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(1, 2, index))}>
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
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(2, 2, index))}>
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
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(3, 2, index))}>
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={image.src}
                  alt={image.alt} />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Row 3 */}
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            {column1ImagesRow3.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(0, 3, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {column2ImagesRow3.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(1, 3, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {column3ImagesRow3.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(2, 3, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {column4ImagesRow3.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(3, 3, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Row 4 */}
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            {column1ImagesRow4.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(0, 4, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {column2ImagesRow4.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(1, 4, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {column3ImagesRow4.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(2, 4, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {column4ImagesRow4.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(3, 4, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Row 5 */}
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            {column1ImagesRow5.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(0, 5, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {column2ImagesRow5.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(1, 5, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {column3ImagesRow5.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(2, 5, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {column4ImagesRow5.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(3, 5, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Row 6 */}
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            {column1ImagesRow6.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(0, 6, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4">
            {column2ImagesRow6.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="w-full overflow-hidden rounded-2xl bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                style={{ height: image.height }}
                onClick={() => handleImageClick(getImageIndex(1, 6, index))}>
                <img className="h-full w-full rounded-2xl object-cover" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4"></div>
          <div className="grid gap-4"></div>
        </div>
      </div>

      <ImageLightbox
        image={currentLightboxImage}
        isOpen={lightboxImageIndex !== null}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={lightboxImageIndex !== null && lightboxImageIndex < allImages.length - 1}
        hasPrevious={lightboxImageIndex !== null && lightboxImageIndex > 0}
      />
    </section>
  );
};

export { Gallery25Logistik };

