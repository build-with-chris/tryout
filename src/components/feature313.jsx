import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { worldData } from "../data/worldData";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Toggle Component
const CareerToggle = ({ activeCareer, onToggle }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex rounded-lg border-2 border-[#CC071E]/20 bg-white p-1" role="tablist">
        <button
          className={cn(
            "px-8 py-3 rounded-md font-semibold transition-all",
            activeCareer === 'markt'
              ? "bg-[#CC071E] text-white shadow-md"
              : "text-[#CC071E] hover:bg-[#F5E5E7]"
          )}
          onClick={() => onToggle('markt')}
          role="tab"
          aria-selected={activeCareer === 'markt'}
        >
          Markt
        </button>
        <button
          className={cn(
            "px-8 py-3 rounded-md font-semibold transition-all",
            activeCareer === 'logistik'
              ? "bg-[#CC071E] text-white shadow-md"
              : "text-[#CC071E] hover:bg-[#F5E5E7]"
          )}
          onClick={() => onToggle('logistik')}
          role="tab"
          aria-selected={activeCareer === 'logistik'}
        >
          Logistik
        </button>
      </div>
    </div>
  );
};

const Feature313 = ({
  className
}) => {
  const [activeCareer, setActiveCareer] = useState('markt');
  const isMobile = useIsMobile();

  // Daten für Markt und Logistik
  const careerData = {
    markt: {
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
      imageAlt: "REWE Markt - Kundenberatung und Verkauf",
      videoUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/man-1.mp4",
      videoCaption: "Dein Tag im Markt",
      videoSecondaryCaption: "(2:15 Min)",
      cards: worldData.markt.cards.slice(0, 4).map((card, index) => ({
        title: card.title,
        image: `https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${index + 2}.svg`,
        description: card.bullets[0]
      }))
    },
    logistik: {
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
      imageAlt: "REWE Logistik - Warenbewegung und Kommissionierung",
      videoUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/man-1.mp4",
      videoCaption: "Dein Tag in der Logistik",
      videoSecondaryCaption: "(2:30 Min)",
      cards: worldData.logistik.cards.slice(0, 4).map((card, index) => ({
        title: card.title,
        image: `https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-${index + 2}.svg`,
        description: card.bullets[0]
      }))
    }
  };

  const currentData = careerData[activeCareer];

  // Helper function to extract YouTube video ID
  const getYouTubeVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = currentData.videoUrl ? getYouTubeVideoId(currentData.videoUrl) : null;
  const isYouTube = !!youtubeId;

  return (
    <section className={cn("bg-muted py-12", className)}>
      <div className="container flex flex-col gap-2">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Markt oder Logistik. Wofür interessierst du dich?
          </h2>
        </div>

        {/* Toggle */}
        <CareerToggle activeCareer={activeCareer} onToggle={setActiveCareer} />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-1 lg:grid-cols-4">
          {currentData.cards.map((card, index) => (
            <Card key={index} className="border-none p-10 shadow-none">
              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-1">
                  {currentData.cards.map((card, circleIndex) => (
                    <div
                      key={circleIndex}
                      className={`${index >= circleIndex ? "bg-[#CC071E]" : "bg-muted"} h-2 w-2 rounded-full`} />
                  ))}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  0{index + 1}
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <div className="aspect-square h-12 w-12 flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="aspect-square h-full w-full rounded-lg object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-md leading-tight font-medium">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {card.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Container */}
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              className="group relative aspect-video min-h-72 cursor-pointer overflow-hidden rounded-lg"
              whileHover="hover"
              initial="initial">
              <motion.div
                className="absolute inset-0"
                variants={{
                  initial: { filter: "blur(0px)" },
                  hover: { filter: "blur(4px)" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}>
                <motion.img
                  src={currentData.imageSrc}
                  alt={currentData.imageAlt}
                  className="h-full w-full rounded-lg object-cover"
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}/>
              </motion.div>
              <div
                className="bg-opacity-20 absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="flex flex-col items-center justify-center gap-2 md:flex-row"
                  variants={{
                    initial: { gap: "0.5rem" },
                    hover: { gap: "0rem" },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}>
                  <motion.div
                    variants={{
                      initial: { x: 0, scale: 1 },
                      hover: {
                        x: isMobile ? 0 : "75%",
                        scale: 1.2,
                      },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}>
                    <Button
                      size="lg"
                      className="h-14 w-14 rounded-full bg-white hover:bg-white/90 lg:h-20 lg:w-20">
                      <Play className="ml-0.5 size-5 text-[#CC071E] md:size-7" />
                      <span className="sr-only">{currentData.videoCaption}</span>
                    </Button>
                  </motion.div>

                  <motion.div
                    className="text-center md:text-left"
                    variants={{
                      initial: { opacity: 1 },
                      hover: { opacity: 0, transform: "-translate-y-3" },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div className="px-4 py-2">
                      <p className="text-lg font-bold text-white">
                        {currentData.videoCaption}
                      </p>
                      <p className="text-lg font-medium text-white/80">
                        {currentData.videoSecondaryCaption}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="w-full border-none bg-black p-0 md:max-w-6xl md:p-1">
            <DialogTitle className="sr-only">{currentData.videoCaption}</DialogTitle>
            <DialogDescription className="sr-only">
              {currentData.videoSecondaryCaption} - {currentData.videoCaption}
            </DialogDescription>
            <div className="aspect-video w-full">
              {isYouTube ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
              ) : (
                <video className="h-full w-full rounded-lg" controls autoPlay src={currentData.videoUrl}>
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="w-full max-w-md py-6 text-lg font-bold bg-[#CC071E] hover:bg-[#9E0012] text-white shadow-lg hover:shadow-xl transition-all"
            onClick={() => {
              // Hier könnte eine Navigation zu den Stellen erfolgen
              console.log(`Offene Stellen in ${activeCareer === 'markt' ? 'Markt' : 'Logistik'}`);
            }}
          >
            Offene Stellen {activeCareer === 'markt' ? 'im Markt' : 'in der Logistik'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Feature313 };
