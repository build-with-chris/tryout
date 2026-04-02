import './Option4.css'
import { Hero234aOption4 } from '@/components/hero234a-option4'
import { Hero244 } from '@/components/hero244'
import VideoSection from '@/components/VideoSection'
import { Feature284 } from '@/components/feature284'
import PathSelector from '@/components/PathSelector'
import { Feature268 } from '@/components/feature268'
import { Testimonial25 } from '@/components/testimonial25'

const Option4 = () => {

  return (
    <div className="option4-page">
      <Hero234aOption4 />

      <VideoSection />

      <PathSelector />

      <Hero244 />

      <h2 className="h2 text-center mb-0 pt-32" style={{ color: '#000000' }}>Bei REWE Süd arbeitet&apos;s sich gut. Punkt.</h2>
      <Feature284 />

      <Feature268 />

      {/* Testimonial Section */}
      <Testimonial25 variant="light" />

    </div>
  )
}

export default Option4

