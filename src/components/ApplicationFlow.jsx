import { useState } from 'react'
import './ApplicationFlow.css'

const ApplicationFlow = () => {
  const [activeLane, setActiveLane] = useState('fast')
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    fast: {
      name: '',
      email: '',
      phone: '',
      location: '',
      area: '',
      startDate: '',
      callbackTime: ''
    },
    deep: {
      name: '',
      email: '',
      phone: '',
      role: '',
      region: '',
      qualifications: [],
      statement: '',
      cv: null
    }
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps = [
    { id: 'upload', label: 'Upload', icon: '📤', description: 'Dokumente hochladen' },
    { id: 'check', label: 'Check', icon: '✓', description: 'Prüfung & Matching' },
    { id: 'meet', label: 'Kennenlernen', icon: '🤝', description: 'Persönliches Gespräch' },
    { id: 'feedback', label: 'Rückmeldung', icon: '📧', description: 'Entscheidung & Feedback' }
  ]

  const areas = ['Markt', 'Logistik', 'Verwaltung', 'Einkauf', 'IT', 'Ausbildung']
  const callbackTimes = ['Morgens (8-12 Uhr)', 'Mittags (12-14 Uhr)', 'Nachmittags (14-18 Uhr)', 'Abends (18-20 Uhr)', 'Flexibel']
  const qualifications = [
    'Einzelhandelserfahrung',
    'Kassenerfahrung',
    'Lagererfahrung',
    'Büroerfahrung',
    'IT-Kenntnisse',
    'Führungserfahrung',
    'Ausbildung abgeschlossen',
    'Studium abgeschlossen'
  ]

  const handleInputChange = (lane, field, value) => {
    setFormData(prev => ({
      ...prev,
      [lane]: {
        ...prev[lane],
        [field]: value
      }
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleQualificationToggle = (qualification) => {
    setFormData(prev => ({
      ...prev,
      deep: {
        ...prev.deep,
        qualifications: prev.deep.qualifications.includes(qualification)
          ? prev.deep.qualifications.filter(q => q !== qualification)
          : [...prev.deep.qualifications, qualification]
      }
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        deep: {
          ...prev.deep,
          cv: file
        }
      }))
    }
  }

  const validateForm = (lane) => {
    const data = formData[lane]
    const newErrors = {}

    // Common validations
    if (!data.name.trim()) {
      newErrors.name = 'Bitte gib deinen Namen ein'
    }

    if (!data.email.trim()) {
      newErrors.email = 'Bitte gib deine E-Mail-Adresse ein'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein'
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Bitte gib deine Telefonnummer ein'
    } else if (!/^[\d\s\+\-\(\)]+$/.test(data.phone)) {
      newErrors.phone = 'Bitte gib eine gültige Telefonnummer ein'
    }

    // Heute loslegen specific
    if (lane === 'fast') {
      if (!data.location.trim()) {
        newErrors.location = 'Bitte gib deinen Standort ein'
      }
      if (!data.area) {
        newErrors.area = 'Bitte wähle einen Bereich'
      }
      if (!data.startDate) {
        newErrors.startDate = 'Bitte wähle einen Starttermin'
      }
    }

    // Weiterkommen mit Plan specific
    if (lane === 'deep') {
      if (!data.role.trim()) {
        newErrors.role = 'Bitte gib deine Wunschrolle ein'
      }
      if (!data.region.trim()) {
        newErrors.region = 'Bitte gib deine bevorzugte Region ein'
      }
      if (!data.cv) {
        newErrors.cv = 'Bitte lade deinen Lebenslauf hoch'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm(activeLane)) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0] || Object.keys(validateForm(activeLane) ? {} : errors)[0]
      if (firstError) {
        const element = document.getElementById(`${activeLane}-${firstError}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          element.focus()
        }
      }
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Tracking
    console.log('Application submitted:', {
      lane: activeLane,
      formData: formData[activeLane],
      timestamp: new Date().toISOString()
    })

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      fast: {
        name: '',
        email: '',
        phone: '',
        location: '',
        area: '',
        startDate: '',
        callbackTime: ''
      },
      deep: {
        name: '',
        email: '',
        phone: '',
        role: '',
        region: '',
        qualifications: [],
        statement: '',
        cv: null
      }
    })
    setErrors({})
  }

  return (
    <section className="application-flow-section section" id="bewerbung">
      <div className="container">
        <h2 className="h2 text-center mb-xl">Bewerbung: So einfach geht's</h2>
        <p className="text-center mb-xl" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)', color: 'var(--color-neutral-600)' }}>
          Wähle deinen Weg und starte deine Bewerbung in wenigen Minuten
        </p>

        {!isSubmitted ? (
          <div className="application-flow-container">
            {/* Timeline */}
            <div className="application-timeline">
              <h3 className="h4 mb-lg">Dein Bewerbungsprozess</h3>
              <div className="timeline-steps">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`timeline-step ${index <= currentStep ? 'active' : ''} ${index === currentStep ? 'current' : ''}`}
                  >
                    <div className="timeline-step-icon">
                      <span className="step-icon-emoji">{step.icon}</span>
                      {index < steps.length - 1 && <div className="timeline-connector"></div>}
                    </div>
                    <div className="timeline-step-content">
                      <strong className="step-label">{step.label}</strong>
                      <span className="step-description text-small">{step.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Section */}
            <div className="application-form-container">
              {/* Lane Switcher */}
              <div className="lane-switcher" role="tablist">
                <button
                  className={`lane-tab ${activeLane === 'fast' ? 'active' : ''}`}
                  onClick={() => setActiveLane('fast')}
                  role="tab"
                  aria-selected={activeLane === 'fast'}
                  aria-controls="fast-form"
                  id="fast-tab"
                >
                  <span className="tab-icon">⚡</span>
                  <span>Heute loslegen</span>
                  <span className="tab-badge">60 Sek.</span>
                </button>
                <button
                  className={`lane-tab ${activeLane === 'deep' ? 'active' : ''}`}
                  onClick={() => setActiveLane('deep')}
                  role="tab"
                  aria-selected={activeLane === 'deep'}
                  aria-controls="deep-form"
                  id="deep-tab"
                >
                  <span className="tab-icon">🚀</span>
                  <span>Weiterkommen mit Plan</span>
                  <span className="tab-badge">Ausführlich</span>
                </button>
              </div>

              {/* Forms */}
              <div className="application-forms">
                {/* Heute loslegen Form */}
                <form
                  id="fast-form"
                  role="tabpanel"
                  aria-labelledby="fast-tab"
                  className={`application-form ${activeLane === 'fast' ? 'active' : ''}`}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <h3 className="h4 mb-md">Schnell bewerben</h3>
                  <p className="text-small mb-lg" style={{ color: 'var(--color-neutral-600)' }}>
                    Fülle die wichtigsten Felder aus und wir melden uns schnell bei dir.
                  </p>

                  <div className="form-group">
                    <label htmlFor="fast-name" className="form-label">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      id="fast-name"
                      type="text"
                      className={`form-input ${errors.name ? 'form-error' : ''}`}
                      value={formData.fast.name}
                      onChange={(e) => handleInputChange('fast', 'name', e.target.value)}
                      required
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'fast-name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="fast-name-error" className="form-error-message" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="fast-email" className="form-label">
                      E-Mail <span className="required">*</span>
                    </label>
                    <input
                      id="fast-email"
                      type="email"
                      className={`form-input ${errors.email ? 'form-error' : ''}`}
                      value={formData.fast.email}
                      onChange={(e) => handleInputChange('fast', 'email', e.target.value)}
                      required
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'fast-email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="fast-email-error" className="form-error-message" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="fast-phone" className="form-label">
                      Telefon <span className="required">*</span>
                    </label>
                    <input
                      id="fast-phone"
                      type="tel"
                      className={`form-input ${errors.phone ? 'form-error' : ''}`}
                      value={formData.fast.phone}
                      onChange={(e) => handleInputChange('fast', 'phone', e.target.value)}
                      required
                      aria-required="true"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'fast-phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="fast-phone-error" className="form-error-message" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="fast-location" className="form-label">
                      Standort / PLZ <span className="required">*</span>
                    </label>
                    <input
                      id="fast-location"
                      type="text"
                      className={`form-input ${errors.location ? 'form-error' : ''}`}
                      value={formData.fast.location}
                      onChange={(e) => handleInputChange('fast', 'location', e.target.value)}
                      placeholder="z.B. München oder 80331"
                      required
                      aria-required="true"
                      aria-invalid={errors.location ? 'true' : 'false'}
                      aria-describedby={errors.location ? 'fast-location-error' : undefined}
                    />
                    {errors.location && (
                      <span id="fast-location-error" className="form-error-message" role="alert">
                        {errors.location}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="fast-area" className="form-label">
                      Bereich <span className="required">*</span>
                    </label>
                    <select
                      id="fast-area"
                      className={`form-select ${errors.area ? 'form-error' : ''}`}
                      value={formData.fast.area}
                      onChange={(e) => handleInputChange('fast', 'area', e.target.value)}
                      required
                      aria-required="true"
                      aria-invalid={errors.area ? 'true' : 'false'}
                      aria-describedby={errors.area ? 'fast-area-error' : undefined}
                    >
                      <option value="">Bitte wählen</option>
                      {areas.map(area => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                    {errors.area && (
                      <span id="fast-area-error" className="form-error-message" role="alert">
                        {errors.area}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="fast-startDate" className="form-label">
                      Starttermin <span className="required">*</span>
                    </label>
                    <input
                      id="fast-startDate"
                      type="date"
                      className={`form-input ${errors.startDate ? 'form-error' : ''}`}
                      value={formData.fast.startDate}
                      onChange={(e) => handleInputChange('fast', 'startDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      aria-required="true"
                      aria-invalid={errors.startDate ? 'true' : 'false'}
                      aria-describedby={errors.startDate ? 'fast-startDate-error' : undefined}
                    />
                    {errors.startDate && (
                      <span id="fast-startDate-error" className="form-error-message" role="alert">
                        {errors.startDate}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="fast-callbackTime" className="form-label">
                      Rückrufzeit (optional)
                    </label>
                    <select
                      id="fast-callbackTime"
                      className="form-select"
                      value={formData.fast.callbackTime}
                      onChange={(e) => handleInputChange('fast', 'callbackTime', e.target.value)}
                    >
                      <option value="">Keine Präferenz</option>
                      {callbackTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Jetzt bewerben'}
                  </button>
                </form>

                {/* Weiterkommen mit Plan Form */}
                <form
                  id="deep-form"
                  role="tabpanel"
                  aria-labelledby="deep-tab"
                  className={`application-form ${activeLane === 'deep' ? 'active' : ''}`}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <h3 className="h4 mb-md">Ausführlich bewerben</h3>
                  <p className="text-small mb-lg" style={{ color: 'var(--color-neutral-600)' }}>
                    Gib uns mehr Details über dich und deine Wünsche für eine maßgeschneiderte Beratung.
                  </p>

                  <div className="form-group">
                    <label htmlFor="deep-name" className="form-label">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      id="deep-name"
                      type="text"
                      className={`form-input ${errors.name ? 'form-error' : ''}`}
                      value={formData.deep.name}
                      onChange={(e) => handleInputChange('deep', 'name', e.target.value)}
                      required
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'deep-name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="deep-name-error" className="form-error-message" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="deep-email" className="form-label">
                      E-Mail <span className="required">*</span>
                    </label>
                    <input
                      id="deep-email"
                      type="email"
                      className={`form-input ${errors.email ? 'form-error' : ''}`}
                      value={formData.deep.email}
                      onChange={(e) => handleInputChange('deep', 'email', e.target.value)}
                      required
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'deep-email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="deep-email-error" className="form-error-message" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="deep-phone" className="form-label">
                      Telefon <span className="required">*</span>
                    </label>
                    <input
                      id="deep-phone"
                      type="tel"
                      className={`form-input ${errors.phone ? 'form-error' : ''}`}
                      value={formData.deep.phone}
                      onChange={(e) => handleInputChange('deep', 'phone', e.target.value)}
                      required
                      aria-required="true"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'deep-phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="deep-phone-error" className="form-error-message" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="deep-cv" className="form-label">
                      Lebenslauf (PDF) <span className="required">*</span>
                    </label>
                    <input
                      id="deep-cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className={`form-input ${errors.cv ? 'form-error' : ''}`}
                      onChange={handleFileChange}
                      required
                      aria-required="true"
                      aria-invalid={errors.cv ? 'true' : 'false'}
                      aria-describedby={errors.cv ? 'deep-cv-error' : undefined}
                    />
                    {formData.deep.cv && (
                      <p className="text-small" style={{ color: 'var(--color-success)', marginTop: 'var(--spacing-xs)' }}>
                        ✓ {formData.deep.cv.name}
                      </p>
                    )}
                    {errors.cv && (
                      <span id="deep-cv-error" className="form-error-message" role="alert">
                        {errors.cv}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="deep-role" className="form-label">
                      Wunschrolle <span className="required">*</span>
                    </label>
                    <input
                      id="deep-role"
                      type="text"
                      className={`form-input ${errors.role ? 'form-error' : ''}`}
                      value={formData.deep.role}
                      onChange={(e) => handleInputChange('deep', 'role', e.target.value)}
                      placeholder="z.B. Filialleiter/in, Einkäufer/in"
                      required
                      aria-required="true"
                      aria-invalid={errors.role ? 'true' : 'false'}
                      aria-describedby={errors.role ? 'deep-role-error' : undefined}
                    />
                    {errors.role && (
                      <span id="deep-role-error" className="form-error-message" role="alert">
                        {errors.role}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="deep-region" className="form-label">
                      Bevorzugte Region <span className="required">*</span>
                    </label>
                    <input
                      id="deep-region"
                      type="text"
                      className={`form-input ${errors.region ? 'form-error' : ''}`}
                      value={formData.deep.region}
                      onChange={(e) => handleInputChange('deep', 'region', e.target.value)}
                      placeholder="z.B. München, Augsburg, Stuttgart"
                      required
                      aria-required="true"
                      aria-invalid={errors.region ? 'true' : 'false'}
                      aria-describedby={errors.region ? 'deep-region-error' : undefined}
                    />
                    {errors.region && (
                      <span id="deep-region-error" className="form-error-message" role="alert">
                        {errors.region}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Qualifikationen (mehrfach wählbar)
                    </label>
                    <div className="qualifications-grid">
                      {qualifications.map(qual => (
                        <label key={qual} className="form-checkbox qualification-checkbox">
                          <input
                            type="checkbox"
                            checked={formData.deep.qualifications.includes(qual)}
                            onChange={() => handleQualificationToggle(qual)}
                          />
                          <span className="form-checkbox-label">{qual}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="deep-statement" className="form-label">
                      Kurzstatement (optional)
                    </label>
                    <textarea
                      id="deep-statement"
                      className="form-textarea"
                      value={formData.deep.statement}
                      onChange={(e) => handleInputChange('deep', 'statement', e.target.value)}
                      placeholder="Erzähl uns kurz, warum du zu REWE passt..."
                      rows="4"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Bewerbung einreichen'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="application-success">
            <div className="success-icon">✓</div>
            <h3 className="h3 mb-md">Bewerbung erfolgreich eingereicht!</h3>
            <p className="mb-lg" style={{ color: 'var(--color-neutral-600)' }}>
              {activeLane === 'fast' 
                ? 'Wir melden uns innerhalb von 24 Stunden bei dir.'
                : 'Wir melden uns innerhalb von 3-5 Werktagen bei dir für ein persönliches Gespräch.'}
            </p>
            <div className="success-next-steps">
              <h4 className="h4 mb-md">Nächste Schritte:</h4>
              <ol className="next-steps-list">
                <li>Wir prüfen deine Bewerbung</li>
                <li>Wir kontaktieren dich per E-Mail oder Telefon</li>
                <li>Gemeinsam finden wir den passenden Weg für dich</li>
              </ol>
            </div>
            <div className="success-ctas">
              <a href="#job-finder" className="btn btn-primary">
                Weitere Jobs ansehen
              </a>
              <button className="btn btn-secondary" onClick={handleReset}>
                Neue Bewerbung
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ApplicationFlow

