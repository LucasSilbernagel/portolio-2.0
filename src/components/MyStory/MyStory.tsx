import { Link, graphql, useStaticQuery } from 'gatsby'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import './MyStory.css'
import { MyStoryQuery } from '../../../graphql-types'
import { PortableText } from '@portabletext/react'
import ImageCarousel from './ImageCarousel/ImageCarousel'

const MyStory = () => {
  const data: MyStoryQuery = useStaticQuery(graphql`
    query MyStory {
      sanityMyStory {
        _rawAboutMe
        myStoryImageCarousel {
          image {
            asset {
              gatsbyImageData
            }
          }
          altText
        }
      }
    }
  `)

  const imageCarouselItems = data.sanityMyStory?.myStoryImageCarousel

  return (
    <div data-testid="my-story" className="MyStory mb-36">
      <h1>My story</h1>
      <section className="mt-24">
        <div className="MyStory__body">
          <PortableText
            value={data.sanityMyStory?._rawAboutMe}
            components={{
              marks: {
                link: ({ value, children }) => {
                  const { href } = value
                  return href.includes('http') ? (
                    <a
                      className="MyStory__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={href}
                    >
                      {children}
                    </a>
                  ) : (
                    <Link className="MyStory__link" to={href}>
                      {children}
                    </Link>
                  )
                },
              },
            }}
          />
        </div>
        <ImageCarousel imageCarouselItems={imageCarouselItems} />
        <p className="text-slate-2 mb-6 md:text-center">
          I’m always happy to make more connections, so feel free to reach out!
        </p>
        <div className="w-full flex justify-center">
          <Link to="/contact" className="AccentButton relative z-10">
            Say hello
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MyStory
