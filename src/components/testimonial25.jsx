import { ArrowRight, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "./testimonial25.css";

const items = [
  {
    id: 'reel-1',
    videoSrc: '/KommInsTeam/1.mp4',
  },
  {
    id: 'reel-2',
    videoSrc: '/KommInsTeam/2.mp4',
  },
  {
    id: 'reel-3',
    videoSrc: '/KommInsTeam/3.mp4',
  },
];

const Testimonial25 = ({
  className,
  variant = "light" // "light" for light background, "dark" for dark background
}) => {
  const isDark = variant === "dark";
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});

  // Pause all other videos when one starts playing
  useEffect(() => {
    items.forEach((item) => {
      const video = videoRefs.current[item.id];
      if (video && playingVideo !== item.id) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [playingVideo]);

  // Load videos when component mounts
  useEffect(() => {
    items.forEach((item) => {
      const video = videoRefs.current[item.id];
      if (video && video.networkState === 0) {
        // Only load if not already loading/loaded
        video.load();
      }
    });
  }, []);

  const handlePlayClick = (itemId) => {
    const video = videoRefs.current[itemId];
    
    if (!video) {
      console.error('Video element not found:', itemId);
      return;
    }

    // If clicking the same video that's playing, pause it
    if (playingVideo === itemId) {
      video.pause();
      setPlayingVideo(null);
      return;
    }

    // Check if video is ready to play
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlayingVideo(itemId);
            console.log('Video started playing:', itemId);
          })
          .catch((error) => {
            console.error('Error playing video:', itemId, error);
            console.error('Video state:', {
              readyState: video.readyState,
              networkState: video.networkState,
              src: video.src,
              currentSrc: video.currentSrc,
              error: video.error
            });
            setPlayingVideo(null);
          });
      }
    };

    // If video is already loaded, play it
    if (video.readyState >= 2) {
      playVideo();
    } else {
      // Wait for video to be ready
      const onCanPlay = () => {
        playVideo();
        video.removeEventListener('canplay', onCanPlay);
      };
      video.addEventListener('canplay', onCanPlay);
      
      // Also try to load the video if it hasn't started loading
      if (video.networkState === 0) {
        video.load();
      }
    }
  };

  const handleVideoPlay = (itemId) => {
    setPlayingVideo(itemId);
  };

  const handleVideoPause = (itemId) => {
    // Only reset if it was the playing video
    if (playingVideo === itemId) {
      setPlayingVideo(null);
    }
  };

  const handleVideoEnd = (itemId) => {
    setPlayingVideo(null);
    const video = videoRefs.current[itemId];
    if (video) {
      video.currentTime = 0;
    }
  };
  
  return (
    <section 
      className={cn("py-32 relative z-10 testimonial25-section", className, isDark ? "testimonial25-dark" : "testimonial25-light")}
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div className="space-y-4">
          <h2 
            id="testimonials-heading"
            className={cn(
              "text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-center",
              isDark ? "text-white" : "text-neutral-900"
            )}
          >
            Wann kommst du ins Team?
          </h2>
          <p className={cn(
            "max-w-md leading-snug font-medium text-center mx-auto",
            isDark ? "text-white" : "text-neutral-700"
          )} style={isDark ? { opacity: 0.95 } : {}}>
            Über Teamgefühl, Entwicklung und den Moment, in dem's „passt".
          </p>
          <p className={cn(
            "text-sm text-center",
            isDark ? "text-white/80" : "text-neutral-600"
          )}>
            15–25 Sekunden. Einfach reinhören.
          </p>
        </div>

        <div className="relative mt-8 md:mt-12 lg:mt-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            aria-label="Kundenstimmen Karussell"
          >
            <CarouselContent className="">
              {items.map((testimonial, index) => (
                <CarouselItem
                  key={`${testimonial.id}-${index}`}
                  className="grow basis-[280px] md:basis-[320px] lg:basis-[360px]"
                >
                  <Card className={cn(
                    "overflow-hidden border backdrop-blur-sm relative",
                    isDark 
                      ? "border-white/30 bg-black"
                      : "border-neutral-200 bg-black"
                  )}>
                    <CardContent className="p-0">
                      <div className="relative w-full aspect-[9/16] bg-black">
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[testimonial.id] = el;
                            }
                          }}
                          className="w-full h-full object-cover"
                          src={testimonial.videoSrc}
                          loop={false}
                          muted={false}
                          playsInline
                          preload="auto"
                          controls={playingVideo === testimonial.id}
                          onPlay={() => handleVideoPlay(testimonial.id)}
                          onPause={() => handleVideoPause(testimonial.id)}
                          onEnded={() => handleVideoEnd(testimonial.id)}
                          onLoadedMetadata={() => {
                            console.log('Video metadata loaded:', testimonial.id, testimonial.videoSrc);
                          }}
                          onCanPlay={() => {
                            console.log('Video can play:', testimonial.id, testimonial.videoSrc);
                          }}
                          onCanPlayThrough={() => {
                            console.log('Video can play through:', testimonial.id);
                          }}
                          onLoadStart={() => {
                            console.log('Video load started:', testimonial.id, testimonial.videoSrc);
                          }}
                          onError={(e) => {
                            const video = e.target;
                            console.error('Video error:', testimonial.id, {
                              error: video.error,
                              code: video.error?.code,
                              message: video.error?.message,
                              currentSrc: video.currentSrc,
                              src: video.src,
                              videoSrc: testimonial.videoSrc,
                              networkState: video.networkState,
                              readyState: video.readyState
                            });
                          }}
                        >
                          Dein Browser unterstützt das Video-Tag nicht.
                        </video>
                        
                        {playingVideo !== testimonial.id && (
                          <button
                            onClick={() => handlePlayClick(testimonial.id)}
                            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group z-10"
                            aria-label="Video abspielen"
                          >
                            <div className={cn(
                              "w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
                              isDark 
                                ? "bg-white/20 backdrop-blur-sm"
                                : "bg-white/90 backdrop-blur-sm"
                            )}>
                              <Play 
                                className={cn(
                                  "size-8 ml-1",
                                  isDark ? "text-white" : "text-neutral-900"
                                )}
                                fill="currentColor"
                              />
                            </div>
                          </button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex gap-3">
              <CarouselPrevious 
                className={cn(
                  "static size-10 translate-x-0 translate-y-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  isDark
                    ? "bg-white/15 border-white/30 text-white hover:bg-white/25 focus-visible:ring-white"
                    : "bg-neutral-100 border-neutral-300 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-primary"
                )}
                aria-label="Vorheriges Testimonial"
              />
              <CarouselNext 
                className={cn(
                  "static size-10 translate-x-0 translate-y-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  isDark
                    ? "bg-white/15 border-white/30 text-white hover:bg-white/25 focus-visible:ring-white"
                    : "bg-neutral-100 border-neutral-300 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-primary"
                )}
                aria-label="Nächstes Testimonial"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial25 };
