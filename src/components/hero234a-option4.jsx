import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

// Bilder für jede Zeile aus den Row-Ordnern
const row0Images = [
  "/Row0/0.jpg",
  "/Row0/1.jpg",
  "/Row0/2.jpg",
  "/Row0/3.jpg",
  "/Row0/4.jpg",
  "/Row0/5.jpg",
  "/Row0/6.jpg",
  "/Row0/7.jpg",
];

const row1Images = [
  "/Row1/0.jpg",
  "/Row1/1.jpg",
  "/Row1/2.jpg",
  "/Row1/3.jpg",
  "/Row1/4.jpg",
  "/Row1/5.jpg",
  "/Row1/6.jpg",
  "/Row1/7.jpg",
];

const row2Images = [
  "/Row2/0.jpg",
  "/Row2/1.jpg",
  "/Row2/2.png",
  "/Row2/3.jpg",
  "/Row2/4.jpg",
  "/Row2/5.jpg",
  "/Row2/6.jpg",
  "/Row2/7.jpg",
];

// Funktion zum Erstellen einer Zeile mit Bildern aus dem entsprechenden Row-Ordner
const createRowImages = (rowIndex) => {
  // Wähle die Bilder basierend auf der Zeile
  const rowImages = [
    row0Images,
    row1Images,
    row2Images,
  ];
  
  const images = rowImages[rowIndex % rowImages.length];
  
  // Konvertiere zu dem erwarteten Format
  return images.map((src) => ({
    src,
    type: 'default', // Kein spezieller Filter mehr nötig
  }));
};

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
          className="relative h-[500px] w-[900px] overflow-hidden rounded-2xl md:h-[600px] md:w-full md:rounded-none">
          <div className="absolute inset-0 flex flex-col justify-center gap-3">
            {[0, 1, 2].map((rowIndex) => {
              // Erstelle für jede Zeile eine eigene Mischung mit 6 Bildern aus jedem Ordner
              const rowImages = createRowImages(rowIndex);
              
              return (
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
                  {[...rowImages, ...rowImages, ...rowImages, ...rowImages].map((imageData, imageIndex) => (
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
                        src={imageData.src}
                        alt={`Gallery image ${imageIndex + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Mobile-friendly ellipse mask */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* Light masking on mobile, lighter on desktop */}
        <div
          className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-background/40 via-background/20 to-transparent md:h-[200px] md:from-background/30 md:via-background/15" />
        <div
          className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-background/40 via-background/20 to-transparent md:h-[200px] md:from-background/30 md:via-background/15" />
        <div
          className="absolute inset-y-0 left-0 w-[80px] bg-gradient-to-r from-background/40 via-background/20 to-transparent md:w-[150px] md:from-background/30 md:via-background/15" />
        <div
          className="absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-background/40 via-background/20 to-transparent md:w-[150px] md:from-background/30 md:via-background/15" />

        {/* Corner masks - lighter on mobile and desktop */}
        <div
          className="absolute top-0 left-0 h-[150px] w-[150px] bg-gradient-to-br from-background/40 via-background/20 to-transparent md:h-[250px] md:w-[250px] md:from-background/50 md:via-background/25" />
        <div
          className="absolute top-0 right-0 h-[150px] w-[150px] bg-gradient-to-bl from-background/40 via-background/20 to-transparent md:h-[250px] md:w-[250px] md:from-background/50 md:via-background/25" />
        <div
          className="absolute bottom-0 left-0 h-[150px] w-[150px] bg-gradient-to-tr from-background/40 via-background/20 to-transparent md:h-[250px] md:w-[250px] md:from-background/50 md:via-background/25" />
        <div
          className="absolute right-0 bottom-0 h-[150px] w-[150px] bg-gradient-to-tl from-background/40 via-background/20 to-transparent md:h-[250px] md:w-[250px] md:from-background/50 md:via-background/25" />
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
              asChild
            >
              <a 
                href="https://karriere.rewe.de/jobs/suche" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Jetzt bewerben
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero234aOption4 };


