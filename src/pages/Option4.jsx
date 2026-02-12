import './Option4.css'
import { Hero234aOption4 } from '@/components/hero234a-option4'
import VideoSection from '@/components/VideoSection'
import ValuesSection from '@/components/ValuesSection'
import PathSelector from '@/components/PathSelector'
import { Integration8 } from '@/components/integration8'
import { Feature268 } from '@/components/feature268'
import { Testimonial25 } from '@/components/testimonial25'

const Option4 = () => {

  return (
    <div className="option4-page">
      <Hero234aOption4 />

      <VideoSection />

      <PathSelector />

      <ValuesSection />

      <Integration8 />

      <Feature268 />

      {/* Testimonial Section */}
      <Testimonial25 variant="light" />

    </div>
  )
}

export default Option4

