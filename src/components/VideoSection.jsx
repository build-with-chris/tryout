import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './VideoSection.css'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [showVolumeControl, setShowVolumeControl] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const volumeControlRef = useRef(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setAnnouncement('Video pausiert')
      } else {
        videoRef.current.play()
        setAnnouncement('Video wird abgespielt')
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoClick = (e) => {
    // Don't trigger if clicking on controls or play button
    if (e.target.closest('.video-controls') || e.target.closest('.play-button')) {
      return
    }
    e.stopPropagation()
    handlePlayPause()
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume || 0.5
        setIsMuted(false)
        setAnnouncement('Ton eingeschaltet')
      } else {
        videoRef.current.volume = 0
        setIsMuted(true)
        setAnnouncement('Ton stummgeschaltet')
      }
    }
  }

  const handleVolumeControlFocus = () => {
    setShowVolumeControl(true)
  }

  const handleVolumeControlBlur = () => {
    // Delay to allow clicking on the slider
    setTimeout(() => {
      if (volumeControlRef.current && !volumeControlRef.current.contains(document.activeElement)) {
        setShowVolumeControl(false)
      }
    }, 200)
  }

  const handleFullscreenToggle = async () => {
    if (!videoRef.current) return

    try {
      if (!isFullscreen) {
        // Enter fullscreen
        if (videoRef.current.requestFullscreen) {
          await videoRef.current.requestFullscreen()
        } else if (videoRef.current.webkitRequestFullscreen) {
          await videoRef.current.webkitRequestFullscreen()
        } else if (videoRef.current.mozRequestFullScreen) {
          await videoRef.current.mozRequestFullScreen()
        } else if (videoRef.current.msRequestFullscreen) {
          await videoRef.current.msRequestFullscreen()
        }
        setAnnouncement('Vollbild aktiviert')
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen()
        } else if (document.mozCancelFullScreen) {
          await document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen()
        }
        setAnnouncement('Vollbild deaktiviert')
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error)
      setAnnouncement('Vollbild konnte nicht geändert werden')
    }
  }

  // Initialize video volume
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume
      videoRef.current.muted = isMuted
    }
  }, [])

  // Update progress and handle video events
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      if (video.duration) {
        const currentProgress = (video.currentTime / video.duration) * 100
        setProgress(currentProgress)
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
      setAnnouncement('Video beendet')
    }

    const handleTimeUpdate = () => {
      updateProgress()
    }

    const handleVolumeChange = () => {
      setVolume(video.volume)
      setIsMuted(video.muted || video.volume === 0)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('volumechange', handleVolumeChange)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('volumechange', handleVolumeChange)
    }
  }, [])

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      )
      setIsFullscreen(isCurrentlyFullscreen)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('MSFullscreenChange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
    }
  }, [])

  // Clear announcement after 3 seconds
  useEffect(() => {
    if (announcement) {
      const timer = setTimeout(() => setAnnouncement(''), 3000)
      return () => clearTimeout(timer)
    }
  }, [announcement])

  return (
    <section className="video-section" ref={containerRef}>
      <div className="container">
        <motion.div
          className="video-section-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="video-section-header">
            <h2 className="video-section-title">
              <span className="video-section-title-line">Vom Käse bis zur Wurscht – ALLES.</span>
            </h2>
            <p className="video-section-subtitle">
              Finde deinen Platz in der Region Süd
            </p>
          </div>

          {/* Video Container */}
          <div
            className="video-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleVideoClick}
            onTouchStart={(e) => {
              // Prevent double-tap zoom on mobile
              if (e.touches.length === 1) {
                setIsHovered(true)
              }
            }}
            onTouchEnd={() => setIsHovered(false)}
            role="button"
            tabIndex={0}
            aria-label="Video abspielen oder pausieren"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handlePlayPause()
              }
            }}
          >
            <video
              ref={videoRef}
              className="video-element"
              src="/REWE_IMAGEFILM_FIXED.mp4"
              playsInline
              loop={false}
              preload="metadata"
              aria-label="REWE Imagefilm - Vom Käse bis zur Wurscht – ALLES."
            />

            {/* Video Controls */}
            <div className="video-controls">
              {/* Play/Pause Overlay */}
              <div className={`video-overlay ${isPlaying ? 'playing' : ''}`}>
                {!isPlaying && (
                  <motion.div
                    className="play-button"
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                    role="button"
                    tabIndex={0}
                    aria-label={isPlaying ? 'Video pausieren' : 'Video abspielen'}
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePlayPause()
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        e.stopPropagation()
                        handlePlayPause()
                      }
                    }}
                  >
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle cx="32" cy="32" r="32" fill="rgba(204, 7, 30, 0.9)" />
                      <path
                        d="M26 20L26 44L42 32L26 20Z"
                        fill="white"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* Volume Control */}
              <div
                className={`volume-control-wrapper ${showVolumeControl || isHovered ? 'visible' : ''}`}
                ref={volumeControlRef}
                onFocus={handleVolumeControlFocus}
                onBlur={handleVolumeControlBlur}
                onMouseEnter={() => setShowVolumeControl(true)}
                onMouseLeave={() => {
                  if (document.activeElement !== volumeControlRef.current?.querySelector('button, input')) {
                    setShowVolumeControl(false)
                  }
                }}
              >
                <button
                  className="volume-button"
                  onClick={handleMuteToggle}
                  aria-label={isMuted ? 'Ton einschalten' : 'Ton stumm schalten'}
                  aria-pressed={isMuted}
                >
                  {isMuted || volume === 0 ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12Z" fill="currentColor"/>
                      <path d="M19 12C19 12.94 18.8 13.82 18.45 14.64L19.95 16.14C20.63 14.93 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 12.94 18.8 13.82 18.45 14.64L19.95 16.14C20.63 14.93 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="currentColor"/>
                    </svg>
                  ) : volume < 0.5 ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M18.5 12C18.5 10.23 17.5 8.71 16 7.97V10.18L18.45 12.63C18.48 12.43 18.5 12.22 18.5 12Z" fill="currentColor"/>
                      <path d="M5 9V15H9L14 20V4L9 9H5Z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.03C15.5 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C17.01 19.86 20 16.28 20 12C20 7.72 17.01 4.14 14 3.23Z" fill="currentColor"/>
                    </svg>
                  )}
                </button>
                <AnimatePresence>
                  {(showVolumeControl || isHovered) && (
                    <motion.div
                      className="volume-slider-container"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="volume-slider" className="sr-only">
                        Lautstärke
                      </label>
                      <input
                        id="volume-slider"
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="volume-slider"
                        aria-label="Lautstärke einstellen"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={Math.round((isMuted ? 0 : volume) * 100)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Fullscreen Button */}
              <div className={`fullscreen-control-wrapper ${isHovered || isPlaying ? 'visible' : ''}`}>
                <button
                  className="fullscreen-button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleFullscreenToggle()
                  }}
                  aria-label={isFullscreen ? 'Vollbild beenden' : 'Vollbild aktivieren'}
                  aria-pressed={isFullscreen}
                >
                  {isFullscreen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="currentColor"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            {isPlaying && (
              <div className="video-progress-container" role="progressbar" aria-label="Video-Fortschritt" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
                <div
                  className="video-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>

          {/* Screen Reader Announcements */}
          <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
            {announcement}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection
