import { Hero234 } from '@/components/hero234'
import { Feature284 } from '@/components/feature284'

const row0Images = Array.from({ length: 8 }, (_, i) => `/Row0/${i}.jpg`)
const row1Images = Array.from({ length: 8 }, (_, i) => `/Row1/${i}.jpg`)
const alternativenGalleryImages = [row0Images, row1Images]

const Alternativen = () => {
  return (
    <div className="alternativen-page">
      <Hero234 galleryImages={alternativenGalleryImages} overlayVariant="rewe" />
      <Feature284 />
    </div>
  )
}

export default Alternativen
