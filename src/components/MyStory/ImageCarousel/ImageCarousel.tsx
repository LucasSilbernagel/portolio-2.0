import { GatsbyImage } from 'gatsby-plugin-image'
import { Carousel } from 'react-responsive-carousel'

interface ImageCarouselProps {
  imageCarouselItems?:
    | ({
        altText?: string | null
        image?: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          asset?: { gatsbyImageData?: any | null } | null
        } | null
      } | null)[]
    | null
}

const ImageCarousel = (props: ImageCarouselProps) => {
  const { imageCarouselItems } = props

  if (imageCarouselItems && imageCarouselItems.length > 0) {
    return (
      <div className="MyStory__carousel">
        <Carousel
          autoPlay
          infiniteLoop
          interval={7000}
          showStatus={false}
          showThumbs={false}
        >
          {imageCarouselItems.map((carouselItem, index) => {
            return (
              <div
                key={`image-carousel-item-${index}`}
                className="PhotoContainer"
              >
                {carouselItem?.image?.asset?.gatsbyImageData && (
                  <GatsbyImage
                    alt={String(carouselItem.altText)}
                    image={carouselItem.image.asset.gatsbyImageData}
                  />
                )}
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  } else return null
}

export default ImageCarousel
