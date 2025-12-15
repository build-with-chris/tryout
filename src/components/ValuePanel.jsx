import { useState, useEffect } from 'react'
import MiniProof from './MiniProof'
import './ValuePanel.css'

const ValuePanel = ({ value, onToggleImportant, onCTA }) => {
  const [isImportant, setIsImportant] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    // Load from localStorage
    const importantValues = JSON.parse(localStorage.getItem('importantValues') || '[]')
    setIsImportant(importantValues.includes(value.id))
  }, [value.id])

  const handleToggleImportant = () => {
    const newIsImportant = !isImportant
    setIsImportant(newIsImportant)

    // Show animation if marking as important
    if (newIsImportant) {
      setShowAnimation(true)
      setTimeout(() => setShowAnimation(false), 2000)
    }

    // Update localStorage
    const importantValues = JSON.parse(localStorage.getItem('importantValues') || '[]')
    if (newIsImportant) {
      if (!importantValues.includes(value.id)) {
        importantValues.push(value.id)
      }
    } else {
      const index = importantValues.indexOf(value.id)
      if (index > -1) {
        importantValues.splice(index, 1)
      }
    }
    localStorage.setItem('importantValues', JSON.stringify(importantValues))

    if (onToggleImportant) {
      onToggleImportant(value.id, newIsImportant)
    }
  }

  const getIconSVG = (iconName) => {
    const icons = {
      shield: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      'arrow-up': (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      ),
      users: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      'check-list': (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
      leaf: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
      star: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
    return icons[iconName] || icons.shield
  }

  return (
    <div className="value-panel card card-elevated">
      <div className="card-body">
        <div className="value-panel-header">
          <div className="value-panel-icon">
            {getIconSVG(value.icon)}
          </div>
          <h3 className="value-panel-title">{value.title}</h3>
        </div>

        <p className="value-panel-definition">{value.definition}</p>

        <ul className="value-panel-bullets">
          {value.bullets.map((bullet, index) => (
            <li key={index} className="value-bullet">
              <span className="bullet-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <MiniProof proofLine={value.proofLine} />

        <div className="value-panel-important">
          <button
            className={`btn-important ${isImportant ? 'active' : ''}`}
            onClick={handleToggleImportant}
            aria-pressed={isImportant}
            aria-label={isImportant ? 'Als wichtig markiert' : 'Als wichtig markieren'}
          >
            <span className="btn-important-icon">
              {isImportant ? (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              )}
            </span>
            <span className="btn-important-label">
              {isImportant ? 'Mir wichtig' : 'Das ist mir wichtig'}
            </span>
          </button>
          {showAnimation && (
            <div className="important-animation" aria-live="polite">
              <div className="animation-content">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>Danke! Wir merken uns das.</span>
              </div>
            </div>
          )}
        </div>

        <div className="value-panel-ctas">
          <a
            href="#bewerbung"
            className="btn btn-primary btn-lg"
            onClick={() => onCTA && onCTA('primary', 'In 60 Sekunden bewerben')}
          >
            In 60 Sekunden bewerben
          </a>
        </div>
      </div>
    </div>
  )
}

export default ValuePanel

