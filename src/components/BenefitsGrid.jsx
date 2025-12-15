import './BenefitsGrid.css'

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: '🛡️',
      title: 'Sicher',
      description: 'Faire Arbeitsbedingungen, unbefristete Verträge und ein verlässlicher Arbeitgeber an deiner Seite.',
      highlights: ['Unbefristete Verträge', 'Faire Bezahlung', 'Verlässlicher Arbeitgeber']
    },
    {
      icon: '⚖️',
      title: 'Fair',
      description: 'Gleiche Chancen für alle, transparente Prozesse und ein respektvoller Umgang auf Augenhöhe.',
      highlights: ['Gleiche Chancen', 'Transparente Prozesse', 'Respektvoller Umgang']
    },
    {
      icon: '🚀',
      title: 'Mit Zukunft',
      description: 'Langfristige Perspektiven, vielfältige Entwicklungsmöglichkeiten und Karrierewege, die zu dir passen.',
      highlights: ['Langfristige Perspektiven', 'Vielfältige Entwicklung', 'Individuelle Karrierewege']
    },
    {
      icon: '👥',
      title: 'Gemeinschaft',
      description: 'Ein starkes Team, das zusammenarbeitet, füreinander da ist und gemeinsam wächst.',
      highlights: ['Starkes Team', 'Zusammenarbeit', 'Gemeinsames Wachstum']
    },
    {
      icon: '⚡',
      title: 'Flexibel',
      description: 'Work-Life-Balance, die zu deinem Leben passt – ob Vollzeit, Teilzeit oder Minijob.',
      highlights: ['Work-Life-Balance', 'Flexible Arbeitszeiten', 'Individuelle Lösungen']
    },
    {
      icon: '💡',
      title: 'Perspektiven',
      description: 'Von der Ausbildung bis zur Führungsposition – bei REWE findest du deinen Weg.',
      highlights: ['Ausbildung bis Führung', 'Vielfältige Wege', 'Individuelle Förderung']
    }
  ]

  return (
    <section className="benefits-grid-section section" id="benefits">
      <div className="container">
        <h2 className="h2 text-center mb-xl">Sicher. Fair. Mit Zukunft.</h2>
        <p className="text-center mb-xl" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)', color: 'var(--color-neutral-600)' }}>
          Deine Werte sind unsere Werte – bei REWE findest du mehr als nur einen Job
        </p>

        <div className="benefits-grid-cards">
          {benefits.map((benefit, index) => (
            <div key={index} className="card card-elevated benefit-card">
              <div className="card-body">
                <div className="benefit-icon-large">
                  <span>{benefit.icon}</span>
                </div>
                <h3 className="h4 mb-md">{benefit.title}</h3>
                <p className="mb-lg" style={{ color: 'var(--color-neutral-600)', lineHeight: 'var(--line-height-relaxed)' }}>
                  {benefit.description}
                </p>
                <ul className="benefit-highlights">
                  {benefit.highlights.map((highlight, i) => (
                    <li key={i} className="highlight-item">
                      <span className="highlight-icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsGrid

