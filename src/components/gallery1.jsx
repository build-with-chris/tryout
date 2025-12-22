import { useState } from "react";
import { Play } from "lucide-react";
import { mockStories } from "../data/mockStories";
import { cn } from "@/lib/utils";

const Gallery1 = ({
  className
}) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleStories = mockStories.slice(0, visibleCount);
  const hasMore = visibleCount < mockStories.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, mockStories.length));
  };

  return (
    <section id="marktstimmen" className={cn("py-8 md:py-12", className)}>
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Marktstimmen</h2>
          <p className="text-muted-foreground">
            Echte Geschichten von echten Menschen bei REWE
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
          {visibleStories.map((story) => (
            <div
              key={story.id}
              className={cn(
                "group relative cursor-pointer transition-all duration-300",
                "w-full max-w-[320px] md:max-w-[280px]",
                "aspect-[9/16]",
                "hover:scale-105"
              )}
            >
              <div
                className={cn(
                  "relative h-full w-full overflow-hidden rounded-2xl",
                  "bg-gradient-to-br from-[#CC071E] via-[#9E0012] to-[#CC071E]",
                  "border-2 border-white/20 shadow-xl"
                )}
              >
                {/* Video Preview Placeholder */}
                <div className="absolute inset-0">
                  <div className="h-full w-full bg-gradient-to-br from-white/10 via-transparent to-black/20" />
                  {/* Placeholder für Video - hier würde später ein Video-Thumbnail sein */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/30 text-4xl font-bold">
                      {story.firstName}
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="flex items-center justify-center size-20 rounded-full bg-white/90 backdrop-blur-sm group-hover:bg-white group-hover:scale-110 transition-all shadow-2xl">
                    <Play className="size-10 text-[#CC071E] ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-[#CC071E] text-white rounded-lg font-semibold hover:bg-[#9E0012] transition-colors"
            >
              Mehr anzeigen ({visibleCount} von {mockStories.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export { Gallery1 };
