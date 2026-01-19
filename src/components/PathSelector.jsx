import { useState } from 'react'
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
    headline: "Markt und Frischetheke",
    description: "Du bist da, wo es passiert. Kunden beraten, Ware auffüllen, im Team zusammenarbeiten. Jeder Tag ist anders, aber die Struktur gibt dir Sicherheit.",
    aspects: [
      {
        title: "In den Marktrollen zählt am Ende vor allem, dass Kund:innen zufrieden sind.",
        summary: "",
        items: []
      },
      {
        title: "Zusammenarbeit auf Augenhöhe. Und wer Verantwortung übernimmt, bekommt eine passende Rolle",
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
    headline: "Du packst gerne an",
    description: "zusammen mit 1.211 Kollegen an zwei Standorten in Buttenheim und Eitting",
    aspects: [
      {
        title: "Kommissionierung, Wareneingang oder Warenausgang",
        summary: "",
        items: []
      },
      {
        title: "Teamgeist ist bei REWE Süd Teil des Arbeitgeberversprechens",
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
    headline: "Blick hinter die Kulissen",
    description: "Du sorgst dafür, dass im Hintergrund alles funktioniert. Buchhaltung, Personal, Einkauf – strukturierte Abläufe, klares Team, verlässliche Arbeitszeiten.",
    aspects: [
      {
        title: "Dein Job ist Organisation und Umsetzung",
        summary: "",
        items: []
      },
      {
        title: "Du arbeitest in Rollen, die sich ergänzen – Sachbearbeitung, Assistenz, Referat und Teamleitung",
        summary: "",
        items: []
      },
      {
        title: "Weiterkommen ist vorgesehen: Coaching, Fortbildungen und Aufstiegsmöglichkeiten",
        summary: "",
        items: []
      }
    ]
  }
}

const PathSelector = () => {
  const [activePath, setActivePath] = useState(null) // null = keine Auswahl, 'markt', 'logistik' oder 'verwaltung'
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const paths = ['markt', 'logistik', 'verwaltung']

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

  return (
    <section className="path-selector section" id="path-selector" aria-labelledby="path-heading">
      <div className="container">
        <div className="path-selector-header">
          <h2 id="path-heading" className="path-selector-title">
            Wo steigst du ein?
          </h2>
          <p className="path-selector-subtitle">
            Wähle deinen Bereich – und sieh sofort: Alltag, Teamgefühl, Planbarkeit, Entwicklung.
          </p>
        </div>

        {/* Feature297 Cards - Shadcn Style */}
        <div className="path-selector-cards">
          <Feature297
            items={[
              {
                id: 'markt',
                title: 'Ich will in den Vertrieb',
                imageSrc: '/MarktLogistikVerwaltgung/Markt.jpg',
                imageAlt: imageAltTexts.markt,
              },
              {
                id: 'logistik',
                title: 'Ich will in die Logistik',
                imageSrc: '/MarktLogistikVerwaltgung/Logistik.jpg',
                imageAlt: imageAltTexts.logistik,
              },
              {
                id: 'verwaltung',
                title: 'Ich will in die Verwaltung',
                imageSrc: '/MarktLogistikVerwaltgung/Verwaltung.jpg',
                imageAlt: imageAltTexts.verwaltung,
              },
            ]}
            activeItem={activePath}
            onItemClick={handlePathSelect}
          />
        </div>

        {/* Content-Bereich - wechselt je nach Auswahl */}
        {activePath && currentContent && (
          <div 
            id="path-content"
            className={`path-content ${isTransitioning ? 'path-content--transitioning' : ''}`}
            role="region"
            aria-live="polite"
            aria-labelledby={`path-cta-${activePath}`}
            aria-label={`Inhalte für ${activePath === 'markt' ? 'Vertrieb' : activePath === 'logistik' ? 'Logistik' : 'Verwaltung'}`}
          >
            {/* Feature217b für Content-Darstellung */}
            <Feature217b
              badge=""
              headline={currentContent?.headline}
              description={currentContent?.description}
              features={currentContent?.aspects.map((aspect, index) => ({
                ...aspect,
                icon: index === 0 ? Briefcase : index === 1 ? Users : Shield
              })) || []}
              backgroundImage={
                activePath === 'markt' 
                  ? '/QuerMarktLogistikVerwaltung/Markt.jpg'
                  : activePath === 'logistik'
                  ? '/QuerMarktLogistikVerwaltung/Logistik.jpg'
                  : '/QuerMarktLogistikVerwaltung/Verwaltung.jpg'
              }
            />

            {/* Karrierepfade-Jobs Ergänzung */}
            <CareerPathJobs activePath={activePath} />
          </div>
        )}
      </div>
    </section>
  )
}

export default PathSelector

