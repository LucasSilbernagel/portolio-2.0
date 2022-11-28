import { StaticImage } from 'gatsby-plugin-image'
import './AboutSection.css'

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <h3 className="SectionHeader">About Me</h3>
      <div className="flex gap-12 flex-col xl:flex-row">
        <div>
          <p>
            Hi, I&apos;m Lucas! I&apos;m a front-end developer based in Toronto,
            Canada. I specialize in transforming designs, prototypes, and ideas
            into delightful user interfaces.
          </p>
          <p>
            I&apos;ve been working in the industry since 2020, when I graduated
            from web development bootcamp at Juno College. The logical side of
            my brain loves solving tricky coding problems and software
            architecture challenges, while the creative side of my brain loves
            converting designs into beautiful and functional web pages that
            people use every day. I&apos;m also passionate about making the web
            a more accessible place, one page at a time.
          </p>
        </div>
        <div className="PhotoContainer">
          <StaticImage
            alt="Lucas Silbernagel"
            src="../../images/profile-photo-wide.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutSection
