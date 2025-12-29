import './WorldToggle.css'

const WorldToggle = ({ activeWorld, onToggle }) => {
  const handleKeyDown = (e, world) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault()
      const worlds = ['markt', 'logistik']
      const currentIndex = worlds.indexOf(activeWorld)
      let newIndex
      
      if (e.key === 'ArrowLeft') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : worlds.length - 1
      } else {
        newIndex = currentIndex < worlds.length - 1 ? currentIndex + 1 : 0
      }
      
      onToggle(worlds[newIndex])
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle(world)
    }
  }

  return (
    <div className="world-toggle" role="tablist" aria-label="Welt auswählen">
      <button
        className={`world-toggle-button ${activeWorld === 'markt' ? 'active' : ''}`}
        onClick={() => onToggle('markt')}
        onKeyDown={(e) => handleKeyDown(e, 'markt')}
        role="tab"
        aria-selected={activeWorld === 'markt'}
        aria-controls="markt-panel"
        id="markt-tab"
      >
        Markt
      </button>
      <button
        className={`world-toggle-button ${activeWorld === 'logistik' ? 'active' : ''}`}
        onClick={() => onToggle('logistik')}
        onKeyDown={(e) => handleKeyDown(e, 'logistik')}
        role="tab"
        aria-selected={activeWorld === 'logistik'}
        aria-controls="logistik-panel"
        id="logistik-tab"
      >
        Logistik
      </button>
    </div>
  )
}

export default WorldToggle








