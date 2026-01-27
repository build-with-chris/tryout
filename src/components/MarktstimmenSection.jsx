import { useState, useMemo, useEffect } from 'react'
import { mockStories } from '../data/mockStories'
import StoryCard from './StoryCard'
import './MarktstimmenSection.css'

const MarktstimmenSection = () => {
  const [activeFilter, setActiveFilter] = useState('Alle')
  const [listenedStories, setListenedStories] = useState(new Set())
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const [visibleCount, setVisibleCount] = useState(3)

  const filters = [
    'Alle',
    'Azubi',
    'Quereinstieg',
    'Fachkraft',
    'Marktleiter'
  ]

  const filteredStories = useMemo(() => {
    let stories = []
    if (activeFilter === 'Alle') {
      stories = mockStories
    } else {
      stories = mockStories.filter(story => 
        story.segment === activeFilter || 
        story.tags.includes(activeFilter)
      )
    }
    return stories
  }, [activeFilter])

  const visibleStories = useMemo(() => {
    return filteredStories.slice(0, visibleCount)
  }, [filteredStories, visibleCount])

  const hasMore = visibleCount < filteredStories.length

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredStories.length))
  }

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(3)
  }, [activeFilter])

  const handleStoryPlay = (storyId) => {
    setCurrentlyPlaying(storyId)
  }

  const handleStoryPause = () => {
    setCurrentlyPlaying(null)
  }

  const handleStoryComplete = (storyId) => {
    setListenedStories(prev => new Set([...prev, storyId]))
    setCurrentlyPlaying(null)
  }

  const getRelatedStories = (currentStory) => {
    return mockStories
      .filter(s => 
        s.id !== currentStory.id && 
        (s.segment === currentStory.segment || 
         s.tags.some(tag => currentStory.tags.includes(tag)))
      )
      .slice(0, 2)
  }

  return (
    <section className="marktstimmen-section section" id="marktstimmen">
      <div className="container">
        <div className="marktstimmen-header">
          <h2 className="h2 text-center mb-md">Wann kommst du on Board?</h2>
          <p className="marktstimmen-subheadline text-center mb-lg">
            Echte Geschichten von echten Menschen.
          </p>
          <p className="marktstimmen-helper text-center mb-xl">
            15–25 Sekunden. Einfach reinhören.
          </p>
        </div>

        {/* Filters */}
        <div className="marktstimmen-filters" role="tablist" aria-label="Stories filtern">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-chip ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              role="tab"
              aria-selected={activeFilter === filter}
              aria-controls={`filter-${filter}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Story Grid */}
        <div className="marktstimmen-grid" id="stories-grid">
          {visibleStories.map(story => (
            <StoryCard
              key={story.id}
              story={story}
              isPlaying={currentlyPlaying === story.id}
              hasListened={listenedStories.has(story.id)}
              onPlay={() => handleStoryPlay(story.id)}
              onPause={handleStoryPause}
              onComplete={() => handleStoryComplete(story.id)}
              relatedStories={getRelatedStories(story)}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="marktstimmen-load-more">
            <button
              className="btn btn-secondary"
              onClick={handleLoadMore}
              aria-label="Weitere Stories anzeigen"
            >
              Mehr anzeigen
            </button>
            <span className="marktstimmen-count text-small">
              {visibleCount} von {filteredStories.length} Stories
            </span>
          </div>
        )}

        {filteredStories.length === 0 && (
          <div className="marktstimmen-empty">
            <p>Keine Stories gefunden. Bitte wähle einen anderen Filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default MarktstimmenSection

