import { useState } from 'react'
import './ZielgruppenTabs.css'

const ZielgruppenTabs = () => {
  const [activeTab, setActiveTab] = useState('fast')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    // Tracking Event
    console.log('Tab changed:', { tab, timestamp: new Date().toISOString() })
  }

  const handleCTAClick = (ctaType, tab) => {
    // Tracking Event
    console.log('CTA clicked:', { 
      ctaType, 
      tab, 
      timestamp: new Date().toISOString() 
    })
  }

  const fastLaneData = {
    headline: 'Karrierestapler – einfach starten',
    subheadline: 'Ich will einfach arbeiten',
    description: 'Du suchst einen Job, der passt? Ohne komplizierte Bewerbungsprozesse, ohne lange Wartezeiten. Bei REWE kannst du schnell starten und direkt durchstarten.',
    benefits: [
      'Bewerbung in 60 Sekunden – wirklich!',
      'Schnelle Rückmeldung innerhalb von 24 Stunden',
      'Flexible Schichtwahl nach deinen Wünschen',
      'Direkter Einstieg ohne lange Wartezeiten',
      'Unkompliziert und transparent'
    ],
    ctas: [
      {
        type: 'whatsapp',
        label: 'Per WhatsApp starten',
        href: 'https://wa.me',
        primary: true
      },
      {
        type: 'one-click',
        label: '1-Click bewerben',
        href: '#bewerbung',
        primary: false
      },
      {
        type: 'shift',
        label: 'Schicht wählen',
        href: '#schichten',
        primary: false
      }
    ],
    image: '/img/placeholder-fast-lane.jpg',
    azubiShortcut: {
      label: 'Oder direkt zur Ausbildung',
      href: '#ausbildung',
      description: 'Starte deine Karriere mit einer Ausbildung bei REWE'
    }
  }

  const deepLaneData = {
    headline: 'Karriereleiter – höher hinaus',
    subheadline: 'Ich will mehr erreichen',
    description: 'Du hast Ziele, Ambitionen und willst dich weiterentwickeln? Bei REWE findest du nicht nur einen Job, sondern einen echten Karriereweg mit Perspektiven und Entwicklungsmöglichkeiten.',
    benefits: [
      'Individuelle Karriereplanung mit deinem Ansprechpartner',
      'Vielfältige Weiterbildungs- und Entwicklungsprogramme',
      'Führungskräfteentwicklung und Mentoring',
      'Langfristige Perspektiven und Aufstiegsmöglichkeiten',
      'Maßgeschneiderte Lösungen für deine Ziele'
    ],
    ctas: [
      {
        type: 'career-path',
        label: 'Karrierepfad ansehen',
        href: '#karrierepfad',
        primary: true
      },
      {
        type: 'profile',
        label: 'Profil einreichen',
        href: '#profil',
        primary: false
      },
      {
        type: 'meet',
        label: 'Unverbindlich kennenlernen',
        href: '#kontakt',
        primary: false
      }
    ],
    image: '/img/placeholder-deep-lane.jpg'
  }

  return (
    <section className="zielgruppen-tabs-section section" id="waehle-deinen-weg">
      <div className="container">
        <h2 className="h2 text-center mb-xl">Wähle deinen Weg</h2>
        <p className="text-center mb-xl" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)', color: 'var(--color-neutral-600)' }}>
          Zwei Wege, ein Ziel – finde den Einstieg, der zu dir passt
        </p>

        {/* Tab Navigation */}
        <div className="zielgruppen-tabs-nav" role="tablist" aria-label="Weg auswählen">
          <button
            className={`zielgruppen-tab ${activeTab === 'fast' ? 'active' : ''}`}
            onClick={() => handleTabChange('fast')}
            role="tab"
            aria-selected={activeTab === 'fast'}
            aria-controls="fast-panel"
            id="fast-tab"
          >
            <span className="tab-icon">⚡</span>
            <span className="tab-label">Ich will einfach arbeiten</span>
            <span className="tab-badge">Fast-Lane</span>
          </button>
          <button
            className={`zielgruppen-tab ${activeTab === 'deep' ? 'active' : ''}`}
            onClick={() => handleTabChange('deep')}
            role="tab"
            aria-selected={activeTab === 'deep'}
            aria-controls="deep-panel"
            id="deep-tab"
          >
            <span className="tab-icon">🚀</span>
            <span className="tab-label">Ich will mehr erreichen</span>
            <span className="tab-badge">Deep-Lane</span>
          </button>
        </div>

        {/* Tab Panels */}
        <div className="zielgruppen-tabs-content">
          {/* Fast-Lane Panel */}
          <div
            id="fast-panel"
            role="tabpanel"
            aria-labelledby="fast-tab"
            className={`zielgruppen-panel ${activeTab === 'fast' ? 'active' : ''}`}
          >
            <div className="panel-grid">
              <div className="panel-content">
                <h3 className="h3 mb-sm">{fastLaneData.headline}</h3>
                <p className="text-large mb-lg" style={{ color: 'var(--color-neutral-600)' }}>
                  {fastLaneData.description}
                </p>

                <div className="benefits-list">
                  <h4 className="h4 mb-md">Deine Vorteile:</h4>
                  <ul>
                    {fastLaneData.benefits.map((benefit, index) => (
                      <li key={index} className="benefit-item">
                        <span className="benefit-icon">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="panel-ctas">
                  {fastLaneData.ctas.map((cta, index) => (
                    <a
                      key={index}
                      href={cta.href}
                      className={`btn ${cta.primary ? 'btn-primary' : 'btn-secondary'} ${index === 0 ? 'btn-lg' : ''}`}
                      onClick={() => handleCTAClick(cta.type, 'fast')}
                    >
                      {cta.label}
                    </a>
                  ))}
                </div>

                {/* Azubi Shortcut */}
                <div className="azubi-shortcut">
                  <div className="azubi-shortcut-content">
                    <span className="azubi-icon">🎓</span>
                    <div>
                      <strong>{fastLaneData.azubiShortcut.label}</strong>
                      <p className="text-small" style={{ color: 'var(--color-neutral-600)', marginTop: 'var(--spacing-xs)' }}>
                        {fastLaneData.azubiShortcut.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href={fastLaneData.azubiShortcut.href}
                    className="btn btn-ghost btn-sm"
                    onClick={() => handleCTAClick('azubi-shortcut', 'fast')}
                  >
                    Zur Ausbildung
                  </a>
                </div>
              </div>

              <div className="panel-image">
                <img src={fastLaneData.image} alt={fastLaneData.subheadline} />
              </div>
            </div>
          </div>

          {/* Deep-Lane Panel */}
          <div
            id="deep-panel"
            role="tabpanel"
            aria-labelledby="deep-tab"
            className={`zielgruppen-panel ${activeTab === 'deep' ? 'active' : ''}`}
          >
            <div className="panel-grid">
              <div className="panel-content">
                <h3 className="h3 mb-sm">{deepLaneData.headline}</h3>
                <p className="text-large mb-lg" style={{ color: 'var(--color-neutral-600)' }}>
                  {deepLaneData.description}
                </p>

                <div className="benefits-list">
                  <h4 className="h4 mb-md">Deine Vorteile:</h4>
                  <ul>
                    {deepLaneData.benefits.map((benefit, index) => (
                      <li key={index} className="benefit-item">
                        <span className="benefit-icon">
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="panel-ctas">
                  {deepLaneData.ctas.map((cta, index) => (
                    <a
                      key={index}
                      href={cta.href}
                      className={`btn ${cta.primary ? 'btn-primary' : 'btn-secondary'} ${index === 0 ? 'btn-lg' : ''}`}
                      onClick={() => handleCTAClick(cta.type, 'deep')}
                    >
                      {cta.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="panel-image">
                <img src={deepLaneData.image} alt={deepLaneData.subheadline} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZielgruppenTabs








