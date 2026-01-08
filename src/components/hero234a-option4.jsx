import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

// Bilder für obere und untere Leiste (alte Bilder)
const defaultImages = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
];

// Neue REWE Bilder für die mittlere Leiste
const reweImages = [
  "/heroReweBilder/Motiv1-1.jpg",
  "/heroReweBilder/Motiv1-2.jpg",
  "/heroReweBilder/Motiv1-3.jpg",
  "/heroReweBilder/Motiv2-1.jpg",
  "/heroReweBilder/Motiv2-2.jpg",
  "/heroReweBilder/Motiv3-1.jpg",
  "/heroReweBilder/Motiv3-2.jpg",
  "/heroReweBilder/Motiv3-3.jpg",
  "/heroReweBilder/Motiv3-4.jpg",
  "/heroReweBilder/Motiv3-5.jpg",
];

const galleryImages = [
  defaultImages,  // Obere Leiste
  reweImages,     // Mittlere Leiste (neue REWE Bilder)
  defaultImages,  // Untere Leiste
];

const Hero234aOption4 = ({
  className
}) => {
  return (
    <section
      className={cn("relative overflow-hidden -mt-0 mb-0", className)}
      style={{
        background: 'linear-gradient(180deg, rgba(204, 7, 30, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(204, 7, 30, 0.05) 100%)',
        minHeight: '85vh',
        paddingTop: '0',
        paddingBottom: '0',
      }}>
      {/* Contained image gallery */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative h-[500px] w-[900px] overflow-hidden rounded-2xl md:h-[600px] md:w-[1200px]">
          <div className="absolute inset-0 flex flex-col justify-center gap-3">
            {galleryImages.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="flex gap-3 will-change-transform"
                animate={{
                  x: rowIndex % 2 === 0 ? [-3200, 0] : [0, -3200],
                }}
                transition={{
                  duration: 25 + rowIndex * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}>
                {[...row, ...row, ...row, ...row].map((image, imageIndex) => (
                  <motion.div
                    key={`${rowIndex}-${imageIndex}`}
                    className="relative flex-shrink-0 overflow-hidden rounded-lg"
                    style={{
                      width: "180px",
                      height: "180px",
                    }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
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
        </div>
      </div>
      {/* Mobile-friendly ellipse mask */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* Light masking on mobile, stronger on desktop */}
        <div
          className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-background/80 via-background/40 to-transparent md:h-[200px] md:from-background md:via-background/80" />
        <div
          className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-background/80 via-background/40 to-transparent md:h-[200px] md:from-background md:via-background/80" />
        <div
          className="absolute inset-y-0 left-0 w-[80px] bg-gradient-to-r from-background/80 via-background/40 to-transparent md:w-[150px] md:from-background md:via-background/80" />
        <div
          className="absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-background/80 via-background/40 to-transparent md:w-[150px] md:from-background md:via-background/80" />

        {/* Corner masks - lighter on mobile */}
        <div
          className="absolute top-0 left-0 h-[150px] w-[150px] bg-gradient-to-br from-background/60 via-background/30 to-transparent md:h-[250px] md:w-[250px] md:from-background/90 md:via-background/60" />
        <div
          className="absolute top-0 right-0 h-[150px] w-[150px] bg-gradient-to-bl from-background/60 via-background/30 to-transparent md:h-[250px] md:w-[250px] md:from-background/90 md:via-background/60" />
        <div
          className="absolute bottom-0 left-0 h-[150px] w-[150px] bg-gradient-to-tr from-background/60 via-background/30 to-transparent md:h-[250px] md:w-[250px] md:from-background/90 md:via-background/60" />
        <div
          className="absolute right-0 bottom-0 h-[150px] w-[150px] bg-gradient-to-tl from-background/60 via-background/30 to-transparent md:h-[250px] md:w-[250px] md:from-background/90 md:via-background/60" />
      </div>
      <div className="relative z-20 flex items-center justify-center" style={{ minHeight: '85vh', paddingTop: '0', paddingBottom: '2rem' }}>
        <motion.div
          className="rounded-lg p-8 backdrop-blur-md md:p-12"
          style={{
            background: 'linear-gradient(135deg, rgba(204, 7, 30, 0.6) 0%, rgba(158, 0, 18, 0.7) 100%)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}>
          <motion.h1
            className="text-3xl leading-tight text-white md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}>
            REWE <br />
            deinen Traum
          </motion.h1>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}>
            <Button 
              size="lg" 
              className="bg-white text-[#CC071E] hover:bg-[#F5E5E7] hover:text-[#9E0012] font-semibold"
            >
              Jetzt bewerben
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero234aOption4 };


