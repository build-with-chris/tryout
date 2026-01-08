import { useState, useRef, useEffect } from 'react'
import './ReelsGallery.css'

const ReelsGallery = () => {
  const [playingVideo, setPlayingVideo] = useState(null)
  const videoRefs = useRef({})

  const reels = [
    {
      id: 'reel-30',
      src: '/Reels/REWE_SMA_REEL%2330_wsubtitle.mp4', // # encoded as %23
      title: 'REWE Reel #30'
    },
    {
      id: 'reel-43',
      src: '/Reels/REWE_SMA_REEL%2343_wsubtitle.mp4', // # encoded as %23
      title: 'REWE Reel #43'
    },
    {
      id: 'reel-44',
      src: '/Reels/REWE_SMA_REEL%2344.mp4', // # encoded as %23
      title: 'REWE Reel #44'
    },
    {
      id: 'reel-47',
      src: '/Reels/REWE_SMA_REEL%2347.mp4', // # encoded as %23
      title: 'REWE Reel #47'
    },
    {
      id: 'reel-50',
      src: '/Reels/REWE_SMA_REEL%2350.mp4', // # encoded as %23
      title: 'REWE Reel #50'
    }
  ]

  // Pause all other videos when one starts playing
  useEffect(() => {
    Object.keys(videoRefs.current).forEach((reelId) => {
      if (reelId !== playingVideo && videoRefs.current[reelId]) {
        const video = videoRefs.current[reelId]
        video.pause()
        video.currentTime = 0
      }
    })
  }, [playingVideo])

  const handleCardClick = (reelId, e) => {
    // Don't stop propagation if clicking on the play button
    if (e.target.closest('.reel-play-button')) {
      e.stopPropagation()
    }
    
    const video = videoRefs.current[reelId]
    
    if (!video) {
      console.error('Video ref not found for:', reelId)
      return
    }

    if (playingVideo === reelId) {
      // Pause if already playing
      video.pause()
      setPlayingVideo(null)
    } else {
      // Play this video and pause others
      setPlayingVideo(reelId)
      const playPromise = video.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing
            console.log('Video started playing:', reelId)
          })
          .catch((error) => {
            console.error('Error playing video:', error)
            setPlayingVideo(null)
          })
      }
    }
  }
  
  const handlePlayButtonClick = (reelId, e) => {
    e.stopPropagation()
    const video = videoRefs.current[reelId]
    
    if (!video) {
      console.error('Video ref not found for:', reelId)
      return
    }

    // Play this video and pause others
    setPlayingVideo(reelId)
    const playPromise = video.play()
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Video started playing:', reelId)
        })
        .catch((error) => {
          console.error('Error playing video:', error)
          setPlayingVideo(null)
        })
    }
  }

  const handleVideoPlay = (reelId) => {
    setPlayingVideo(reelId)
  }

  const handleVideoPause = (reelId) => {
    // Don't reset playingVideo on pause - user might have paused manually
    // Only reset if it's not the currently playing video
  }

  const handleVideoEnd = (reelId) => {
    setPlayingVideo(null)
    if (videoRefs.current[reelId]) {
      videoRefs.current[reelId].currentTime = 0
    }
  }

  const handleVideoLoaded = (reelId) => {
    console.log('Video loaded:', reelId)
  }

  const handleVideoError = (reelId, e) => {
    console.error('Video error for:', reelId, e)
  }

  return (
    <section className="reels-gallery-section">
      <div className="reels-gallery-container">
        <h2 className="reels-gallery-title">Bewegtbild</h2>
        
        <div className="reels-grid">
          {reels.map((reel) => {
            const isPlaying = playingVideo === reel.id
            
            return (
              <div
                key={reel.id}
                className={`reel-card ${isPlaying ? 'playing' : ''}`}
                onClick={(e) => handleCardClick(reel.id, e)}
              >
                <div className="reel-video-wrapper">
                  <video
                    ref={(el) => {
                      if (el) {
                        videoRefs.current[reel.id] = el
                      }
                    }}
                    className="reel-video"
                    src={reel.src}
                    loop={false}
                    muted={false}
                    playsInline
                    preload="metadata"
                    controls={isPlaying}
                    onPlay={() => {
                      console.log('Video playing:', reel.id)
                      handleVideoPlay(reel.id)
                    }}
                    onPause={() => {
                      console.log('Video paused:', reel.id)
                      handleVideoPause(reel.id)
                    }}
                    onEnded={() => handleVideoEnd(reel.id)}
                    onLoadedData={() => {
                      console.log('Video loaded:', reel.id, reel.src)
                      handleVideoLoaded(reel.id)
                    }}
                    onError={(e) => {
                      console.error('Video error:', reel.id, reel.src, e)
                      handleVideoError(reel.id, e)
                    }}
                    onCanPlay={() => {
                      console.log('Video can play:', reel.id)
                    }}
                    onLoadStart={() => {
                      console.log('Video load started:', reel.id, reel.src)
                    }}
                    onClick={(e) => {
                      // Don't stop propagation - let video controls work
                      if (isPlaying) {
                        e.stopPropagation()
                      }
                    }}
                  >
                    <source src={reel.src} type="video/mp4" />
                    Dein Browser unterstützt das Video-Tag nicht.
                  </video>
                  
                  {!isPlaying && (
                    <>
                      <div className="reel-preview-overlay" />
                      <div 
                        className="reel-play-button" 
                        onClick={(e) => handlePlayButtonClick(reel.id, e)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            handlePlayButtonClick(reel.id, e)
                          }
                        }}
                      >
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 60 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9" />
                          <path
                            d="M24 18L24 42L42 30L24 18Z"
                            fill="#CC071E"
                          />
                        </svg>
                      </div>
                    </>
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

export default ReelsGallery

