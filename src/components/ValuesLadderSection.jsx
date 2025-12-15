import { useState, useEffect } from 'react'
import { valuesData } from '../data/valuesData'
import LadderSteps from './LadderSteps'
import ValuePanel from './ValuePanel'
import './ValuesLadderSection.css'

const ValuesLadderSection = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 769)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleStepChange = (stepIndex) => {
    setActiveStep(stepIndex)
    // Analytics placeholder
    console.log('Step changed:', {
      step: stepIndex + 1,
      value: valuesData[stepIndex].title,
      timestamp: new Date().toISOString()
    })
  }

  const handleToggleImportant = (valueId, isImportant) => {
    // Analytics placeholder
    console.log('Toggle important:', {
      valueId,
      isImportant,
      timestamp: new Date().toISOString()
    })
  }

  const handleCTA = (type, label) => {
    // Analytics placeholder
    console.log('CTA clicked:', {
      type,
      label,
      value: valuesData[activeStep].title,
      timestamp: new Date().toISOString()
    })
  }

  const currentValue = valuesData[activeStep]

  return (
    <section className="values-ladder-section section" id="werte">
      <div className="container">
        <div className="values-ladder-header">
          <div className="values-badge">
            <span>Sicher. Fair. Mit Zukunft.</span>
          </div>
          <h2 className="h2 text-center mb-md">Unsere Werte. Deine Stufen.</h2>
          <p className="values-ladder-subline text-center mb-xl">
            Was dir wichtig ist, sollst du bei uns spüren – jeden Tag.
          </p>
        </div>

        <div className="values-ladder-content">
          {/* Progress Indicator */}
          <div className="values-progress">
            <span className="text-small">Stufe {activeStep + 1}/{valuesData.length}</span>
          </div>

          {/* Ladder + Panel Layout */}
          <div className="values-ladder-layout">
            <LadderSteps
              values={valuesData}
              activeStep={activeStep}
              onStepChange={handleStepChange}
              isMobile={isMobile}
            />

            <div
              id={`value-panel-${currentValue.id}`}
              role="tabpanel"
              aria-labelledby={`step-tab-${currentValue.id}`}
              className="values-panel-wrapper"
            >
              <ValuePanel
                value={currentValue}
                onToggleImportant={handleToggleImportant}
                onCTA={handleCTA}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesLadderSection

