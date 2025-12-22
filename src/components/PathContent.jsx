import './PathContent.css'

const PathContent = ({ path, onSwitchPath, onCTA }) => {
  const getIconSVG = (iconName) => {
    const icons = {
      clock: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      chat: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      check: (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ),
      'arrow-up': (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      )
    }
    return icons[iconName] || icons.check
  }

  const otherPath = path.id === 'heute' ? 'plan' : 'heute'
  const otherLabel = path.id === 'heute' ? 'Weiterkommen mit Plan' : 'Heute loslegen'

  return (
    <div className="path-content card card-elevated">
      <div className="card-body">
        <p className="path-intro">{path.intro}</p>

        <ul className="path-bullets">
          {path.bullets.map((bullet, index) => (
            <li key={index} className="path-bullet">
              <span className="bullet-icon">
                {getIconSVG(bullet.icon)}
              </span>
              <span>{bullet.text}</span>
            </li>
          ))}
        </ul>

        <div className="path-form-preview">
          <p className="form-preview-label text-small">Formular-Vorschau:</p>
          <div className="form-fields-list">
            {path.formFields.map((field, index) => (
              <div key={index} className="form-field-preview">
                <span className="field-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="2" rx="1" />
                  </svg>
                </span>
                <span className="field-label text-small">{field}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="path-cta-section">
          <a
            href={path.cta.link}
            className="btn btn-primary btn-lg btn-full"
            onClick={() => onCTA && onCTA('primary', path.cta.primary, path.id)}
          >
            {path.cta.primary}
          </a>
          <button
            className="path-switch-link"
            onClick={() => onSwitchPath(otherPath)}
            aria-label={`Zu ${otherLabel} wechseln`}
          >
            Oder: zum anderen Weg wechseln
          </button>
        </div>
      </div>
    </div>
  )
}

export default PathContent



