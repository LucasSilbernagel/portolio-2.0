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
    <div data-testid="my-story" className="mb-36 MyStory">
      <h1>My story</h1>
      <h2 className="AccentFont">
        Learn more about my background, my interests, and how I became a
        software developer.
      </h2>
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
        <p className="mb-6 text-slate-2 md:text-center">
          I’m always happy to make more connections, so feel free to reach out!
        </p>
        <div className="flex justify-center w-full">
          <Link to="/contact" className="relative z-10 AccentButton">
            Say hello
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MyStory
