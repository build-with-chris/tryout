import './Option4.css'
import { Hero234aOption4 } from '@/components/hero234a-option4'
import { Hero244 } from '@/components/hero244'
import VideoSection from '@/components/VideoSection'
import { BenefitsSpotlight } from '@/components/BenefitsSpotlight'
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

      <BenefitsSpotlight />

      <Feature268 />

      {/* Testimonial Section */}
      <Testimonial25 variant="light" />

    </div>
  )
}

export default Option4

