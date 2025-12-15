import './JobHighlights.css'

const JobHighlights = ({ activePath }) => {
  // Jobs für "Heute loslegen" (Quereinsteiger/Azubis)
  const heuteJobs = [
    {
      title: 'Verkäufer/in',
      location: 'München',
      type: 'Vollzeit',
      badge: 'Quereinstieg',
      description: 'Kundenberatung, Kasse, Warenpräsentation – Einarbeitung im Team'
    },
    {
      title: 'Lagerist/in',
      location: 'Augsburg',
      type: 'Vollzeit',
      badge: 'Quereinstieg',
      description: 'Warenannahme, Kommissionierung – auch ohne Erfahrung möglich'
    },
    {
      title: 'Azubi Kaufmann im Einzelhandel',
      location: 'Stuttgart',
      type: 'Ausbildung',
      badge: 'Azubi',
      description: '3-jährige duale Ausbildung mit Praxis und Berufsschule'
    }
  ]

  // Jobs für "Weiterkommen mit Plan" (Fachkräfte/Filialleiter)
  const planJobs = [
    {
      title: 'Filialleiter/in',
      location: 'München',
      type: 'Vollzeit',
      badge: 'Führung',
      description: 'Teamführung, Sortimentsgestaltung, Verkaufssteuerung'
    },
    {
      title: 'Bereichsleiter/in Markt',
      location: 'Nürnberg',
      type: 'Vollzeit',
      badge: 'Karriere',
      description: 'Strategische Verantwortung, Teamleitung, Marktentwicklung'
    },
    {
      title: 'Fachkraft Logistik',
      location: 'Regensburg',
      type: 'Vollzeit',
      badge: 'Fachkraft',
      description: 'Prozessoptimierung, Qualitätssicherung, Spezialisierung'
    }
  ]

  const jobs = activePath === 'heute' ? heuteJobs : planJobs
  const title = activePath === 'heute' 
    ? 'Jobs für Quereinsteiger & Azubis' 
    : 'Fachkräfte & Führungspositionen'

  const getBadgeClass = (badge) => {
    const badgeMap = {
      'Quereinstieg': 'info',
      'Azubi': 'success',
      'Führung': 'red',
      'Karriere': 'success',
      'Fachkraft': 'info'
    }
    return badgeMap[badge] || 'info'
  }

  return (
    <div className="job-highlights-sidebar">
      <div className="job-highlights-container card card-elevated">
        <div className="card-body">
          <h3 className="job-highlights-title">{title}</h3>
          <div className="job-highlights-list">
            {jobs.map((job, index) => (
              <div key={index} className="job-highlight-item">
                <div className="job-highlight-header">
                  <div>
                    <h4 className="h4 mb-xs">{job.title}</h4>
                    <p className="text-small" style={{ color: 'var(--color-neutral-600)' }}>
                      {job.location} • {job.type}
                    </p>
                  </div>
                  <span className={`badge badge-${getBadgeClass(job.badge)}`}>
                    {job.badge}
                  </span>
                </div>
                <p className="job-highlight-description text-small">
                  {job.description}
                </p>
                <a 
                  href="#bewerbung" 
                  className="job-highlight-link text-small"
                >
                  Jetzt bewerben →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobHighlights

