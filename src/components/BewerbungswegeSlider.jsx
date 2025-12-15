import { useState, useEffect } from 'react'
import { pathsData } from '../data/pathsData'
import SliderControl from './SliderControl'
import PathContent from './PathContent'
import './BewerbungswegeSlider.css'

const BewerbungswegeSlider = ({ onPathChange: onPathChangeCallback }) => {
  const [activePath, setActivePath] = useState('heute')

  // Load from URL or localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlPath = params.get('weg')
    const storedPath = localStorage.getItem('bewerbungsweg')
    
    if (urlPath && (urlPath === 'heute' || urlPath === 'plan')) {
      setActivePath(urlPath)
    } else if (storedPath && (storedPath === 'heute' || storedPath === 'plan')) {
      setActivePath(storedPath)
    }
  }, [])

  // Persist to URL and localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    params.set('weg', activePath)
    window.history.replaceState({}, '', `?${params.toString()}`)
    localStorage.setItem('bewerbungsweg', activePath)
    
    // Analytics placeholder
    console.log('Path changed:', {
      path: activePath,
      label: pathsData[activePath].label,
      timestamp: new Date().toISOString()
    })
  }, [activePath])

  const handlePathChange = (newPath) => {
    setActivePath(newPath)
    if (onPathChangeCallback) {
      onPathChangeCallback(newPath)
    }
  }

  const handleCTA = (type, label, pathId) => {
    // Analytics placeholder
    console.log('CTA clicked:', {
      type,
      label,
      path: pathId,
      timestamp: new Date().toISOString()
    })
  }

  const currentPath = pathsData[activePath]

  return (
    <div className="bewerbungswege-slider-wrapper">
      <div className="bewerbungswege-header">
        <h2 className="h2 text-center mb-md">Wähle deinen Weg</h2>
        <p className="bewerbungswege-subline text-center mb-sm">
          Zwei Wege. Ein Ziel: REWE deinen Traum.
        </p>
        <p className="bewerbungswege-helper text-center mb-xl">
          Du kannst jederzeit wechseln.
        </p>
      </div>

      <SliderControl
        activePath={activePath}
        onPathChange={handlePathChange}
      />

      <div className="bewerbungswege-content">
        <PathContent
          path={currentPath}
          onSwitchPath={handlePathChange}
          onCTA={handleCTA}
        />
      </div>
    </div>
  )
}

export default BewerbungswegeSlider

