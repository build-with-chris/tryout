import { useState } from 'react'
import './styles.css'
import HeroStart from './components/HeroStart'
import BewerbungswegeSlider from './components/BewerbungswegeSlider'
import JobHighlights from './components/JobHighlights'
import MarktstimmenSection from './components/MarktstimmenSection'
import KarriereWeltenSection from './components/KarriereWeltenSection'
import CheckAgent from './components/CheckAgent'
import ApplicationFlow from './components/ApplicationFlow'
import ValuesLadderSection from './components/ValuesLadderSection'
import TrustBlock from './components/TrustBlock'
import FAQAccordion from './components/FAQAccordion'
import ContactCTA from './components/ContactCTA'
import './components/BewerbungswegeLayout.css'

// Icon Components (Simple SVG placeholders)
const IconChevronDown = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

const IconCheck = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

const IconTruck = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const IconFileText = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
)

const IconShoppingCart = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const IconCode = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const IconHeart = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const IconClock = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const IconUsers = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const IconZap = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

const IconMessageCircle = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const IconStar = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const IconAward = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
)

const IconPlay = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
)

const IconQuote = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
)

const IconMail = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const IconPhone = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

// Accordion Component
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={index} className="accordion-item">
            <button
              className="accordion-trigger"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}
            >
              <span>{item.title}</span>
              <span className="accordion-trigger-icon icon">
                <IconChevronDown />
              </span>
            </button>
            <div
              id={`accordion-content-${index}`}
              className="accordion-content"
              aria-hidden={!isOpen}
            >
              <div className="accordion-content-inner">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Process Tabs Component
