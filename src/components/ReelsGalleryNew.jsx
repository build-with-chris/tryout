import { useState, useRef, useEffect } from 'react'
import './ReelsGalleryNew.css'

const ReelsGalleryNew = () => {
  const [playingVideo, setPlayingVideo] = useState(null)
  const videoRefs = useRef({})

  const reels = [
    {
      id: 'reel-1',
      src: '/Reels/Reel1.mp4',
      title: 'REWE Reel 1'
    },
    {
      id: 'reel-2',
      src: '/Reels/Reel2.mp4',
      title: 'REWE Reel 2'
    },
    {
      id: 'reel-3',
      src: '/Reels/Reel3.mp4',
      title: 'REWE Reel 3'
    },
    {
      id: 'reel-4',
      src: '/Reels/Reel4.mp4',
      title: 'REWE Reel 4'
    },
    {
      id: 'reel-5',
      src: '/Reels/Reel5.mp4',
      title: 'REWE Reel 5'
    }
  ]

  // Pause all other videos when one starts playing
  useEffect(() => {
    reels.forEach((reel) => {
      const video = videoRefs.current[reel.id]
      if (video && playingVideo !== reel.id) {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [playingVideo])

  const handlePlayClick = (reelId) => {
    const video = videoRefs.current[reelId]
    
    if (!video) {
      console.error('Video element not found:', reelId)
      return
    }

    // If clicking the same video that's playing, pause it
    if (playingVideo === reelId) {
      video.pause()
      setPlayingVideo(null)
      return
    }

    // Play the clicked video
    setPlayingVideo(reelId)
    
    video.play().catch((error) => {
      console.error('Error playing video:', error)
      setPlayingVideo(null)
    })
  }

  const handleVideoPlay = (reelId) => {
    setPlayingVideo(reelId)
  }

  const handleVideoPause = (reelId) => {
    // Only reset if it was the playing video
    if (playingVideo === reelId) {
      setPlayingVideo(null)
    }
  }

  const handleVideoEnd = (reelId) => {
    setPlayingVideo(null)
    const video = videoRefs.current[reelId]
    if (video) {
      video.currentTime = 0
    }
  }

  return (
    <section className="reels-gallery-new-section">
      <div className="reels-gallery-new-container">
        <h2 className="reels-gallery-new-title">Bewegtbild</h2>
        
        <div className="reels-new-grid">
          {reels.map((reel) => {
            const isPlaying = playingVideo === reel.id
            
            return (
              <div
                key={reel.id}
                className={`reel-new-card ${isPlaying ? 'playing' : ''}`}
              >
                <div className="reel-new-video-wrapper">
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el
                    }}
                    className="reel-new-video"
                    src={reel.src}
                    loop={false}
                    muted={false}
                    playsInline
                    preload="metadata"
                    controls={isPlaying}
                    onPlay={() => handleVideoPlay(reel.id)}
                    onPause={() => handleVideoPause(reel.id)}
                    onEnded={() => handleVideoEnd(reel.id)}
                    onError={(e) => {
                      const video = e.target
                      console.error('Video error:', reel.id, {
                        error: video.error,
                        code: video.error?.code,
                        message: video.error?.message,
                        currentSrc: video.src
                      })
                    }}
                    onLoadedMetadata={() => {
                      console.log('Video metadata loaded:', reel.id)
                    }}
                    onCanPlay={() => {
                      console.log('Video can play:', reel.id)
                    }}
                  >
                    <source src={reel.src} type="video/mp4" />
                    Dein Browser unterstützt das Video-Tag nicht.
                  </video>
                  
                  {!isPlaying && (
                    <div 
                      className="reel-new-overlay"
                      onClick={() => handlePlayClick(reel.id)}
                    >
                      <div className="reel-new-play-button">
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.95" />
                          <path
                            d="M32 24L32 56L56 40L32 24Z"
                            fill="#CC071E"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ReelsGalleryNew

