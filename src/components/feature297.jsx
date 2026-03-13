import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import "./feature297.css";

const TYPING_CHAR_MS = 90;
const TYPING_HOLD_MS = 2800;
const TYPING_DELETE_MS = 42;
const TYPING_PAUSE_BEFORE_RESTART_MS = 600;
const TYPING_STAGGER_MS = 1600;

function useCardTypewriter(text, startDelay) {
  const [display, setDisplay] = useState("");
  const phaseRef = useRef("idle");
  const displayRef = useRef("");

  useEffect(() => {
    if (!text) return;
    let timeoutId;
    const schedule = () => {
      const cur = displayRef.current;
      const ph = phaseRef.current;
      if (ph === "idle") {
        if (cur.length < text.length) {
          const next = text.slice(0, cur.length + 1);
          displayRef.current = next;
          setDisplay(next);
          timeoutId = setTimeout(schedule, TYPING_CHAR_MS);
        } else {
          phaseRef.current = "hold";
          timeoutId = setTimeout(schedule, TYPING_HOLD_MS);
        }
      } else if (ph === "hold") {
        phaseRef.current = "deleting";
        timeoutId = setTimeout(schedule, 0);
      } else if (ph === "deleting") {
        if (cur.length > 0) {
          const next = text.slice(0, cur.length - 1);
          displayRef.current = next;
          setDisplay(next);
          timeoutId = setTimeout(schedule, TYPING_DELETE_MS);
        } else {
          phaseRef.current = "idle";
          timeoutId = setTimeout(schedule, TYPING_PAUSE_BEFORE_RESTART_MS);
        }
      }
    };
    const start = () => {
      phaseRef.current = "idle";
      displayRef.current = "";
      setDisplay("");
      timeoutId = setTimeout(schedule, 0);
    };
    timeoutId = setTimeout(start, startDelay);
    return () => { if (timeoutId) clearTimeout(timeoutId); };
  }, [text, startDelay]);

  return display;
}

const Feature297 = ({
  className,
  items = [],
  activeItem = null,
  onItemClick = () => {},
  renderContent = null
}) => {
  const [animatedIndex, setAnimatedIndex] = useState(0);

  useEffect(() => {
    if (activeItem) return;
    const interval = setInterval(() => {
      setAnimatedIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length, activeItem]);

  return (
    <div className={cn("grid gap-4 md:grid-cols-4 relative", className)}>
      {items.map((item, index) => {
        const isActive = activeItem === item.id;
        const isAnimated = !activeItem && animatedIndex === index;
        const hasTyping = item.titlePrefix != null && item.titleTyping != null;
        const startDelay = hasTyping ? index * TYPING_STAGGER_MS : 0;
        return (
          <Feature297Card
            key={item.id || index}
            item={item}
            index={index}
            isActive={isActive}
            isAnimated={isAnimated}
            onItemClick={onItemClick}
            renderContent={renderContent}
            typingDisplay={hasTyping ? <Feature297CardTypewriter text={item.titleTyping} startDelay={startDelay} /> : null}
          />
        );
      })}
    </div>
  );
};

function Feature297CardTypewriter({ text, startDelay }) {
  const display = useCardTypewriter(text, startDelay);
  return (
    <span className="feature297-typing-wrap">
      <span>{display}</span>
      <span className="feature297-typing-cursor" aria-hidden="true">|</span>
    </span>
  );
}

function Feature297Card({ item, index, isActive, isAnimated, onItemClick, renderContent, typingDisplay }) {
  const hasTyping = item.titlePrefix != null && item.titleTyping != null;
  const titleContent = hasTyping
    ? (
        <>
          <span className="feature297-title-prefix">{item.titlePrefix} </span>
          {typingDisplay}
        </>
      )
    : item.title;

  return (
    <React.Fragment>
      <button
        onClick={() => onItemClick(item.id)}
        className={cn(
          "group relative overflow-hidden rounded-sm h-[300px] md:h-[375px]",
          isActive && "ring-2 ring-primary ring-offset-2"
        )}
        aria-pressed={isActive}
        aria-expanded={isActive}
        aria-controls={`path-content-${item.id}`}
        id={`path-cta-${item.id}`}
        aria-label={item.titlePrefix ? `${item.titlePrefix} ${item.titleTyping}` : item.title}
      >
        {isAnimated && (
          <div className="absolute inset-0 rounded-sm pointer-events-none z-20 overflow-visible">
            <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 4px #CC071E)' }}>
              <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="4" fill="none" stroke="#CC071E" strokeWidth="3" strokeDasharray="200 400" strokeDashoffset="0" className="animate-border-rotate" />
            </svg>
          </div>
        )}
        <img
          src={item.imageSrc}
          alt={item.imageAlt || item.title || `${item.titlePrefix} ${item.titleTyping}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{
            objectPosition: (item.id === 'markt' || item.id === 'frischetheke' || item.id === 'verwaltung') ? 'center 20%' : 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
          <div className="relative">
            <h2 className="feature297-card-title text-4xl font-medium tracking-tight font-caveat text-white drop-shadow-[0_2px_12px_rgba(0,0,0,1)] [text-shadow:_3px_3px_6px_rgba(0,0,0,1),_0_0_10px_rgba(0,0,0,0.8)]">
              {titleContent}
            </h2>
          </div>
              {/* Button unten mittig - Plus wenn nicht aktiv, X wenn aktiv */}
              <div className="flex justify-center">
                  <div className={cn(
                    "w-12 h-12 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300",
                    isActive ? "bg-[#CC071E]" : "bg-white"
                  )}>
                    {isActive ? (
                      // X-Symbol wenn aktiv (weiß auf rot)
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      // Plus-Symbol wenn nicht aktiv (rot auf weiß)
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300"
                      >
                        <path
                          d="M12 5V19M5 12H19"
                          stroke="#CC071E"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </button>
            {/* Mobile: Content direkt nach der aktiven Kachel */}
            {isActive && renderContent && (
              <div className="md:hidden col-span-full mt-4">
                {renderContent(item.id)}
              </div>
            )}
    </React.Fragment>
  );
}

export { Feature297 };
