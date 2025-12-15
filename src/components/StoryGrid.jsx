import { useState } from 'react'
import StoryModal from './StoryModal'
import './StoryGrid.css'

const StoryGrid = ({ stories, onLoadMore, hasMore }) => {
  const [selectedStory, setSelectedStory] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleStoryClick = (story) => {
    setSelectedStory(story)
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedStory(null)
    document.body.style.overflow = 'unset'
  }

  const handleKeyDown = (e, story) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleStoryClick(story)
    }
  }

  const categories = ['Quereinstieg', 'Fachkraft', 'Leitung', 'Ausbildung']
  const categoryColors = {
    'Quereinstieg': 'info',
    'Fachkraft': 'success',
    'Leitung': 'red',
    'Ausbildung': 'warning'
  }

  return (
    <>
      <section className="story-grid-section section" id="stories">
        <div className="container">
          <div className="story-section-header">
            <h2 className="h2 text-center mb-md">Was Sarah kann, kannst du auch.</h2>
            <p className="story-section-subheadline text-center mb-lg">
              REWE glaubt an dich. Echte Menschen, echte Geschichten – lass dich inspirieren.
            </p>
            <p className="text-center mb-xl" style={{ maxWidth: '700px', margin: '0 auto var(--spacing-xl)', color: 'var(--color-neutral-600)', fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)' }}>
              Jeder dieser Menschen hatte Zweifel. Jeder dachte: "Das schaffe ich nicht." 
              Heute zeigen sie dir: Du schaffst es auch. REWE glaubt an dich – auch wenn du es noch nicht tust.
            </p>
          </div>

          <div className="story-grid">
            {stories.map((story) => (
              <div
                key={story.id}
                className="story-card-interactive"
                onClick={() => handleStoryClick(story)}
                onKeyDown={(e) => handleKeyDown(e, story)}
                role="button"
                tabIndex={0}
                aria-label={`Story von ${story.name} öffnen`}
              >
                <div className="story-card-image">
                  <img src={story.image} alt={story.name} />
                  <div className="story-card-overlay">
                    <span className="story-play-icon">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </span>
                  </div>
                  <div className="story-card-badge">
                    <span className="story-name-badge">{story.name}</span>
                  </div>
                </div>
                <div className="story-card-content">
                  <span className={`badge badge-${categoryColors[story.category] || 'neutral'}`}>
                    {story.category}
                  </span>
                  <h3 className="h4 mb-sm">{story.name}</h3>
                  <p className="text-small mb-md" style={{ color: 'var(--color-neutral-600)' }}>
                    {story.role}
                  </p>
                  <p className="story-card-quote-preview text-small">
                    "{story.quote.substring(0, 120)}..."
                  </p>
                  <div className="story-card-cta">
                    <span className="text-small" style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
                      Ihre Geschichte ansehen →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="story-load-more">
              <button
                className="btn btn-secondary"
                onClick={onLoadMore}
                aria-label="Weitere Storys laden"
              >
                Mehr davon
              </button>
            </div>
          )}
        </div>
      </section>

      {isModalOpen && selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default StoryGrid
