"use client";;
import { motion } from "framer-motion";
import React, { useState, useMemo } from "react";

import { cn } from "@/lib/utils";
import ImageLightbox from "./ImageLightbox";

const Gallery25 = ({
  className
}) => {
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
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
  // Row 1 layout: column1Images, column2ImagesRow2, column3ImagesRow2, column4ImagesRow2
  // Row 2 layout: column1ImagesRow2, column2Images, column3Images, column4Images
  const getImageIndex = (column, row, index) => {
    if (row === 1) {
      // First row layout
      const columnArrays = [column1Images, column2ImagesRow2, column3ImagesRow2, column4ImagesRow2];
      let offset = 0;
      for (let i = 0; i < column; i++) {
        offset += columnArrays[i].length;
      }
      return offset + index;
    } else {
      // Second row layout
      const firstRowCount = column1Images.length + column2ImagesRow2.length + column3ImagesRow2.length + column4ImagesRow2.length;
      const columnArrays = [column1ImagesRow2, column2Images, column3Images, column4Images];
      let offset = 0;
      for (let i = 0; i < column; i++) {
        offset += columnArrays[i].length;
      }
      return firstRowCount + offset + index;
    }
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
                onClick={() => handleImageClick(getImageIndex(3, 1, index))}>
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

export { Gallery25 };