const ProcessTabs = () => {
  const [activeTab, setActiveTab] = useState('fast')

  return (
    <div>
      <div className="process-tabs">
        <button
          className={`process-tab ${activeTab === 'fast' ? 'active' : ''}`}
          onClick={() => setActiveTab('fast')}
        >
          Heute loslegen
        </button>
        <button
          className={`process-tab ${activeTab === 'deep' ? 'active' : ''}`}
          onClick={() => setActiveTab('deep')}
        >
          Weiterkommen mit Plan
        </button>
      </div>

      <div className={`process-tab-content ${activeTab === 'fast' ? 'active' : ''}`}>
        <div className="steps">
          <ol className="steps-list">
            <li className="step-item">
              <div className="step-number">1</div>
              <h3 className="step-title">Profil erstellen</h3>
              <p className="step-description">
                In 60 Sekunden dein Profil anlegen und grundlegende Informationen hinterlegen.
              </p>
            </li>
            <li className="step-item">
              <div className="step-number">2</div>
              <h3 className="step-title">Bewerbung absenden</h3>
              <p className="step-description">
                Mit einem Klick deine Bewerbung für passende Stellen senden.
              </p>
            </li>
            <li className="step-item">
              <div className="step-number">3</div>
              <h3 className="step-title">Schnelle Rückmeldung</h3>
              <p className="step-description">
                Innerhalb von 24 Stunden erhältst du eine erste Rückmeldung von uns.
              </p>
            </li>
            <li className="step-item">
              <div className="step-number">4</div>
              <h3 className="step-title">Start bei REWE</h3>
              <p className="step-description">
                Nach erfolgreichem Matching startest du direkt in deinem neuen Job.
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div className={`process-tab-content ${activeTab === 'deep' ? 'active' : ''}`}>
        <div className="steps">
          <ol className="steps-list">
            <li className="step-item">
              <div className="step-number">1</div>
              <h3 className="step-title">Ausführliches Profil</h3>
              <p className="step-description">
                Detaillierte Angaben zu deiner Erfahrung, Qualifikationen und Wünschen.
              </p>
            </li>
            <li className="step-item">
              <div className="step-number">2</div>
              <h3 className="step-title">Persönliches Gespräch</h3>
              <p className="step-description">
                Wir lernen uns in einem ausführlichen Gespräch kennen.
              </p>
            </li>
            <li className="step-item">
              <div className="step-number">3</div>
              <h3 className="step-title">Individuelle Beratung</h3>
              <p className="step-description">
                Gemeinsam finden wir den perfekten Karrierepfad für dich.
              </p>
            </li>
            <li className="step-item">
              <div className="step-number">4</div>
              <h3 className="step-title">Maßgeschneiderte Lösung</h3>
              <p className="step-description">
                Dein individueller Einstieg bei REWE, genau wie du es dir vorstellst.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

function App() {
  // Initialize activePath from URL or localStorage
  const getInitialPath = () => {
    const params = new URLSearchParams(window.location.search)
    const urlPath = params.get('weg')
    const storedPath = localStorage.getItem('bewerbungsweg')
    
    if (urlPath && (urlPath === 'heute' || urlPath === 'plan')) {
      return urlPath
    } else if (storedPath && (storedPath === 'heute' || storedPath === 'plan')) {
      return storedPath
    }
    return 'heute'
  }

  const [activePath, setActivePath] = useState(getInitialPath)

  const careerAreas = [
    {
      icon: <IconBriefcase />,
      title: 'Markt',
      description: 'Verkauf, Kasse, Kundenberatung – direkt am Kunden.'
    },
    {
      icon: <IconTruck />,
      title: 'Logistik',
      description: 'Warenannahme, Kommissionierung, Transport – hinter den Kulissen.'
    },
    {
      icon: <IconFileText />,
      title: 'Verwaltung',
      description: 'Buchhaltung, Personal, Einkauf – die Organisation im Hintergrund.'
    },
    {
      icon: <IconShoppingCart />,
      title: 'Einkauf',
      description: 'Sortimentsgestaltung, Verhandlungen, Marktanalyse.'
    },
    {
      icon: <IconCode />,
      title: 'IT',
      description: 'Entwicklung, Support, Digitalisierung – die Zukunft gestalten.'
    }
  ]

  const awards = [
    {
      title: 'Top Arbeitgeber 2024',
      organization: 'Focus Business',
      icon: <IconAward />
    },
    {
      title: 'Ausgezeichnete Ausbildung',
      organization: 'IHK',
      icon: <IconAward />
    },
    {
      title: 'Familienfreundlicher Betrieb',
      organization: 'audit berufundfamilie',
      icon: <IconAward />
    }
  ]

  const faqItems = [
    {
      title: 'Wie schnell kann ich starten?',
      content: 'Mit "Heute loslegen" kannst du bereits in 60 Sekunden deine Bewerbung absenden und innerhalb von 24 Stunden eine Rückmeldung erhalten. Der tatsächliche Starttermin hängt von der Position und deiner Verfügbarkeit ab.'
    },
    {
      title: 'Welche Qualifikationen brauche ich?',
      content: 'Das hängt von der Position ab. Für viele Einstiegspositionen im Markt oder in der Logistik sind keine speziellen Vorkenntnisse erforderlich. Wir bieten umfassende Einarbeitung und Schulungen. Für Fachpositionen in IT, Einkauf oder Verwaltung sind entsprechende Qualifikationen von Vorteil.'
    },
    {
      title: 'Gibt es Teilzeit-Möglichkeiten?',
      content: 'Ja, wir bieten vielfältige Arbeitszeitmodelle – von Vollzeit über Teilzeit bis hin zu Minijobs. Sprich uns einfach an, wir finden gemeinsam eine Lösung, die zu dir passt.'
    },
    {
      title: 'Wie läuft das Bewerbungsverfahren ab?',
      content: 'Du kannst zwischen zwei Wegen wählen: "Heute loslegen" für eine schnelle Bewerbung in 60 Sekunden oder "Weiterkommen mit Plan" für eine ausführliche Beratung und individuelle Betreuung. Beide Wege führen zu einem persönlichen Gespräch, bevor wir gemeinsam entscheiden.'
    },
    {
      title: 'Welche Entwicklungsmöglichkeiten gibt es?',
      content: 'REWE bietet vielfältige Karrierewege – von der Ausbildung über Weiterbildungen bis hin zu Führungspositionen. Wir unterstützen dich dabei, deine Ziele zu erreichen und dich kontinuierlich weiterzuentwickeln.'
    }
  ]

  return (
    <div className="app">
      {/* Hero Start - Clean Hero + Typographic Drop */}
      <HeroStart />

      {/* Marktstimmen Section */}
      <MarktstimmenSection />

      {/* Bewerbung in 4 Schritten */}
      <section className="section" id="bewerbung" style={{ backgroundColor: 'var(--color-neutral-100)' }}>
        <div className="container">
          <h2 className="h2 text-center mb-xl">Bewerbung in 4 Schritten</h2>
          <ProcessTabs />
        </div>
      </section>

      {/* Bewerbungswege + Job Highlights Section */}
      <section className="section bewerbungswege-with-jobs" id="bewerbungswege">
        <div className="container">
          <div className="bewerbungswege-layout">
            <div className="bewerbungswege-main">
              <BewerbungswegeSlider onPathChange={setActivePath} />
            </div>
            <div className="bewerbungswege-sidebar">
              <JobHighlights activePath={activePath} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Ladder Section */}
      <ValuesLadderSection />

      {/* Karriere Welten Section */}
      <KarriereWeltenSection />

      {/* Trust / Awards Section */}
      <section className="section" id="trust" style={{ backgroundColor: 'var(--color-neutral-100)' }}>
        <div className="container">
          <h2 className="h2 text-center mb-xl">Ausgezeichnete Arbeitgeberqualität</h2>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="award-item">
                <div className="award-icon icon">
                  {award.icon}
                </div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-org text-small" style={{ color: 'var(--color-neutral-600)' }}>
                  {award.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section" id="faq">
        <div className="container">
          <h2 className="h2 text-center mb-xl">Häufige Fragen</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer className="footer" id="kontakt">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="h4 mb-md">Kontakt</h3>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <span className="icon">
                    <IconPhone />
                  </span>
                  <a href="tel:+498001234567">0800 123 4567</a>
                </div>
                <div className="footer-contact-item">
                  <span className="icon">
                    <IconMail />
                  </span>
                  <a href="mailto:karriere@rewe-sued.de">karriere@rewe-sued.de</a>
                </div>
                <div className="footer-contact-item">
                  <span className="icon">
                    <IconMapPin />
                  </span>
                  <span>REWE Süd, München</span>
                </div>
              </div>
            </div>
            <div className="footer-section">
              <h3 className="h4 mb-md">Bewerbung</h3>
              <div className="footer-links">
                <a href="#bewerbung" className="btn btn-primary btn-full mb-sm">
                  In 60 Sekunden bewerben
                </a>
                <a href="https://wa.me" className="btn btn-secondary btn-full">
                  <span className="icon">
                    <IconMessageCircle />
                  </span>
                  Per WhatsApp starten
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3 className="h4 mb-md">Weitere Informationen</h3>
              <div className="footer-links">
                <a href="#karrierewelten">Karrierewelten</a>
                <a href="#werte">Unsere Werte</a>
                <a href="#faq">Häufige Fragen</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-small" style={{ color: 'var(--color-neutral-600)' }}>
              © 2024 REWE Süd. Alle Rechte vorbehalten.
            </p>
            <div className="footer-legal">
              <a href="#impressum" className="text-small">Impressum</a>
              <a href="#datenschutz" className="text-small">Datenschutz</a>
              <a href="#agb" className="text-small">AGB</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Bar (Mobile) */}
      <div className="cta-bar">
        <div className="cta-bar-content">
          <a href="#bewerbung" className="btn btn-primary">
            In 60 Sekunden bewerben
          </a>
          <a href="#kontakt" className="btn btn-secondary">
            <span className="icon">
              <IconMessageCircle />
            </span>
            Per WhatsApp starten
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
