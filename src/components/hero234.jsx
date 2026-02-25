"use client";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const galleryImages = [
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
  ],
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
  ],
];

const Hero234 = ({
  className,
  galleryImages: galleryImagesProp,
  overlayVariant = 'default', // 'default' | 'rewe'
}) => {
  const images = galleryImagesProp ?? galleryImages;
  const isReweOverlay = overlayVariant === 'rewe';
  return (
    <section
      className={cn("relative min-h-screen overflow-hidden bg-background", className)}>
      <div className="absolute inset-0 flex flex-col justify-center gap-4">
        {images.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-4 will-change-transform"
            animate={{
              x: rowIndex === 1 ? [-1920, 0] : [0, -1920],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}>
            {[...row, ...row, ...row].map((image, imageIndex) => (
              <motion.div
                key={`${rowIndex}-${imageIndex}`}
                className="relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{
                  width: rowIndex === 1 ? "280px" : "240px",
                  height: rowIndex === 1 ? "350px" : "300px",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}>
                <img
                  src={image}
                  alt={`Gallery image ${imageIndex + 1}`}
                  className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
      {/* Left side masks */}
      <div
        className="absolute top-0 left-0 z-10 h-full w-[160px] bg-gradient-to-r from-background to-transparent md:w-[200px]" />
      {/* Right side masks */}
      <div
        className="absolute top-0 right-0 z-10 h-full w-[160px] bg-gradient-to-l from-background to-transparent md:w-[200px]" />
      <div className="relative z-20 flex min-h-screen items-center justify-center">
        <motion.div
          className={cn(
            "rounded-lg p-8 backdrop-blur-md md:p-12",
            isReweOverlay
              ? ""
              : "bg-black/60"
          )}
          style={isReweOverlay ? { background: 'linear-gradient(135deg, rgba(204, 7, 30, 0.6) 0%, rgba(158, 0, 18, 0.7) 100%)' } : undefined}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}>
          <motion.h1
            className={cn(
              "text-3xl leading-tight text-white md:text-5xl lg:text-6xl",
              isReweOverlay && "font-bold"
            )}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}>
            {isReweOverlay ? (
              <>REWE <br /> deinen Traum</>
            ) : (
              <>A Studio <br /> Crafting <br /> Digital Art</>
            )}
          </motion.h1>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}>
            {isReweOverlay ? (
              <Button
                size="lg"
                className="bg-white text-[#CC071E] hover:bg-[#F5E5E7] hover:text-[#9E0012] font-semibold"
              >
                Jetzt bewerben
              </Button>
            ) : (
              <Button size="lg" variant="secondary">
                View Projects
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero234 };
