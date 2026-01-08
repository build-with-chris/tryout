import { useEffect } from 'react'
import './ImageLightbox.css'

const ImageLightbox = ({ image, isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext()
      } else if (e.key === 'ArrowLeft' && hasPrevious) {
        onPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, hasNext, hasPrevious, onClose, onNext, onPrevious])

  if (!isOpen || !image) return null

  return (
    <div 
      className="image-lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Bildansicht"
    >
      <div 
        className="image-lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="image-lightbox-close"
          onClick={onClose}
          aria-label="Schließen"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {hasPrevious && (
          <button
            className="image-lightbox-nav image-lightbox-nav-prev"
            onClick={onPrevious}
            aria-label="Vorheriges Bild"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        <div className="image-lightbox-image-wrapper">
          <img
            src={image.src}
            alt={image.alt}
            className="image-lightbox-image"
          />
        </div>

        {hasNext && (
          <button
            className="image-lightbox-nav image-lightbox-nav-next"
            onClick={onNext}
            aria-label="Nächstes Bild"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default ImageLightbox

