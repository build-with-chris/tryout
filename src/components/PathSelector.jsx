import { useEffect, useState } from 'react'
import { Briefcase, Users, Shield } from 'lucide-react'
import './PathSelector.css'
import CareerPathJobs from './CareerPathJobs'
import { Feature297 } from '@/components/feature297'
import { Feature217b } from '@/components/feature217b'
import { Feature253 } from '@/components/feature253'

// Image Alt-Texte für Vertrieb, Logistik und Verwaltung
const imageAltTexts = {
  markt: "REWE Vertrieb - Kundenberatung und Verkauf",
  logistik: "REWE Logistik - Warenbewegung und Kommissionierung",
  verwaltung: "REWE Verwaltung - Büro und Organisation",
}

// Inhalte für Markt, Logistik und Verwaltung - aus dem Arbeitsalltag
const pathContent = {
  markt: {
    headline: "Der Markt wartet auf dich",
    description: "Du bist da, wo es passiert. Kunden beraten, Ware auffüllen, im Team zusammenarbeiten. Jeder Tag ist anders, aber die Struktur gibt dir Sicherheit.",
    aspects: [
      {
        title: "In den Marktrollen zählt am Ende vor allem, dass Kund:innen zufrieden sind.",
        summary: "",
        items: []
      },
      {
        title: "Zusammenarbeit auf Augenhöhe. Verantwortung wird belohnt.",
        summary: "",
        items: []
      },
      {
        title: "Du bekommst Struktur im Alltag und Sicherheit im Job",
        summary: "",
        items: []
      }
    ]
  },
  logistik: {
    headline: "Die Logistik wartet auf dich",
    description: "zusammen mit 1.211 Kollegen an zwei Standorten in Buttenheim und Eitting",
    aspects: [
      {
        title: "Kommissionierung, Wareneingang oder Warenausgang",
        summary: "",
        items: []
      },
      {
        title: "Teamgeist ist bei REWE Süd Arbeitgeberversprechens",
        summary: "",
        items: []
      },
      {
        title: "Klarer Rahmen durch feste Schichtstruktur",
        summary: "",
        items: []
      }
    ]
  },
  verwaltung: {
    headline: "Die Zentrale wartet auf dich",
    description: "Du sorgst dafür, dass im Hintergrund alles funktioniert. Buchhaltung, Personal, Einkauf – strukturierte Abläufe, klares Team, verlässliche Arbeitszeiten.",
    aspects: [
      {
        title: "Dein Job ist Organisation und Umsetzung",
        summary: "",
        items: []
      },
      {
        title: "Rollen, die sich ergänzen – Sachbearbeitung, Assistenz, Referat und Teamleitung",
        summary: "",
        items: []
      },
      {
        title: "Weiterkommen ist vorgesehen: Coaching, Fortbildungen und Aufstiegsmöglichkeiten",
        summary: "",
        items: []
      }
    ]
  },
  frischetheke: {
    headline: "Die Frischetheke wartet auf dich",
    description: "Du bist Spezialist:in für Frische. An der Theke berätst du Kunden, präsentierst Waren ansprechend und sorgst für Qualität.",
    aspects: [
      {
        title: "Du bist Spezialist:in für Frischeprodukte",
        summary: "",
        items: []
      },
      {
        title: "Kundenberatung und Warenpräsentation stehen im Mittelpunkt",
        summary: "",
        items: []
      },
      {
        title: "Du arbeitest mit hochwertigen Produkten und sorgst für Qualität",
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
            REWE ruft. Welches Team darf's sein?
          </h2>
          <p className="path-selector-subtitle">
            Markt, Frischetheke, Logistik oder Zentrale.
          </p>
        </div>

        {/* Feature297 Cards - Shadcn Style */}
        <div className="path-selector-cards">
          <Feature297
            items={[
              {
                id: 'markt',
                title: 'Komm in den Markt',
                imageSrc: '/KommInDenMarkt.jpg',
                imageAlt: imageAltTexts.markt,
              },
              {
                id: 'frischetheke',
                title: 'Komm an die Frischetheke',
                imageSrc: '/KommAnDieFrischetheke.jpg',
                imageAlt: 'REWE Frischetheke - Frische Produkte und Beratung',
              },
              {
                id: 'logistik',
                title: 'Komm in die Logistik',
                imageSrc: '/MarktLogistikVerwaltgung/Logistik.jpg',
                imageAlt: imageAltTexts.logistik,
              },
              {
                id: 'verwaltung',
                title: 'Komm in die Zentrale',
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

        {/* Praktika Section */}
        <Feature253
          title="Unsere Praktika:"
          subtitle="Praktika für Schülerinnen"
          description="Ein Praktikum bei REWE ist dein perfekter Einblick in die Jobwelt. Auch wenn du noch nicht weißt, wo dein Weg nach dem Schulabschluss hinführt: hier kannst du reinschnuppern. Bewirb dich einfach im Markt um die Ecke."
          ctaText="Schreib uns!"
          onCtaClick={() => {
            // Hier kann später eine Funktion für den CTA eingefügt werden
            console.log('Schreib uns! clicked')
          }}
        />
      </div>
    </section>
  )
}

export default PathSelector

