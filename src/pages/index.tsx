import { HeadFC } from 'gatsby'
import Header from '../components/Header/Header'
import AboutSection from '../components/AboutSection/AboutSection'
import TechStack from '../components/TechStack/TechStack'
import Experience from '../components/Experience/Experience'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import Footer from '../components/Footer/Footer'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'

export const Head: HeadFC = () => (
  <>
    <title>Lucas Silbernagel | Front-End Developer</title>
    <meta
      property="og:title"
      content="Lucas Silbernagel | Front-End Developer"
    />
    <meta property="og:url" content="https://lucassilbernagel.com/" />
    <meta
      property="og:description"
      content="Personal website and web development portfolio for Lucas Silbernagel"
    />
    <meta property="og:image" content="../images/portfolio.png" />
  </>
)

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <TechStack />
        <Experience />
        <ProjectsSection />
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div className="flex justify-center my-36">
            <a
              href="mailto:hello@lucassilbernagel.com"
              className="AccentButton"
            >
              Say hello
            </a>
          </div>
        </AnimationOnScroll>
      </main>
      <Footer />
    </>
  )
}

export default Home
