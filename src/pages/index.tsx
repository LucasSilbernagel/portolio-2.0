import { HeadFC } from 'gatsby'
import Header from '../components/Header/Header'
import AboutSection from '../components/AboutSection/AboutSection'
import TechStack from '../components/TechStack/TechStack'
import Experience from '../components/Experience/Experience'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'

export const Head: HeadFC = () => (
  <title>Lucas Silbernagel | Front-End Developer</title>
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
        <div className="flex justify-center mb-6">
          <a href="mailto:hello@lucassilbernagel.com" className="AccentButton">
            Say hello
          </a>
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default Home
