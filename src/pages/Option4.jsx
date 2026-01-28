import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Option4.css'
import { Hero234aOption4 } from '@/components/hero234a-option4'
import AudioPlayer from '@/components/AudioPlayer'
import ValuesSection from '@/components/ValuesSection'
import PathSelector from '@/components/PathSelector'
import { Integration8 } from '@/components/integration8'
import { Feature268 } from '@/components/feature268'

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

  // Beschreibungen für jede Audiospur
  const audioDescriptions = [
    "Echte Anerkennung statt leere Versprechen: Bei REWE zählt Einsatz – und er zahlt sich aus. Drei Kolleg:innen erzählen, warum sie ihren Start keine Sekunde bereuen (außer, dass er nicht früher war).",
    "Der erste Tag ist aufregend – ganz normal. Entscheidend ist, was danach kommt: ein Team, das dich mitnimmt, dir den Rücken stärkt und dich ankommen lässt."
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

      <PathSelector />

      <ValuesSection />

      <Integration8 />

      <Feature268 />

      <section className="option4-audio-section section relative">
        {/* Hintergrund-Bilder */}
        <div className="option4-images-background">
          <motion.div
            className="option4-image option4-image-1"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2, delay: 0.1 }}
          >
            <img src="/Marktstimmen Bilder/links.jpg" alt="" />
          </motion.div>
          <div className="option4-speech-bubble">
            <img src="/REWE deinen Traum.png" alt="REWE deinen Traum" />
          </div>
          <motion.div
            className="option4-image option4-image-4"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2, delay: 0.25 }}
          >
            <img src="/Marktstimmen Bilder/rewe_logstik_sued_foto-craft_8323.jpg" alt="" />
          </motion.div>
          <motion.div
            className="option4-image option4-image-5"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2, delay: 0.1 }}
          >
            <img src="/Marktstimmen Bilder/rewe_logstik_sued_foto-craft_8531.jpg" alt="" />
          </motion.div>
          <motion.div
            className="option4-image option4-image-6"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2, delay: 0.3 }}
          >
            <img src="/Marktstimmen Bilder/rewe_logstik_sued_foto-craft_8774.jpg" alt="" />
          </motion.div>
          <motion.div
            className="option4-image option4-image-7"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2, delay: 0.35 }}
          >
            <img src="/Marktstimmen Bilder/rewe_logstik_sued_foto-craft_8831.jpg" alt="" />
          </motion.div>
          <motion.div
            className="option4-image option4-image-8"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2, delay: 0.2 }}
          >
            <img src="/Marktstimmen Bilder/rewe_logstik_sued_foto-craft_9057.jpg" alt="" />
          </motion.div>
        </div>

        <div className="container relative z-10">
          <div className="option4-audio-header">
            <h2 className="h2 text-center mb-md">Wann kommst du on Board?</h2>
            <p className="option4-audio-subheadline text-center mb-lg">
              Über Teamgefühl, Entwicklung und den Moment, in dem's „passt".
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
                  <p className="option4-audio-description">
                    {audioDescriptions[index]}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Option4

