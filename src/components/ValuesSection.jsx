import { useState, useRef, useEffect } from 'react'
import {
  Shield,
  ArrowUp,
  Users,
  CheckSquare,
  Leaf,
  Star,
  X,
} from "lucide-react"
import './ValuesSection.css'

// Alltagsnahe Werte-Daten mit konkreten Beispielen aus Markt/Logistik
const valuesData = [
  {
    id: 1,
    shortLabel: "Sicherheit",
    headline: "Sicherer Job. Sicheres Gefühl.",
    description: "Du startest nicht ins Ungewisse. Du kennst deinen Plan – und wenn's hakt, ist jemand da, der dich rauszieht. (Nicht erst nach Feierabend.)",
    examples: [
      "Schichten mit Vorlauf – damit Privatleben auch Platz hat",
      "Kolleg:innen als fester Anker am Start",
      "Stabilität, auf die man bauen kann"
    ],
    icon: Shield,
    reelSrc: "/Reels%20copy/Sicherheit.mp4",
    thumbnailSrc: "/Logisitik/rewe_logstik_sued_foto-craft_8958.jpg",
  },
  {
    id: 2,
    shortLabel: "Karriere",
    headline: "Wir begleiten dich auf der Karriereleiter.",
    description: "Du musst nicht geschniegelt \"Karriere machen\". Wer anpackt und dranbleibt, kommt bei uns weiter – finanziell und im Können.",
    examples: [
      "Klare Entwicklungsschritte",
      "Entwicklung in mehrere Richtungen (Markt/Logistik/Team)",
      "Perspektiven, die sichtbar sind (auch intern)"
    ],
    icon: ArrowUp,
    reelSrc: "/Reels copy/Karriere.mp4",
    thumbnailSrc: "/Logisitik/rewe_logstik_sued_foto-craft_8805.jpg",
  },
  {
    id: 3,
    shortLabel: "Respekt",
    headline: "Entrecôte statt Ellenbogen.",
    description: "Wenn's stressig wird, zählt nicht das Ego – sondern das Team. Bei uns hilft man sich, weil's sonst keinen Spaß macht.",
    examples: [
      "Teamgefühl als Standard, nicht als Ausnahme",
      "Unterstützung statt Schuldzuweisung",
      "Respektvoll – auch wenn's mal knirscht"
    ],
    icon: Users,
    reelSrc: "/Reels copy/Respekt.mp4",
  },
  {
    id: 4,
    shortLabel: "Klarheit",
    headline: "Du weißt, was zählt – heute und morgen.",
    description: "Klarheit heißt auch: Ziel und Sinn verstehen. Dann macht Arbeit mehr Spaß – und weniger Stress.",
    examples: [
      "Verständliche Ziele – mit dir abgestimmt",
      "Feste Ansprechpartner, die dich begleiten",
      "Standards, die dir Sicherheit geben"
    ],
    icon: CheckSquare,
    reelSrc: "/Reels copy/Klarheit.mp4",
  },
  {
    id: 5,
    shortLabel: "Verantwortung",
    headline: "Wir machen's lieber praktisch als perfekt.",
    description: "Verantwortung zeigt sich in kleinen Entscheidungen – jeden Tag. Und du kannst Teil davon sein, ohne Theater.",
    examples: [
      "Ideen einbringen – pragmatisch, nicht bürokratisch",
      "Mitdenken im Kleinen (da, wo's wirkt)",
      "Offenheit für alle – im Team und im Umgang"
    ],
    icon: Leaf,
    reelSrc: "/Reels copy/Verantwortung.mp4",
  },
  {
    id: 6,
    shortLabel: "Wertschätzung",
    headline: "REWE glaubt an dich. Glaub auch du an dich.",
    description: "Du bekommst Rückhalt, ehrliches Feedback und das Gefühl: Ich bin hier richtig – gerade am Anfang.",
    examples: [
      "Faire Bezahlung/Benefits als Basis",
      "Feedback auch dann, wenn's gut läuft",
      "Respektvoller Umgang als Standard"
    ],
    icon: Star,
    reelSrc: "/Reels copy/Wertschätzung.mp4",
  },
]

