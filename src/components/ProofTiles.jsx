import { useState, useEffect } from 'react'
import './ProofTiles.css'

const ProofTiles = ({ story, relatedStories = [] }) => {
  const [showRelated, setShowRelated] = useState(false)

  useEffect(() => {
    // Show related stories after a short delay
    const timer = setTimeout(() => {
      setShowRelated(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="proof-tiles-container">
      <div className="proof-tiles">
        <div className="proof-tile">
          <div className="proof-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="proof-content">
            <strong className="proof-label">Start bis Einstieg</strong>
            <p className="proof-value">{story.proof.timeToStart}</p>
          </div>
        </div>

        <div className="proof-tile">
          <div className="proof-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div className="proof-content">
            <strong className="proof-label">Training</strong>
            <p className="proof-value">{story.proof.training}</p>
          </div>
        </div>

        <div className="proof-tile">
          <div className="proof-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
          <div className="proof-content">
            <strong className="proof-label">Nächster Schritt</strong>
            <p className="proof-value">{story.proof.nextStep}</p>
          </div>
        </div>
      </div>

      <div className="proof-ctas">
        <a 
          href="#bewerbung" 
          className={`btn ${story.segment === 'Weiterkommen mit Plan' ? 'btn-secondary' : 'btn-primary'} btn-lg`}
        >
          {story.ctas.primary}
        </a>
        <a 
          href={story.segment === 'Weiterkommen mit Plan' ? '#kontakt' : 'https://wa.me'} 
          className={`btn ${story.segment === 'Weiterkommen mit Plan' ? 'btn-primary' : 'btn-secondary'} btn-lg`}
        >
          {story.ctas.secondary}
        </a>
      </div>

      {showRelated && relatedStories.length > 0 && (
        <div className="related-stories">
          <p className="related-stories-label text-small">Weitere Geschichten für dich:</p>
          <div className="related-stories-grid">
            {relatedStories.map(related => (
              <a
                key={related.id}
                href={`#story-${related.id}`}
                className="related-story-mini"
                onClick={(e) => {
                  e.preventDefault()
                  // Scroll to story
                  const element = document.querySelector(`[data-story-id="${related.id}"]`)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    element.focus()
                  }
                }}
              >
                <span className="related-story-name">{related.firstName}</span>
                <span className="related-story-role text-small">{related.roleNow}</span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProofTiles

