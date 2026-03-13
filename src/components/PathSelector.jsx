import { useEffect, useState } from 'react'
import { Briefcase, Users, Shield } from 'lucide-react'
import './PathSelector.css'
import CareerPathJobs from './CareerPathJobs'
import { Feature297 } from '@/components/feature297'
import { Feature217b } from '@/components/feature217b'

// Image Alt-Texte für Vertrieb, Logistik und Verwaltung
const imageAltTexts = {
  markt: "REWE Vertrieb - Kundenberatung und Verkauf",
  logistik: "REWE Logistik - Warenbewegung und Kommissionierung",
  verwaltung: "REWE Verwaltung - Büro und Organisation",
}

// Inhalte für Markt, Logistik und Verwaltung - aus dem Arbeitsalltag
const pathContent = {
  markt: {
    headline: "",
    description: "",
    aspects: [
      {
        title: "In unserem Märkten trägst du von Anfang an echte Verantwortung - für deinen Arbeitsbereich und für die Zufriedenheit unserer Kund:innen.",
        summary: "",
        items: []
      }
    ]
  },
  logistik: {
    headline: "",
    description: "",
    aspects: [
      {
        title: "In der Logistik bewegst du was - entdecke deine Karrieremöglichkeiten an unseren Logistikstandorten in Eitting und Buttenheim.",
        summary: "",
        items: []
      }
    ]
  },
  verwaltung: {
    headline: "",
    description: "",
    aspects: [
      {
        title: "Übernimm Verantwortung für das Wachstum in unseren Märkten oder gestalte den Erfolg unserer Regionszentrale in Eching aktiv mit.",
        summary: "",
        items: []
      }
    ]
  },
  frischetheke: {
    headline: "",
    description: "",
    aspects: [
      {
        title: "Du bist die direkte Ansprechperson für unsere Kund:innen, berätst individuell und sorgst mit deinem Fachwissen für Frische und Qualität. Ob Käse, Wurst, Fisch oder Feinkost - hier trifft Handwerk auf Leidenschaft.",
        summary: "",
        items: []
      }
    ]
  }
}

const PathSelector = () => {
  const [activePath, setActivePath] = useState(null) // null = keine Auswahl, 'markt', 'logistik' oder 'verwaltung'
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(min-width: 768px)').matches
  })
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const onChange = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const handlePathSelect = (path) => {
    // Wenn bereits aktiv, schließen
    if (activePath === path) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActivePath(null)
        setIsTransitioning(false)
      }, 150)
      return
    }
    
    setIsTransitioning(true)
    
    // Kurze Verzögerung für Fade-Out
    setTimeout(() => {
      setActivePath(path)
      setIsTransitioning(false)
    }, 150)
  }

  const handleKeyDown = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handlePathSelect(path)
    }
  }

  const currentContent = activePath ? pathContent[activePath] : null

  const renderPathContent = (path) => {
    const content = path ? pathContent[path] : null
    if (!path || !content) return null
    const ariaLabel = `Inhalte für ${
      path === 'markt'
        ? 'Vertrieb'
        : path === 'frischetheke'
        ? 'Frischetheke'
        : path === 'logistik'
        ? 'Logistik'
        : 'Verwaltung'
    }`

    return (
      <div
        id={`path-content-${path}`}
        className={`path-content ${isTransitioning ? 'path-content--transitioning' : ''}`}
        role="region"
        aria-live="polite"
        aria-labelledby={`path-cta-${path}`}
        aria-label={ariaLabel}
      >
        <Feature217b
          badge=""
          headline=""
          description=""
          features={content?.aspects.map((aspect, index) => ({
            ...aspect,
            icon: index === 0 ? Briefcase : index === 1 ? Users : Shield,
          })) || []}
          backgroundImage={
            path === 'markt'
              ? '/QuerMarktLogistikVerwaltung/Markt.jpg'
              : path === 'logistik'
              ? '/QuerMarktLogistikVerwaltung/Logistik.jpg'
              : path === 'frischetheke'
              ? '/Markt/rewe_kolbermoor_foto-craft_3192.jpg'
              : '/QuerMarktLogistikVerwaltung/Verwaltung.jpg'
          }
        />

        <CareerPathJobs activePath={path} />
      </div>
    )
  }

  return (
    <section className="path-selector section" id="path-selector" aria-labelledby="path-heading">
      <div className="container">
        <div className="path-selector-header">
          <h2 id="path-heading" className="path-selector-title">
            Ein Team. Deine Möglichkeiten.
          </h2>
          <p className="path-selector-subtitle">
            Markt, Frischetheke, Logistik, Zentrale oder Außendienst.
          </p>
        </div>

        {/* Feature297 Cards - Shadcn Style */}
        <div className="path-selector-cards">
          <Feature297
            items={[
              {
                id: 'markt',
                titlePrefix: 'Komm in den',
                titleTyping: 'Markt',
                imageSrc: '/KommInDenMarkt.jpg',
                imageAlt: imageAltTexts.markt,
              },
              {
                id: 'frischetheke',
                titlePrefix: 'Komm an die',
                titleTyping: 'Frischetheke',
                imageSrc: '/KommAnDieFrischetheke.jpg',
                imageAlt: 'REWE Frischetheke - Frische Produkte und Beratung',
              },
              {
                id: 'logistik',
                titlePrefix: 'Komm in die',
                titleTyping: 'Logistik',
                imageSrc: '/MarktLogistikVerwaltgung/Logistik.jpg',
                imageAlt: imageAltTexts.logistik,
              },
              {
                id: 'verwaltung',
                titlePrefix: 'Komm in die',
                titleTyping: 'Zentral & Außendienst',
                imageSrc: '/MarktLogistikVerwaltgung/Verwaltung.jpg',
                imageAlt: imageAltTexts.verwaltung,
              },
            ]}
            activeItem={activePath}
            onItemClick={handlePathSelect}
            renderContent={!isDesktop ? (id) => renderPathContent(id) : null}
          />
        </div>

        {/* Content-Bereich - wechselt je nach Auswahl (nur Desktop) */}
        {isDesktop && activePath && currentContent && renderPathContent(activePath)}
      </div>
    </section>
  )
}

export default PathSelector

