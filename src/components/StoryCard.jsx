import { useState, useEffect, useRef } from 'react'
import AudioPlayer from './AudioPlayer'
import ProofTiles from './ProofTiles'
import './StoryCard.css'

const StoryCard = ({ 
  story, 
  isPlaying, 
  hasListened, 
  onPlay, 
  onPause, 
  onComplete,
  relatedStories = []
}) => {
  const [showProof, setShowProof] = useState(false)
  const [progress, setProgress] = useState(0)
  const cardRef = useRef(null)

  useEffect(() => {
    if (!isPlaying) {
      return
    }
    
    // Simulate audio progress
    const startTime = Date.now()
    const duration = story.audioDuration * 1000 // Convert to ms
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      // Show proof at 80% or when complete
      if (newProgress >= 80 && !showProof) {
        setShowProof(true)
      }

      // Complete at 100%
      if (newProgress >= 100) {
        clearInterval(interval)
        setProgress(100)
        setShowProof(true)
        onComplete()
      }
    }, 100)

    return () => clearInterval(interval)
  }, [isPlaying, story.audioDuration, showProof, onComplete])

  useEffect(() => {
    if (hasListened && !showProof) {
      setShowProof(true)
    }
  }, [hasListened, showProof])

  const handlePlayPause = () => {
    if (isPlaying) {
      onPause()
    } else {
      onPlay()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handlePlayPause()
    }
  }

  return (
    <article 
      className={`story-card ${hasListened ? 'listened' : ''} ${showProof ? 'proof-visible' : ''}`}
      ref={cardRef}
      data-story-id={story.id}
      id={`story-${story.id}`}
    >
      <div className="story-card-header">
        <p className="story-motif">
          Was {story.firstName} kann, kannst du auch.
        </p>
        {hasListened && (
          <span className="listened-badge" aria-label="Gehört">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Gehört
          </span>
        )}
      </div>

      <div className="story-card-quote">
        <p>"{story.quote}"</p>
      </div>

      <div className="story-card-meta">
        <span className="meta-chip">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {story.location}
        </span>
        <span className="meta-chip">
          {story.roleNow}
        </span>
      </div>

      <AudioPlayer
        story={story}
        isPlaying={isPlaying}
        progress={progress}
        onPlayPause={handlePlayPause}
        onKeyDown={handleKeyDown}
      />

      {showProof && (
        <ProofTiles
          story={story}
          relatedStories={relatedStories}
        />
      )}
    </article>
  )
}

export default StoryCard

