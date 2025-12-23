import { useState, useMemo } from 'react'
import dummyJobs from '../data/dummyJobs.json'
import './JobFinder.css'

const JobFinder = () => {
  const [location, setLocation] = useState('')
  const [radius, setRadius] = useState(50)
  const [selectedAreas, setSelectedAreas] = useState([])
  const [sortBy, setSortBy] = useState('distance')
  const [mapConsent, setMapConsent] = useState(false)
  const [showConsent, setShowConsent] = useState(true)

  const areas = ['Markt', 'Logistik', 'Verwaltung', 'Einkauf', 'IT', 'Ausbildung']

  const toggleArea = (area) => {
    setSelectedAreas(prev =>
      prev.includes(area)
        ? prev.filter(a => a !== area)
        : [...prev, area]
    )
  }

  const filteredAndSortedJobs = useMemo(() => {
    let filtered = [...dummyJobs]

    // Filter by location (if provided)
    if (location.trim()) {
      const locationLower = location.toLowerCase()
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(locationLower) ||
        job.postalCode.includes(location)
      )
    }

    // Filter by radius
    filtered = filtered.filter(job => job.distance <= radius)

    // Filter by selected areas
    if (selectedAreas.length > 0) {
      filtered = filtered.filter(job => selectedAreas.includes(job.area))
    }

    // Sort
    if (sortBy === 'distance') {
      filtered.sort((a, b) => a.distance - b.distance)
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    }

    return filtered
  }, [location, radius, selectedAreas, sortBy])

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      action()
    }
  }

  return (
    <section className="job-finder section" id="job-finder">
      <div className="container">
        <h2 className="h2 text-center mb-xl">Jobs in deiner Region</h2>

        {/* Filters */}
        <div className="job-finder-filters">
          <div className="filter-group">
            <label htmlFor="location-input" className="form-label">
              Standort oder PLZ
            </label>
            <input
              id="location-input"
              type="text"
              className="form-input"
              placeholder="z.B. München oder 80331"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              aria-label="Standort oder PLZ eingeben"
            />
          </div>

          <div className="filter-group">
            <label htmlFor="radius-slider" className="form-label">
              Radius: {radius} km
            </label>
            <input
              id="radius-slider"
              type="range"
              min="5"
              max="100"
              step="5"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="form-slider"
              aria-label={`Radius: ${radius} Kilometer`}
              aria-valuemin={5}
              aria-valuemax={100}
              aria-valuenow={radius}
            />
            <div className="slider-labels">
              <span>5 km</span>
              <span>100 km</span>
            </div>
          </div>

          <div className="filter-group">
            <label className="form-label">Bereich</label>
            <div className="area-filters" role="group" aria-label="Bereich auswählen">
              {areas.map(area => (
                <button
                  key={area}
                  type="button"
                  className={`area-filter ${selectedAreas.includes(area) ? 'active' : ''}`}
                  onClick={() => toggleArea(area)}
                  onKeyDown={(e) => handleKeyDown(e, () => toggleArea(area))}
                  aria-pressed={selectedAreas.includes(area)}
                  aria-label={`${area} ${selectedAreas.includes(area) ? 'ausgewählt' : 'auswählen'}`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-select" className="form-label">
              Sortierung
            </label>
            <select
              id="sort-select"
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sortierung auswählen"
            >
              <option value="distance">Nähe</option>
              <option value="newest">Neueste zuerst</option>
            </select>
          </div>
        </div>

        {/* Map Consent (Optional) */}
        {showConsent && (
          <div className="map-consent">
            <div className="map-consent-content">
              <p className="text-small">
                <strong>Karte aktivieren?</strong> Um dir Jobs auf einer Karte anzuzeigen, benötigen wir deine Zustimmung.
              </p>
              <div className="map-consent-actions">
                <label className="form-checkbox">
                  <input
                    type="checkbox"
                    checked={mapConsent}
                    onChange={(e) => setMapConsent(e.target.checked)}
                    aria-label="Karte aktivieren"
                  />
                  <span className="form-checkbox-label">Karte aktivieren</span>
                </label>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => setShowConsent(false)}
                  aria-label="Hinweis ausblenden"
                >
                  Ausblenden
                </button>
              </div>
            </div>
            {mapConsent && (
              <div className="map-placeholder" role="img" aria-label="Kartenansicht">
                <p className="text-small">Kartenansicht (Platzhalter)</p>
              </div>
            )}
          </div>
        )}

        {/* Results */}
        <div className="job-finder-results">
          <div className="results-header">
            <p className="text-small" style={{ color: 'var(--color-neutral-600)' }}>
              {filteredAndSortedJobs.length} {filteredAndSortedJobs.length === 1 ? 'Stelle gefunden' : 'Stellen gefunden'}
            </p>
          </div>

          {filteredAndSortedJobs.length === 0 ? (
            <div className="job-finder-empty">
              <p>Keine Stellen gefunden. Bitte passe deine Filter an.</p>
            </div>
          ) : (
            <div className="job-cards-grid">
              {filteredAndSortedJobs.slice(0, 9).map(job => (
                <div key={job.id} className="card card-elevated job-card-detailed">
                  <div className="card-body">
                    <div className="job-card-header">
                      <div>
                        <h3 className="h4 mb-sm">{job.title}</h3>
                        <div className="job-card-meta">
                          <span className="text-small" style={{ color: 'var(--color-neutral-600)' }}>
                            📍 {job.location} ({job.postalCode})
                          </span>
                          <span className="text-small" style={{ color: 'var(--color-neutral-600)' }}>
                            📏 {job.distance.toFixed(1)} km entfernt
                          </span>
                        </div>
                      </div>
                      <span className={`badge badge-${job.area === 'Markt' ? 'red' : job.area === 'Logistik' ? 'info' : job.area === 'IT' ? 'success' : 'neutral'}`}>
                        {job.area}
                      </span>
                    </div>

                    <div className="job-card-details">
                      <div className="job-detail-item">
                        <strong className="text-small">Arbeitszeit:</strong>
                        <span className="text-small">{job.workModel}</span>
                      </div>
                      <div className="job-detail-item">
                        <strong className="text-small">Level:</strong>
                        <span className="text-small">{job.entryLevel}</span>
                      </div>
                      <div className="job-detail-item">
                        <strong className="text-small">Veröffentlicht:</strong>
                        <span className="text-small">
                          {new Date(job.publishedDate).toLocaleDateString('de-DE', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>

                    <p className="text-small mb-md" style={{ color: 'var(--color-neutral-600)' }}>
                      {job.description}
                    </p>

                    <div className="job-card-actions">
                      <button
                        className="btn btn-ghost btn-sm"
                        onClick={() => alert(`Job-Details für: ${job.title}`)}
                        aria-label={`Details für ${job.title} anzeigen`}
                      >
                        Job anzeigen
                      </button>
                      <a
                        href="#bewerbung"
                        className="btn btn-primary btn-sm"
                        aria-label={`Sich für ${job.title} bewerben`}
                      >
                        In 60 Sekunden bewerben
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default JobFinder