const ValuesSection = () => {
  const [activeValue, setActiveValue] = useState(valuesData[0].id)
  const [isExpanded, setIsExpanded] = useState(true)
  const [playingVideo, setPlayingVideo] = useState(null)
  const videoRef = useRef(null)

  const handleValueClick = (valueId) => {
    if (activeValue === valueId && isExpanded) {
      // Wenn die gleiche Card nochmal geklickt wird und bereits geöffnet ist, schließen
      setIsExpanded(false)
      setPlayingVideo(null)
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    } else {
      setActiveValue(valueId)
      setIsExpanded(true)
      // Video wird automatisch geladen, wenn die Card geöffnet wird
    }
  }

  // Video pausieren, wenn die Card geschlossen wird
  useEffect(() => {
    if (!isExpanded && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setPlayingVideo(null)
    }
  }, [isExpanded])

  // Video pausieren, wenn der aktive Wert wechselt
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setPlayingVideo(null)
    }
  }, [activeValue])

  const handleKeyDown = (e, valueId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleValueClick(valueId)
      return
    }

    // Pfeiltasten-Navigation für horizontale Navigation
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault()
      const currentIndex = valuesData.findIndex(v => v.id === valueId)
      let newIndex

      if (e.key === 'ArrowLeft') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : valuesData.length - 1
      } else {
        newIndex = currentIndex < valuesData.length - 1 ? currentIndex + 1 : 0
      }

      const newValue = valuesData[newIndex]
      setActiveValue(newValue.id)
      setIsExpanded(true)
      
      // Focus auf das neue Element setzen
      const newButton = document.getElementById(`value-tab-${newValue.id}`)
      if (newButton) {
        newButton.focus()
      }
    }
  }

  const handleVideoPlay = () => {
    setPlayingVideo(activeValue)
  }

  const handleVideoPause = () => {
    setPlayingVideo(null)
  }

  const handleVideoEnd = () => {
    setPlayingVideo(null)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  const handlePlayButtonClick = (e) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error)
      })
    }
  }

  const handleCloseExpanded = (e) => {
    e.stopPropagation()
    setIsExpanded(false)
    setPlayingVideo(null)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const currentValue = valuesData.find(v => v.id === activeValue) || valuesData[0]

  return (
    <section className="values-section section" id="werte" aria-labelledby="values-heading">
      <div className="container">
        <div className="values-header">
          <h2 id="values-heading" className="values-title">
            Bei Rewe Süd arbeitet's sich gut. Punkt.
          </h2>
          <p className="values-subtitle">
            Du sollst wissen, woran du bist: Menschen im Fokus, nicht nur Prozesse.
          </p>
        </div>

        <div className="values-container">
          {/* Werte-Navigation */}
          <nav className="values-nav" role="tablist" aria-label="Werte auswählen">
            <div className="values-nav-scroll">
              {valuesData.map((value) => {
                const IconComponent = value.icon
                const isActive = value.id === activeValue
                
                return (
                  <button
                    key={value.id}
                    className={`values-nav-item ${isActive ? 'values-nav-item--active' : ''}`}
                    onClick={() => handleValueClick(value.id)}
                    onKeyDown={(e) => handleKeyDown(e, value.id)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`value-content-${value.id}`}
                    id={`value-tab-${value.id}`}
                    tabIndex={isActive ? 0 : -1}
                  >
                    <IconComponent 
                      className="values-nav-icon" 
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="values-nav-label">{value.shortLabel}</span>
                  </button>
                )
              })}
            </div>
          </nav>

          {/* Aktiver Wert-Content */}
          <div 
            className={`values-content ${isExpanded ? 'values-content--expanded' : ''}`}
            role="tabpanel"
            id={`value-content-${currentValue.id}`}
            aria-labelledby={`value-tab-${currentValue.id}`}
            onClick={() => !isExpanded && setIsExpanded(true)}
          >
            {isExpanded ? (
              <div className="values-content-expanded">
                {/* Linke Hälfte: Text-Content */}
                <div className="values-content-left">
                  <button 
                    className="values-close-button"
                    onClick={handleCloseExpanded}
                    aria-label="Card schließen"
                  >
                    <X size={24} />
                  </button>
                  <div className="values-content-header">
                    <h3 className="values-content-headline">
                      {currentValue.headline}
                    </h3>
                    <p className="values-content-description">
                      {currentValue.description}
                    </p>
                  </div>

                  <div className="values-examples">
                    <h4 className="values-examples-title">Konkret bedeutet das:</h4>
                    <ul className="values-examples-list" role="list">
                      {currentValue.examples.map((example, index) => (
                        <li key={index} className="values-examples-item">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Rechte Hälfte: Video */}
                <div className="values-content-right">
                  <div className="values-video-wrapper">
                    <video
                      ref={videoRef}
                      className="values-video"
                      src={currentValue.reelSrc}
                      poster={currentValue.thumbnailSrc}
                      loop={false}
                      muted={false}
                      playsInline
                      preload="metadata"
                      controls={playingVideo === activeValue}
                      onPlay={handleVideoPlay}
                      onPause={handleVideoPause}
                      onEnded={handleVideoEnd}
                      onError={(e) => {
                        const video = e.target
                        console.error('Video error for:', currentValue.shortLabel, {
                          error: video.error,
                          code: video.error?.code,
                          message: video.error?.message,
                          currentSrc: video.src,
                          reelSrc: currentValue.reelSrc
                        })
                      }}
                      onLoadedMetadata={() => {
                        console.log('Video metadata loaded:', currentValue.shortLabel, currentValue.reelSrc)
                      }}
                      onCanPlay={() => {
                        console.log('Video can play:', currentValue.shortLabel)
                      }}
                    >
                      <source src={currentValue.reelSrc} type="video/mp4" />
                      Dein Browser unterstützt das Video-Tag nicht.
                    </video>
                    
                    {playingVideo !== activeValue && (
                      <>
                        <div className="values-video-overlay" />
                        <button 
                          className="values-play-button" 
                          onClick={handlePlayButtonClick}
                          aria-label="Video abspielen"
                        >
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9" />
                            <path
                              d="M24 18L24 42L42 30L24 18Z"
                              fill="#CC071E"
                            />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="values-content-inner">
                <div className="values-content-header">
                  <h3 className="values-content-headline">
                    {currentValue.headline}
                  </h3>
                  <p className="values-content-description">
                    {currentValue.description}
                  </p>
                </div>

                <div className="values-examples">
                  <h4 className="values-examples-title">Konkret bedeutet das:</h4>
                  <ul className="values-examples-list" role="list">
                    {currentValue.examples.map((example, index) => (
                      <li key={index} className="values-examples-item">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="values-expand-hint">
                  Klicken, um Reel zu öffnen
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection

