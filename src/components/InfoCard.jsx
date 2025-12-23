import { useState } from 'react'
import MiniLadder from './MiniLadder'
import './InfoCard.css'

const InfoCard = ({ card, isExpanded: controlledExpanded, onExpand, onToggle }) => {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded

  const handleToggle = () => {
    const newExpanded = !isExpanded
    if (controlledExpanded === undefined) {
      setInternalExpanded(newExpanded)
    }
    if (onToggle) {
      onToggle(card.id, newExpanded)
    }
    if (onExpand) {
      onExpand(card.id)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    }
  }

  return (
    <article className={`info-card ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="info-card-header"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={`card-content-${card.id}`}
      >
        <div className="info-card-icon">{card.icon}</div>
        <h3 className="info-card-title">{card.title}</h3>
        <svg 
          className="info-card-chevron" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        id={`card-content-${card.id}`}
        className="info-card-content"
        aria-hidden={!isExpanded}
      >
        <ul className="info-card-bullets">
          {card.bullets.map((bullet, index) => (
            <li key={index} className="info-card-bullet">
              <span className="bullet-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {card.ladder && (
          <MiniLadder rungs={card.ladder.rungs} />
        )}
      </div>
    </article>
  )
}

export default InfoCard





