import './HeroStart.css'

const HeroStart = () => {
  const handleScrollCue = () => {
    const target = document.getElementById('traum')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Hero Section - Silent Poster */}
      <section className="hero-start" role="banner">
        <div className="hero-start-background">
          <img 
            src="/hero-chancen.png" 
            alt="" 
            className="hero-start-image"
            aria-hidden="true"
          />
          <div className="hero-start-overlay"></div>
        </div>

        <div className="hero-start-content">
          {/* Optional Eyebrow */}
          <div className="hero-start-eyebrow">
            <span>REWE Süd Karriere</span>
          </div>

          {/* Main Hero Text */}
          <div className="hero-start-text">
            <h1 className="hero-start-line1">Chancen erkennt man nicht. Man ergreift sie.</h1>
            <h2 className="hero-start-line2">Bei REWE.</h2>
          </div>

          {/* CTAs */}
          <div className="hero-start-ctas">
            <a 
              href="#bewerbungswege?weg=heute" 
              className="btn btn-primary btn-lg hero-cta-primary"
            >
              Heute loslegen
            </a>
            <a 
              href="#bewerbungswege?weg=plan" 
              className="btn btn-secondary btn-lg hero-cta-secondary"
            >
              Weiterkommen mit Plan
            </a>
          </div>

          {/* Scroll Cue */}
          <button
            className="hero-start-scroll-cue"
            onClick={handleScrollCue}
            aria-label="Zum nächsten Abschnitt scrollen"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </section>

      {/* Typographic Drop Section */}
      <section 
        className="hero-typographic-drop relative" 
        id="traum"
        aria-labelledby="traum-heading"
      >
        {/* Overlay for better text contrast */}
        <div className="hero-typographic-overlay" />

        <div className="container relative z-20">
          <div className="typographic-content">
            {/* Main Headline */}
            <h2 
              id="traum-heading"
              className="typographic-headline"
            >
              REWE deinen Traum
            </h2>

            {/* Subheading */}
            <p className="typographic-subheading">
              Viele Wege. Ein Arbeitgeber.
            </p>

            {/* Supporting Line */}
            <p className="typographic-supporting">
              Mehr als ein Supermarkt – eine Chance für dein Leben.
            </p>

            {/* CTA Row */}
            <div className="typographic-ctas">
              <a 
                href="#bewerbung" 
                className="btn btn-primary btn-lg"
                aria-label="In 60 Sekunden bewerben - Zur Bewerbung"
              >
                In 60 Sekunden bewerben
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroStart

