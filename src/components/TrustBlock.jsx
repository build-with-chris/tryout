import './TrustBlock.css'

const TrustBlock = () => {
  const trustItems = [
    {
      icon: '🎓',
      title: 'Ausgezeichnete Ausbildung',
      description: 'REWE wurde mehrfach für die Qualität der Ausbildung ausgezeichnet. Unsere Azubis schätzen die strukturierte Betreuung und die guten Übernahmechancen.',
      link: '#ausbildung',
      linkText: 'Mehr zur Ausbildung'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Familienfreundlich',
      description: 'Als familienfreundlicher Arbeitgeber unterstützen wir dich bei der Vereinbarkeit von Familie und Beruf – mit flexiblen Arbeitszeiten und individuellen Lösungen.',
      link: '#familie',
      linkText: 'Mehr zu Work-Life-Balance'
    },
    {
      icon: '🌈',
      title: 'Vielfalt & Respekt',
      description: 'Bei REWE sind alle willkommen. Wir schätzen Vielfalt und schaffen ein Arbeitsumfeld, in dem sich jeder respektiert und wertgeschätzt fühlt.',
      link: '#vielfalt',
      linkText: 'Mehr zu Vielfalt'
    }
  ]

  return (
    <section className="trust-block-section section" id="trust">
      <div className="container">
        <h2 className="h2 text-center mb-xl">Ausgezeichnete Arbeitgeberqualität</h2>
        <p className="text-center mb-xl" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)', color: 'var(--color-neutral-600)' }}>
          Unsere Auszeichnungen und Zertifizierungen zeigen: Bei REWE findest du mehr als einen Job – du findest deinen Traum.
        </p>

        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="card card-elevated trust-card">
              <div className="card-body">
                <div className="trust-icon">
                  <span>{item.icon}</span>
                </div>
                <h3 className="h4 mb-md">{item.title}</h3>
                <p className="mb-lg" style={{ color: 'var(--color-neutral-600)', lineHeight: 'var(--line-height-relaxed)' }}>
                  {item.description}
                </p>
                <a href={item.link} className="trust-link">
                  {item.linkText}
                  <span className="link-arrow">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBlock








