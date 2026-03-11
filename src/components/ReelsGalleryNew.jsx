import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'
import './ReelsGalleryNew.css'

const REELS_PER_PAGE = 5
const TOTAL_REELS = 50

const getBaseUrl = () => {
  const base = import.meta.env.BASE_URL ?? ''
  return base.endsWith('/') ? base.slice(0, -1) : base
}

const buildReels = () => {
  const baseUrl = getBaseUrl()
  const reels = []
  for (let i = 1; i <= TOTAL_REELS; i++) {
    reels.push({
      id: `reel-${i}`,
      src: `${baseUrl}/REWS_Reels_final/${i}.mp4`,
      title: `REWE Reel #${i}`,
    })
  }
  return reels
}

const allReels = buildReels()

const ReelsGalleryNew = () => {
  const [playingVideo, setPlayingVideo] = useState(null)
  const [page, setPage] = useState(0)
  const [fullscreenReelId, setFullscreenReelId] = useState(null)
  const videoRefs = useRef({})
  const fullscreenRefs = useRef({})
  const pendingFullscreenRef = useRef(false)

  const maxPage = Math.ceil(TOTAL_REELS / REELS_PER_PAGE) - 1
  const reelsOnPage = allReels.slice(page * REELS_PER_PAGE, page * REELS_PER_PAGE + REELS_PER_PAGE)

  useEffect(() => {
    const onFullscreenChange = () => {
      const el = document.fullscreenElement
      const reelId = el?.dataset?.reelId ?? null
      setFullscreenReelId(reelId)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  useEffect(() => {
    allReels.forEach((reel) => {
      const video = videoRefs.current[reel.id]
      if (video && playingVideo !== reel.id) {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [playingVideo])

  useEffect(() => {
    if (!playingVideo || !pendingFullscreenRef.current) return
    const video = videoRefs.current[playingVideo]
    const wrapper = fullscreenRefs.current[playingVideo]
    if (video) video.play().catch(() => {})
    if (wrapper) {
      const t = setTimeout(() => {
        wrapper.requestFullscreen?.()
        pendingFullscreenRef.current = false
      }, 80)
      return () => clearTimeout(t)
    }
    pendingFullscreenRef.current = false
  }, [playingVideo, page])

  const handlePlayClick = (reelId) => {
    const video = videoRefs.current[reelId]
    if (!video) return
    if (playingVideo === reelId) {
      video.pause()
      setPlayingVideo(null)
      return
    }
    setPlayingVideo(reelId)
    video.play().catch(() => setPlayingVideo(null))
  }

  const handleVideoPlay = (reelId) => setPlayingVideo(reelId)
  const handleVideoPause = (reelId) => {
    if (playingVideo === reelId) setPlayingVideo(null)
  }
  const handleVideoEnd = (reelId) => {
    setPlayingVideo(null)
    const video = videoRefs.current[reelId]
    if (video) video.currentTime = 0
  }

  const goPrev = () => setPage((p) => Math.max(0, p - 1))
  const goNext = () => setPage((p) => Math.min(maxPage, p + 1))

  const handleFullscreen = (reelId) => {
    const wrapper = fullscreenRefs.current[reelId]
    if (!wrapper) return
    if (document.fullscreenElement) {
      document.exitFullscreen?.()
      return
    }
    wrapper.requestFullscreen?.()
  }

  const currentIndex = playingVideo ? allReels.findIndex((r) => r.id === playingVideo) : -1
  const goToPrevReel = () => {
    if (currentIndex <= 0) return
    const prevReel = allReels[currentIndex - 1]
    document.exitFullscreen?.()
    setPlayingVideo(prevReel.id)
    setPage(Math.floor((currentIndex - 1) / REELS_PER_PAGE))
    pendingFullscreenRef.current = true
  }
  const goToNextReel = () => {
    if (currentIndex < 0 || currentIndex >= allReels.length - 1) return
    const nextReel = allReels[currentIndex + 1]
    document.exitFullscreen?.()
    setPlayingVideo(nextReel.id)
    setPage(Math.floor((currentIndex + 1) / REELS_PER_PAGE))
    pendingFullscreenRef.current = true
  }

  return (
    <section className="reels-gallery-new-section">
      <div className="reels-gallery-new-container">
        <h2 className="reels-gallery-new-title">Bewegtbild</h2>

        <div className="reels-new-slider">
          <button
            type="button"
            className="reels-new-arrow reels-new-arrow-prev"
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Vorherige 5 Reels"
          >
            <ChevronLeft className="reels-new-arrow-icon" />
          </button>

          <div className="reels-new-grid reels-new-grid-five">
            {reelsOnPage.map((reel) => {
              const isPlaying = playingVideo === reel.id
              const reelNumber = reel.id.replace('reel-', '')
              return (
                <div key={reel.id} className="reel-new-card-wrapper">
                  <h3 className="reel-new-card-title">#{reelNumber}</h3>
                  <div
                    className={`reel-new-card ${isPlaying ? 'playing' : ''}`}
                  >
                    <div
                      className="reel-new-fs-wrapper"
                      data-reel-id={reel.id}
                      ref={(el) => { if (el) fullscreenRefs.current[reel.id] = el }}
                    >
                    <div className="reel-new-video-wrapper">
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[reel.id] = el
                          }
                        }}
                        className="reel-new-video"
                        src={reel.src}
                        loop={false}
                        muted={false}
                        playsInline
                        preload="auto"
                        controls={isPlaying}
                        controlsList={isPlaying ? "nodownload nofullscreen" : undefined}
                        onPlay={() => handleVideoPlay(reel.id)}
                        onPause={() => handleVideoPause(reel.id)}
                        onEnded={() => handleVideoEnd(reel.id)}
                        onLoadedData={(e) => {
                          e.target.currentTime = 0
                        }}
                        onError={(e) => console.error('Video error:', reel.id, e.target?.error)}
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
                          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.95" />
                            <path d="M32 24L32 56L56 40L32 24Z" fill="#CC071E" />
                          </svg>
                        </div>
                      </div>
                    )}
                    </div>
                    {isPlaying && (
                      <button
                        type="button"
                        className="reel-new-fullscreen-btn"
                        onClick={(e) => { e.stopPropagation(); handleFullscreen(reel.id) }}
                        aria-label="Vollbild (Hochkant)"
                      >
                        <Maximize2 className="reel-new-fullscreen-icon" />
                      </button>
                    )}
                    {fullscreenReelId === reel.id && (
                      <>
                        <button
                          type="button"
                          className="reel-new-fs-exit-btn"
                          onClick={(e) => { e.stopPropagation(); document.exitFullscreen?.() }}
                          aria-label="Vollbild beenden"
                        >
                          <Minimize2 className="reel-new-fs-exit-icon" />
                          <span className="reel-new-fs-exit-text">Vollbild beenden</span>
                        </button>
                      <div className="reel-new-fs-nav">
                        <button
                          type="button"
                          className="reel-new-fs-nav-btn reel-new-fs-nav-prev"
                          onClick={(e) => { e.stopPropagation(); goToPrevReel() }}
                          disabled={currentIndex <= 0}
                          aria-label="Vorheriges Video"
                        >
                          <ChevronLeft className="reel-new-fs-nav-icon" />
                        </button>
                        <button
                          type="button"
                          className="reel-new-fs-nav-btn reel-new-fs-nav-next"
                          onClick={(e) => { e.stopPropagation(); goToNextReel() }}
                          disabled={currentIndex >= allReels.length - 1}
                          aria-label="Nächstes Video"
                        >
                          <ChevronRight className="reel-new-fs-nav-icon" />
                        </button>
                      </div>
                      </>
                    )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            type="button"
            className="reels-new-arrow reels-new-arrow-next"
            onClick={goNext}
            disabled={page >= maxPage}
            aria-label="Nächste 5 Reels"
          >
            <ChevronRight className="reels-new-arrow-icon" />
          </button>
        </div>

        <p className="reels-new-pagination">
          {page * REELS_PER_PAGE + 1}–{Math.min((page + 1) * REELS_PER_PAGE, TOTAL_REELS)} von {TOTAL_REELS}
        </p>
      </div>
    </section>
  )
}

export default ReelsGalleryNew
