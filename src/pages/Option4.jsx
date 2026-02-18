import './Option4.css'
import { Hero234aOption4 } from '@/components/hero234a-option4'
import { Hero244 } from '@/components/hero244'
import VideoSection from '@/components/VideoSection'
import { CaseStudies5 } from '@/components/case-studies5'
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

      <Hero244 />

      <CaseStudies5 />

      <Integration8 />

      <Feature268 />

      {/* Testimonial Section */}
      <Testimonial25 variant="light" />

    </div>
  )
}

export default Option4

