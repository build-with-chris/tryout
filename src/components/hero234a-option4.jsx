import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

// Bilder für obere Leiste - Azubis (mit 80% Schwarz-Weiß-Filter)
const azubisImages = [
  "/Azubis/Azubi%20Büro.jpg",
  "/Azubis/Azubi%20Frischetheke.jpg",
  "/Azubis/Azubi%20Logistik.jpg",
  "/Azubis/Mitarbeiterin%20Markt.jpg",
  "/Azubis/Quereinstieg%20Firschetheke.jpg",
  "/Azubis/QuereinstiegLager.jpg",
];

// Neue REWE Bilder für die untere Leiste (mit Sprüchen zwischen den Bildern)
const reweImages = [
  "/heroReweBilder/Motiv1-2.jpg",
  "/heroReweBilder/Spruch1.png",
  "/heroReweBilder/Motiv2-1.jpg",
  "/heroReweBilder/Motiv2-2.jpg",
  "/heroReweBilder/Spruch2.png",
  "/heroReweBilder/Motiv3-3.jpg",
  "/heroReweBilder/Motiv3-4.jpg",
  "/heroReweBilder/Spruch3.png",
  "/heroReweBilder/Motiv3-5.jpg",
];

// Bilder für mittlere Leiste - Führungspersönlichkeiten
const fuehrungspersoehnlichkeitenImages = [
  "/Fuehrungspersoehnlichkeiten/Jutta.jpg",
  "/Fuehrungspersoehnlichkeiten/Leiter Frischetheke.jpg",
  "/Fuehrungspersoehnlichkeiten/Sarah.jpg",
  "/Fuehrungspersoehnlichkeiten/Teamleiter Logistik.jpg",
  "/Fuehrungspersoehnlichkeiten/Temperatursicherheitsbeauftragter.jpg",
  "/Fuehrungspersoehnlichkeiten/Yassin.jpg",
];

// Funktion zum Erstellen einer gemischten Zeile mit 2 Bildern aus jedem Ordner
const createRowImages = (rowIndex) => {
  // Zeile 0: Bilder 1-2 (Index 0-1)
  // Zeile 1: Bilder 3-4 (Index 2-3)
  // Zeile 2: Bilder 5-6 (Index 4-5)
  const startIndex = rowIndex * 2;
  const endIndex = startIndex + 2;
  
  const azubis = azubisImages.slice(startIndex, endIndex);
  const fuehrung = fuehrungspersoehnlichkeitenImages.slice(startIndex, endIndex);
  const rewe = reweImages.slice(startIndex, endIndex);
  
  // Mische abwechselnd: Azubis, Führung, Rewe, Azubis, Führung, Rewe...
  const mixed = [];
  for (let i = 0; i < 2; i++) {
    mixed.push({ src: azubis[i], type: 'azubis' });
    mixed.push({ src: fuehrung[i], type: 'fuehrung' });
    mixed.push({ src: rewe[i], type: 'rewe' });
  }
  
  return mixed;
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
          className="relative h-[500px] w-[900px] overflow-hidden rounded-2xl md:h-[600px] md:w-[1200px]">
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
                        style={{
                          filter: imageData.type === 'azubis' ? 'grayscale(80%)' : 'none'
                        }} />
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


