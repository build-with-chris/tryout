import { useState, useRef, useEffect } from 'react'
import './SliderControl.css'

const SliderControl = ({ activePath, onPathChange }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const sliderRef = useRef(null)
  const trackRef = useRef(null)

  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    setDragStart(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !trackRef.current) return

    const rect = trackRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    const percentage = (x / width) * 100

    // Snap to nearest endpoint
    if (percentage < 50) {
      if (activePath !== 'heute') {
        onPathChange('heute')
      }
    } else {
      if (activePath !== 'plan') {
        onPathChange('plan')
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      const moveHandler = (e) => handleMouseMove(e)
      const upHandler = () => handleMouseUp()
      
      document.addEventListener('mousemove', moveHandler)
      document.addEventListener('mouseup', upHandler)
      return () => {
        document.removeEventListener('mousemove', moveHandler)
        document.removeEventListener('mouseup', upHandler)
      }
    }
  }, [isDragging, activePath, onPathChange])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault()
      const newPath = e.key === 'ArrowLeft' ? 'heute' : 'plan'
      onPathChange(newPath)
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      const newPath = activePath === 'heute' ? 'plan' : 'heute'
      onPathChange(newPath)
    }
  }

  const handleTrackClick = (e) => {
    if (e.target === trackRef.current || e.target === sliderRef.current) {
      const rect = trackRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const width = rect.width
      const newPath = (x / width) < 0.5 ? 'heute' : 'plan'
      onPathChange(newPath)
    }
  }

  const position = activePath === 'heute' ? 0 : 100

  return (
    <div className="slider-control-container">
      <div
        className="slider-track"
        ref={trackRef}
        onClick={handleTrackClick}
        role="switch"
        aria-label="Bewerbungsweg wählen"
        aria-checked={activePath === 'plan'}
        aria-valuetext={activePath === 'heute' ? 'Heute loslegen' : 'Weiterkommen mit Plan'}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="slider-labels">
          <span className={`slider-label ${activePath === 'heute' ? 'active' : ''}`}>
            Heute loslegen
          </span>
          <span className={`slider-label ${activePath === 'plan' ? 'active' : ''}`}>
            Weiterkommen mit Plan
          </span>
        </div>
        <div className="slider-rail">
          <div
            className="slider-handle"
            ref={sliderRef}
            style={{ left: `${position}%` }}
            onMouseDown={handleMouseDown}
            role="button"
            aria-label={`Zu ${activePath === 'heute' ? 'Weiterkommen mit Plan' : 'Heute loslegen'} wechseln`}
            tabIndex={0}
          >
            <div className="slider-handle-inner"></div>
          </div>
          <div
            className="slider-fill"
            style={{ width: `${position}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default SliderControl

