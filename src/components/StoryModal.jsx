import { useEffect } from 'react'
import './StoryModal.css'

const StoryModal = ({ story, onClose }) => {
  const categoryColors = {
    'Quereinstieg': 'info',
    'Fachkraft': 'success',
    'Leitung': 'red',
    'Ausbildung': 'warning'
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="story-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
    >
      <div className="story-modal">
        <button
          className="story-modal-close"
          onClick={onClose}
          aria-label="Modal schließen"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="story-modal-content">
          {/* Header with Image and Badge */}
          <div className="story-modal-header">
            <div className="story-modal-image">
              <img src={story.image} alt={story.name} />
            </div>
            <div className="story-modal-header-info">
              <span className={`badge badge-${categoryColors[story.category] || 'neutral'}`}>
                {story.category}
              </span>
              <h2 id="story-modal-title" className="h2">{story.name}</h2>
              <p className="text-large" style={{ color: 'var(--color-neutral-600)' }}>
                {story.role}
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="story-modal-quote">
            <div className="story-quote-icon-large">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>
            <p className="story-modal-quote-text">{story.quote}</p>
          </div>

          {/* Video Section */}
          <div className="story-modal-video">
            <video
              controls
              poster={story.image}
              aria-label={`Video von ${story.name}`}
            >
              <source src={story.video} type="video/mp4" />
              Dein Browser unterstützt das Video-Element nicht.
            </video>
          </div>

          {/* Learnings Section */}
          <div className="story-modal-learnings">
            <h3 className="h3 mb-md">Was {story.name} kann, kannst du auch.</h3>
            <p className="text-small mb-md" style={{ color: 'var(--color-neutral-600)', fontStyle: 'italic' }}>
              REWE glaubt an dich – auch wenn du es noch nicht tust.
            </p>
            <ul className="story-learnings-list">
              {story.learnings.map((learning, index) => (
                <li key={index} className="story-learning-item">
                  <span className="story-learning-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bio Section */}
          <div className="story-modal-bio">
            <h3 className="h4 mb-sm">Über {story.name.split(' ')[0]}</h3>
            <p style={{ color: 'var(--color-neutral-600)', lineHeight: 'var(--line-height-relaxed)' }}>
              {story.bio}
            </p>
          </div>

          {/* CTA */}
          <div className="story-modal-cta">
            <a href="#bewerbung" className="btn btn-primary btn-lg" onClick={onClose}>
              In 60 Sekunden bewerben
            </a>
            <button className="btn btn-ghost btn-lg" onClick={onClose}>
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryModal

