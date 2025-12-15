import { useState, useEffect } from 'react'
import './AudioPlayer.css'

const AudioPlayer = ({ story, isPlaying, progress, onPlayPause, onKeyDown }) => {
  const [currentTime, setCurrentTime] = useState(0)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = Math.min(prev + 0.1, story.audioDuration)
          return newTime
        })
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isPlaying, story.audioDuration])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="audio-player">
      <button
        className="audio-play-button"
        onClick={onPlayPause}
        onKeyDown={onKeyDown}
        aria-label={isPlaying ? 'Pause' : 'Abspielen'}
        aria-pressed={isPlaying}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </button>

      <div className="audio-progress-container">
        <div className="audio-progress-bar">
          <div 
            className="audio-progress-fill"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Audio-Fortschritt"
          />
          {!prefersReducedMotion && isPlaying && (
            <div className="audio-waveform">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="waveform-bar"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    height: `${20 + Math.random() * 60}%`
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <div className="audio-time">
          <span>{formatTime(currentTime)}</span>
          <span className="audio-duration">/{formatTime(story.audioDuration)}</span>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer

