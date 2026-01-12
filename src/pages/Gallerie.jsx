import './Gallerie.css'
import ReelsGalleryNew from '../components/ReelsGalleryNew'
import { Gallery25 } from '../components/gallery25'
import { Gallery25Logistik } from '../components/Gallery25Logistik'

const Gallerie = () => {
  try {
    return (
      <div className="gallerie-page">
        <div className="gallerie-container">
          <header className="gallerie-header">
            <h1 className="gallerie-title">Galerie</h1>
            <p className="gallerie-subtitle">
              Bilder und Reels von unserem Team und unseren Märkten
            </p>
          </header>

          <div className="gallerie-content">
            <ReelsGalleryNew />
            
            <div className="gallerie-shooting-section">
              <h2 className="gallerie-shooting-title">Marktbilder</h2>
              <Gallery25 />
            </div>

            <div className="gallerie-shooting-section">
              <h2 className="gallerie-shooting-title">Logistikbilder</h2>
              <Gallery25Logistik />
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error in Gallerie component:', error)
    return (
      <div className="gallerie-page">
        <div className="gallerie-container">
          <header className="gallerie-header">
            <h1 className="gallerie-title">Galerie</h1>
            <p className="gallerie-subtitle">
              Fehler beim Laden der Galerie
            </p>
          </header>
        </div>
      </div>
    )
  }
}

export default Gallerie

