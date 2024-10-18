import { StaticImage } from 'gatsby-plugin-image'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './AboutSection.css'
import { AboutMeQuery } from '../../../graphql-types'
import { PortableText } from '@portabletext/react'

const AboutSection = () => {
  const data: AboutMeQuery = useStaticQuery(graphql`
    query AboutMe {
      sanityHomepage {
        _rawAboutMe
      }
    }
  `)

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="AboutSection"
        id="about-section"
        data-testid="about-section"
      >
        <h3 className="SectionHeader" aria-label="About Me">
          About Me
        </h3>
        <div className="flex xl:flex-row flex-col gap-12">
          <div>
            <div data-testid="about-text" className="max-w-screen-sm">
              <PortableText value={data.sanityHomepage?._rawAboutMe} />
            </div>
            <div className="flex justify-center w-full">
              <Link to="/my-story" className="AccentButton">
                Read my story
              </Link>
            </div>
          </div>
          <div className="mx-auto xl:ml-0 w-auto xl:w-max max-w-[300px]">
            <div className="PhotoContainer">
              <div>
                <StaticImage
                  alt="Lucas Silbernagel"
                  src="../../images/profile-photo.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default AboutSection
