import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'
import './AboutSection.css'
import SmoothCollapse from 'react-smooth-collapse'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const AboutSection = () => {
  const [isShowingMore, setIsShowingMore] = useState(false)

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="AboutSection"
        id="about-section"
        data-testid="about-section"
      >
        <h3 className="SectionHeader">About Me</h3>
        <div className="flex gap-12 flex-col xl:flex-row">
          <div>
            <p>
              Hi, I&apos;m Lucas! I&apos;m a Toronto-based front-end developer
              specializing in the craft of user interfaces that truly make a
              difference. With a strong focus on accessibility and user-centric
              design, I bring mockups and ideas to life in the form of beautiful
              web pages and apps that seamlessly connect users with digital
              experiences.
            </p>
            <p>
              Armed with a Master&apos;s degree in anthropology, I bring a
              unique perspective that places human behaviour and user needs at
              the forefront of my work. My deep understanding of how people
              interact with technology allows me to craft intuitive and engaging
              digital solutions that truly resonate with users.
            </p>
            <SmoothCollapse expanded={isShowingMore}>
              <p>
                My web development journey started with a part-time course while
                working at a call center in 2019. In early 2020, I made the bold
                decision to quit my job and enroll in an intensive full-time web
                development bootcamp. Throughout the program, I immersed myself
                in mastering the latest industry tools and technologies,
                acquiring the skills necessary to excel in the field. Despite
                the challenges posed by the COVID-19 pandemic, I swiftly secured
                my first position as a front-end developer, demonstrating my
                adaptability and determination.
              </p>
              <p>
                I thrive on continuous learning and remain at the forefront of
                industry trends and technologies, actively working on side
                projects and staying informed through industry newsletters.
                Collaboration is central to my approach, and I find great joy in
                coaching and mentoring others, drawing inspiration from my
                initial career plan of becoming a teacher.
              </p>
              <p>
                With exceptional organizational skills and unwavering
                dedication, I consistently deliver high-quality features within
                tight deadlines. Colleagues commend my efficiency and ability to
                maintain exceptional standards. Above all, I am passionate about
                creating products that meet stringent web accessibility
                requirements, ensuring that everyone can access and enjoy the
                digital landscape.
              </p>
              <p>
                Let&apos;s embark on a journey together to create remarkable
                user experiences, foster collaboration, and build a more
                inclusive web!
              </p>
            </SmoothCollapse>
            <div className="w-full flex justify-center">
              <button
                className="AccentButton"
                onClick={() => setIsShowingMore(!isShowingMore)}
                data-testid="read-more-button"
              >
                {isShowingMore ? 'Read less' : 'Read more'}
              </button>
            </div>
          </div>
          <div className="max-w-[300px] w-auto xl:w-max mx-auto xl:ml-0">
            <div className="PhotoContainer">
              <StaticImage
                alt="Lucas Silbernagel"
                src="../../images/profile-photo.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default AboutSection
