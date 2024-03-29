import AboutSection from '../components/AboutSection/AboutSection'
import TechStack from '../components/TechStack/TechStack'
import Experience from '../components/Experience/Experience'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const Home = () => {
  return (
    <Layout isHomePage={true}>
      <AboutSection />
      <TechStack />
      <Experience />
      <ProjectsSection />
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <div className="flex justify-center my-36">
          <a
            href="mailto:hello@lucassilbernagel.com"
            target="_blank"
            rel="noreferrer"
            className="AccentButton"
          >
            Say hello
          </a>
        </div>
      </AnimationOnScroll>
    </Layout>
  )
}

export default Home

export const Head = () => {
  return <Seo />
}
