import { useState, useEffect } from 'react'
import './LadderSteps.css'

const LadderSteps = ({ values, activeStep, onStepChange, isMobile }) => {
  const [importantValues, setImportantValues] = useState(new Set())

  useEffect(() => {
    // Load important values from localStorage
    const stored = JSON.parse(localStorage.getItem('importantValues') || '[]')
    setImportantValues(new Set(stored))
  }, [])

  const handleKeyDown = (e, stepIndex) => {
    if (isMobile) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        const direction = e.key === 'ArrowLeft' ? -1 : 1
        const newIndex = Math.max(0, Math.min(values.length - 1, stepIndex + direction))
        onStepChange(newIndex)
      }
    } else {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault()
        const direction = e.key === 'ArrowUp' ? -1 : 1
        const newIndex = Math.max(0, Math.min(values.length - 1, stepIndex + direction))
        onStepChange(newIndex)
      }
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onStepChange(stepIndex)
    }
  }

  if (isMobile) {
    // Horizontal stepper for mobile
    return (
      <div className="ladder-steps-mobile" role="tablist" aria-label="Werte durchsuchen">
        <div className="ladder-steps-scroll">
          {values.map((value, index) => (
            <button
              key={value.id}
              className={`ladder-step-mobile ${activeStep === index ? 'active' : ''} ${importantValues.has(value.id) ? 'important' : ''}`}
              onClick={() => onStepChange(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              role="tab"
              aria-selected={activeStep === index}
              aria-controls={`value-panel-${value.id}`}
              id={`step-tab-${value.id}`}
            >
              <span className="step-number">{index + 1}</span>
              <span className="step-label">{value.shortLabel}</span>
              {importantValues.has(value.id) && (
                <span className="step-important-icon" aria-label="Als wichtig markiert">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Vertical ladder for desktop
  return (
    <div className="ladder-steps-desktop" role="tablist" aria-label="Werte durchsuchen" aria-orientation="vertical">
      <div className="ladder-rail"></div>
      {values.map((value, index) => (
        <button
          key={value.id}
          className={`ladder-step-desktop ${activeStep === index ? 'active' : ''} ${importantValues.has(value.id) ? 'important' : ''}`}
          onClick={() => onStepChange(index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          role="tab"
          aria-selected={activeStep === index}
          aria-controls={`value-panel-${value.id}`}
          id={`step-tab-${value.id}`}
        >
          <div className="step-circle">
            <span className="step-number">{index + 1}</span>
            {importantValues.has(value.id) && (
              <span className="step-important-icon" aria-label="Als wichtig markiert">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
            )}
          </div>
          <span className="step-label">{value.shortLabel}</span>
        </button>
      ))}
    </div>
  )
}

export default LadderSteps





