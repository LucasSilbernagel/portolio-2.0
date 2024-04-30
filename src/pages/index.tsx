import AboutSection from '../components/AboutSection/AboutSection'
import TechStack from '../components/TechStack/TechStack'
import Experience from '../components/Experience/Experience'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Link } from 'gatsby'

const Home = () => {
  return (
    <Layout>
      <AboutSection />
      <TechStack />
      <Experience />
      <ProjectsSection />
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <div className="flex justify-center my-36">
          <Link to="/contact" className="AccentButton">
            Say hello
          </Link>
        </div>
      </AnimationOnScroll>
    </Layout>
  )
}

export default Home

export const Head = () => {
  return <Seo />
}
