import { useState, useEffect, useRef } from 'react'
import { worldData } from '../data/worldData'
import WorldToggle from './WorldToggle'
import InfoCard from './InfoCard'
import CTAGroup from './CTAGroup'
import './KarriereWeltenSection.css'

const KarriereWeltenSection = () => {
  const [activeWorld, setActiveWorld] = useState('markt')
  const [expandedCards, setExpandedCards] = useState(new Set())
  const [isStickyVisible, setIsStickyVisible] = useState(false)
  const sectionRef = useRef(null)

  // Load from URL or localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlWorld = params.get('welt')
    const storedWorld = localStorage.getItem('karriereWelt')
    
    if (urlWorld && (urlWorld === 'markt' || urlWorld === 'logistik')) {
      setActiveWorld(urlWorld)
    } else if (storedWorld && (storedWorld === 'markt' || storedWorld === 'logistik')) {
      setActiveWorld(storedWorld)
    }
  }, [])

  // Persist to URL and localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    params.set('welt', activeWorld)
    window.history.replaceState({}, '', `?${params.toString()}`)
    localStorage.setItem('karriereWelt', activeWorld)
  }, [activeWorld])

  // IntersectionObserver for sticky CTA
  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsStickyVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const handleToggle = (world) => {
    setActiveWorld(world)
    // Analytics placeholder
    console.log('World toggled:', { world, timestamp: new Date().toISOString() })
  }

  const handleCardToggle = (cardId, isExpanded) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (isExpanded) {
        newSet.add(cardId)
      } else {
        newSet.delete(cardId)
      }
      return newSet
    })
    // Analytics placeholder
    console.log('Card toggled:', { cardId, isExpanded, timestamp: new Date().toISOString() })
  }

  const handleCardExpand = (cardId) => {
    // Analytics placeholder
    console.log('Card expanded:', { cardId, timestamp: new Date().toISOString() })
  }

  const handleCTAClick = (type, label, world) => {
    // Analytics placeholder
    console.log('CTA clicked:', { type, label, world, timestamp: new Date().toISOString() })
  }

  const currentWorld = worldData[activeWorld]

  return (
    <>
      <section 
        className="karriere-welten-section section" 
        id="karrierewelten"
        ref={sectionRef}
      >
        <div className="container">
          <div className="karriere-welten-header">
            <h2 className="h2 text-center mb-md">Markt oder Logistik?</h2>
            <p className="karriere-welten-subheadline text-center mb-lg">
              Zwei Wege. Ein Ziel: REWE deinen Traum.
            </p>
            <p className="karriere-welten-helper text-center mb-xl">
              Wähl eine Welt – und sieh in 20 Sekunden, wie dein Einstieg aussieht.
            </p>
          </div>

          <WorldToggle activeWorld={activeWorld} onToggle={handleToggle} />

          <div
            id={`${activeWorld}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeWorld}-tab`}
            className="world-panel"
          >
            <div className="info-cards-grid">
              {currentWorld.cards.map(card => (
                <InfoCard
                  key={card.id}
                  card={card}
                  isExpanded={expandedCards.has(card.id)}
                  onToggle={handleCardToggle}
                  onExpand={handleCardExpand}
                />
              ))}
            </div>

            <CTAGroup
              ctas={currentWorld.ctas}
              world={activeWorld}
              onCTAClick={handleCTAClick}
            />
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar (Mobile only) */}
      {isStickyVisible && (
        <div className="karriere-welten-sticky-cta">
          <div className="sticky-cta-content">
            <a
              href="#bewerbung"
              className="btn btn-primary"
              onClick={() => handleCTAClick('primary', currentWorld.ctas.primary, activeWorld)}
            >
              {currentWorld.ctas.primary}
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default KarriereWeltenSection

