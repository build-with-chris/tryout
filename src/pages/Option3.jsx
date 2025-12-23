import { useState } from 'react'
import './Option3.css'
import { Hero143 } from '@/components/hero143'
import { Feature313 } from '@/components/feature313'
import { worldData } from '@/data/worldData'
import InfoCard from '@/components/InfoCard'
import CTAGroup from '@/components/CTAGroup'
import { Services21 } from '@/components/services21'

const Option3 = () => {
  const [selectedArea, setSelectedArea] = useState(null)

  const handleAreaSelect = (area) => {
    setSelectedArea(area)
    // Scroll to content after selection
    setTimeout(() => {
      const contentSection = document.getElementById('area-content')
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const currentWorld = selectedArea ? worldData[selectedArea] : null

  return (
    <div className="option3-page">
      <Hero143 onAreaSelect={handleAreaSelect} />
      
      {selectedArea && currentWorld && (
        <div id="area-content" className="area-content">
          <Feature313 
            controlledCareer={selectedArea}
            onCareerChange={setSelectedArea}
          />
          
          <section className="section" style={{ backgroundColor: 'var(--color-neutral-100)' }}>
            <div className="container">
              <h2 className="h2 text-center mb-xl">
                So startest du bei REWE {currentWorld.name}
              </h2>
              <div className="info-cards-grid">
                {currentWorld.cards.map(card => (
                  <InfoCard
                    key={card.id}
                    card={card}
                    isExpanded={false}
                    onToggle={() => {}}
                    onExpand={() => {}}
                  />
                ))}
              </div>
              <CTAGroup
                ctas={currentWorld.ctas}
                world={selectedArea}
                onCTAClick={(type, label) => {
                  console.log('CTA clicked:', { type, label, area: selectedArea })
                }}
              />
            </div>
          </section>
        </div>
      )}

      {/* Karriereleiter Section - immer sichtbar */}
      <Services21 />
    </div>
  )
}

export default Option3

