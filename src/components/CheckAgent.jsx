import { useState, useEffect } from 'react'
import resultsData from '../data/checkAgentResults.json'
import './CheckAgent.css'

const CheckAgent = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [isComplete, setIsComplete] = useState(false)

  const questions = [
    {
      id: 'area',
      question: 'Welcher Bereich interessiert dich am meisten?',
      options: [
        { value: 'markt', label: 'Markt & Verkauf', icon: '🛒' },
        { value: 'logistik', label: 'Logistik & Lager', icon: '🚚' },
        { value: 'verwaltung', label: 'Verwaltung & Büro', icon: '📋' },
        { value: 'einkauf', label: 'Einkauf & Sortiment', icon: '📊' },
        { value: 'it', label: 'IT & Digitalisierung', icon: '💻' },
        { value: 'ausbildung', label: 'Ausbildung', icon: '🎓' }
      ]
    },
    {
      id: 'worktime',
      question: 'Welches Arbeitszeitmodell passt zu dir?',
      options: [
        { value: 'fulltime', label: 'Vollzeit', icon: '⏰' },
        { value: 'parttime', label: 'Teilzeit', icon: '🕐' },
        { value: 'flexible', label: 'Flexibel / Minijob', icon: '🔄' },
        { value: 'ausbildung', label: 'Ausbildung', icon: '🎓' }
      ]
    },
    {
      id: 'contact',
      question: 'Wie wichtig ist dir der Kontakt mit Menschen?',
      options: [
        { value: 'high', label: 'Sehr wichtig – ich arbeite gerne mit Menschen', icon: '👥' },
        { value: 'medium', label: 'Mittel – ab und zu ist okay', icon: '🤝' },
        { value: 'low', label: 'Weniger wichtig – ich arbeite lieber im Hintergrund', icon: '🔧' }
      ]
    },
    {
      id: 'responsibility',
      question: 'Wie viel Verantwortung möchtest du übernehmen?',
      options: [
        { value: 'high', label: 'Viel Verantwortung – ich übernehme gerne Führung', icon: '👔' },
        { value: 'medium', label: 'Mittel – ich übernehme gerne Aufgaben', icon: '📝' },
        { value: 'low', label: 'Weniger Verantwortung – ich arbeite gerne nach Anleitung', icon: '📋' }
      ]
    },
    {
      id: 'start',
      question: 'Wann möchtest du starten?',
      options: [
        { value: 'immediate', label: 'Sofort – ich bin bereit', icon: '⚡' },
        { value: 'soon', label: 'In den nächsten 4 Wochen', icon: '📅' },
        { value: 'flexible', label: 'Flexibel – ich kann warten', icon: '🗓️' }
      ]
    }
  ]

  useEffect(() => {
    // Check for URL parameters on mount
    const params = new URLSearchParams(window.location.search)
    const sharedAnswers = params.get('answers')
    if (sharedAnswers) {
      try {
        const decoded = JSON.parse(decodeURIComponent(sharedAnswers))
        setAnswers(decoded)
        calculateResults(decoded)
        setIsComplete(true)
        setCurrentStep(questions.length)
      } catch (e) {
        console.error('Error parsing shared answers:', e)
      }
    }
  }, [])

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    // Update URL without page reload
    if (Object.keys(newAnswers).length === questions.length) {
      const encoded = encodeURIComponent(JSON.stringify(newAnswers))
      window.history.pushState({}, '', `?answers=${encoded}`)
      calculateResults(newAnswers)
      setIsComplete(true)
    }

    // Move to next step
    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1)
      }, 300)
    }
  }

  const calculateResults = (allAnswers) => {
    const scores = {}
    const mapping = resultsData.mapping

    // Calculate scores based on answers
    const area = allAnswers.area
    const worktime = allAnswers.worktime
    const contact = allAnswers.contact
    const responsibility = allAnswers.responsibility
    const start = allAnswers.start

    // Initial area preference gets high score
    if (area && area !== 'ausbildung') {
      scores[area] = (scores[area] || 0) + 3
    }

    // Worktime preferences
    if (worktime === 'fulltime') {
      if (contact === 'high') {
        ;['markt', 'verwaltung'].forEach(a => { scores[a] = (scores[a] || 0) + 2 })
      } else {
        ;['logistik', 'einkauf', 'it'].forEach(a => { scores[a] = (scores[a] || 0) + 2 })
      }
    } else if (worktime === 'parttime') {
      if (contact === 'high') {
        ;['markt', 'ausbildung'].forEach(a => { scores[a] = (scores[a] || 0) + 2 })
      } else {
        ;['logistik', 'ausbildung'].forEach(a => { scores[a] = (scores[a] || 0) + 2 })
      }
    }

    // Contact preferences
    if (contact === 'high') {
      scores.markt = (scores.markt || 0) + 2
    } else if (contact === 'low') {
      scores.logistik = (scores.logistik || 0) + 1
      scores.it = (scores.it || 0) + 1
      scores.einkauf = (scores.einkauf || 0) + 1
    }

    // Responsibility preferences
    if (responsibility === 'high') {
      scores.verwaltung = (scores.verwaltung || 0) + 2
      scores.einkauf = (scores.einkauf || 0) + 2
    } else if (responsibility === 'low') {
      scores.markt = (scores.markt || 0) + 1
      scores.logistik = (scores.logistik || 0) + 1
      scores.ausbildung = (scores.ausbildung || 0) + 2
    }

    // Start time preferences
    if (start === 'immediate') {
      scores.markt = (scores.markt || 0) + 1
      scores.logistik = (scores.logistik || 0) + 1
    }

    // Ausbildung special case
    if (area === 'ausbildung' || worktime === 'ausbildung') {
      scores.ausbildung = (scores.ausbildung || 0) + 5
    }

    // Get top 3 results
    const sorted = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([key]) => key)

    // Fallback if not enough results
    const allAreas = ['markt', 'logistik', 'verwaltung', 'einkauf', 'it', 'ausbildung']
    while (sorted.length < 3) {
      const next = allAreas.find(a => !sorted.includes(a))
      if (next) sorted.push(next)
      else break
    }

    setResults(sorted.map(key => resultsData.results[key]))
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers({})
    setResults(null)
    setIsComplete(false)
    window.history.pushState({}, '', window.location.pathname)
  }

  const handleCTAClick = (type, area) => {
    console.log('CheckAgent CTA clicked:', { type, area, timestamp: new Date().toISOString() })
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <section className="check-agent-section section" id="check-agent">
      <div className="container">
        <h2 className="h2 text-center mb-xl">Finde deinen Weg</h2>
        <p className="text-center mb-xl" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)', color: 'var(--color-neutral-600)' }}>
          Beantworte 5 kurze Fragen und wir zeigen dir, welcher Bereich zu dir passt
        </p>

        {!isComplete ? (
          <div className="check-agent-quiz">
            {/* Progress Bar */}
            <div className="quiz-progress">
              <div className="quiz-progress-bar" style={{ width: `${progress}%` }}></div>
              <span className="quiz-progress-text">
                Frage {currentStep + 1} von {questions.length}
              </span>
            </div>

            {/* Current Question */}
            <div className="quiz-question-card">
              <h3 className="h3 mb-lg">{questions[currentStep].question}</h3>
              <div className="quiz-options">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    className="quiz-option"
                    onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                    aria-label={option.label}
                  >
                    <span className="option-icon">{option.icon}</span>
                    <span className="option-label">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {currentStep > 0 && (
              <button
                className="btn btn-ghost"
                onClick={() => setCurrentStep(currentStep - 1)}
                style={{ marginTop: 'var(--spacing-lg)' }}
              >
                ← Zurück
              </button>
            )}
          </div>
        ) : (
          <div className="check-agent-results">
            <div className="results-header">
              <h3 className="h3 text-center mb-md">Deine passenden Bereiche</h3>
              <p className="text-center mb-xl" style={{ color: 'var(--color-neutral-600)' }}>
                Basierend auf deinen Antworten empfehlen wir dir diese Bereiche:
              </p>
            </div>

            <div className="results-grid">
              {results && results.map((result, index) => (
                <div key={index} className="card card-elevated result-card">
                  <div className="card-body">
                    <div className="result-header">
                      <span className="result-icon">{result.icon}</span>
                      <h4 className="h4">{result.title}</h4>
                    </div>
                    <p className="mb-md" style={{ color: 'var(--color-neutral-600)' }}>
                      {result.description}
                    </p>

                    <div className="result-reasons">
                      <strong className="text-small mb-sm" style={{ display: 'block' }}>
                        Warum passt das zu dir?
                      </strong>
                      <ul className="reasons-list">
                        {result.reasons.map((reason, i) => (
                          <li key={i} className="reason-item">
                            <span className="reason-icon">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            </span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="result-jobs">
                      <strong className="text-small mb-sm" style={{ display: 'block' }}>
                        Passende Jobs:
                      </strong>
                      <div className="jobs-tags">
                        {result.jobs.map((job, i) => (
                          <span key={i} className="job-tag">{job}</span>
                        ))}
                      </div>
                    </div>

                    <div className="result-ctas">
                      <a
                        href={`#job-finder?area=${result.title.toLowerCase()}`}
                        className="btn btn-primary btn-sm"
                        onClick={() => handleCTAClick('jobs-anzeigen', result.title)}
                      >
                        Jobs anzeigen
                      </a>
                      <a
                        href="#bewerbung"
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleCTAClick('bewerben', result.title)}
                      >
                        In 60 Sekunden bewerben
                      </a>
                      <a
                        href="https://wa.me"
                        className="btn btn-ghost btn-sm"
                        onClick={() => handleCTAClick('whatsapp', result.title)}
                      >
                        <span className="icon" style={{ width: '16px', height: '16px' }}>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                        </span>
                        WhatsApp: Frag uns alles
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="results-footer">
              <button className="btn btn-secondary" onClick={handleRestart}>
                Quiz erneut starten
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CheckAgent

