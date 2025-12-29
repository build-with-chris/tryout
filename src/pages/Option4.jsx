import { useState, useEffect, useRef } from 'react'
import './Option4.css'
import { Hero234aOption4 } from '@/components/hero234a-option4'
import AudioPlayer from '@/components/AudioPlayer'
import ValuesSection from '@/components/ValuesSection'
import PathSelector from '@/components/PathSelector'

const Option4 = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const [progress, setProgress] = useState({})
  const [audioDurations, setAudioDurations] = useState({})
  const audioRefs = useRef({})

  // Titel/Beschreibungen für jede Audiospur
  const audioTitles = [
    "Was Mitarbeiter ihrem 18-jährigen Ich empfehlen",
    "Sie hatten ihren ersten Tag. Wann kommst du an Board?"
  ]

  // Story-Objekte mit echten Audiodateien
  const audioStories = [
    {
      id: 'audio1',
      audioSrc: '/Empfehlung an 18-jähriges Ich.mp3',
      audioDuration: 20 // Wird dynamisch aktualisiert
    },
    {
      id: 'audio2',
      audioSrc: '/erster Arbeitstag.mp3',
      audioDuration: 20 // Wird dynamisch aktualisiert
    }
  ]

  // Lade Audio-Dauer beim Mount
  useEffect(() => {
    audioStories.forEach((story) => {
      const audio = new Audio(story.audioSrc)
      audio.addEventListener('loadedmetadata', () => {
        setAudioDurations(prev => ({
          ...prev,
          [story.id]: Math.floor(audio.duration)
        }))
      })
      audioRefs.current[story.id] = audio
    })

    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) {
          audio.pause()
          audio.src = ''
        }
      })
    }
  }, [])

  // Progress-Tracking für jede Story
  useEffect(() => {
    if (!currentlyPlaying) {
      return
    }
    
    const story = audioStories.find(s => s.id === currentlyPlaying)
    if (!story) return
    
    const duration = (audioDurations[currentlyPlaying] || story.audioDuration) * 1000 // Convert to ms
    
    const interval = setInterval(() => {
      const audio = audioRefs.current[currentlyPlaying]
      if (audio && !audio.paused) {
        const currentTime = audio.currentTime
        const newProgress = Math.min((currentTime / (duration / 1000)) * 100, 100)
        setProgress(prev => ({
          ...prev,
          [currentlyPlaying]: newProgress
        }))

        // Complete at 100%
        if (newProgress >= 100 || audio.ended) {
          clearInterval(interval)
          setProgress(prev => ({
            ...prev,
            [currentlyPlaying]: 100
          }))
          setCurrentlyPlaying(null)
        }
      }
    }, 100)

    return () => clearInterval(interval)
  }, [currentlyPlaying, audioDurations])

  const handlePlayPause = (storyId) => {
    const audio = audioRefs.current[storyId]
    
    if (currentlyPlaying === storyId) {
      // Pause
      if (audio) {
        audio.pause()
      }
      setCurrentlyPlaying(null)
    } else {
      // Stop other audio if playing
      if (currentlyPlaying && audioRefs.current[currentlyPlaying]) {
        audioRefs.current[currentlyPlaying].pause()
        audioRefs.current[currentlyPlaying].currentTime = 0
      }
      
      // Play new audio
      if (audio) {
        audio.play().catch(err => {
          console.error('Error playing audio:', err)
        })
      }
      setCurrentlyPlaying(storyId)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
    }
  }

  return (
    <div className="option4-page">
      <Hero234aOption4 />
      
      <section className="option4-audio-section section">
        <div className="container">
          <div className="option4-audio-header">
            <h2 className="h2 text-center mb-md">Marktstimmen</h2>
            <p className="option4-audio-subheadline text-center mb-lg">
              Echte Geschichten von echten Menschen.
            </p>
            <p className="option4-audio-helper text-center mb-xl">
              15–25 Sekunden. Einfach reinhören.
            </p>
          </div>

          <div className="option4-audio-grid">
            {audioStories.map((story, index) => {
              const duration = audioDurations[story.id] || story.audioDuration
              const storyWithDuration = { ...story, audioDuration: duration }
              
              return (
                <div key={story.id} className="option4-audio-item">
                  <h3 className="option4-audio-title">
                    {audioTitles[index]}
                  </h3>
                  <AudioPlayer
                    story={storyWithDuration}
                    isPlaying={currentlyPlaying === story.id}
                    progress={progress[story.id] || 0}
                    onPlayPause={() => handlePlayPause(story.id)}
                    onKeyDown={handleKeyDown}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ValuesSection />

      <PathSelector />

    </div>
  )
}

export default Option4

