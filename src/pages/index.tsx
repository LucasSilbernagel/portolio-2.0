import { HeadFC } from 'gatsby'
import Header from '../components/Header/Header'
import AboutSection from '../components/AboutSection/AboutSection'
import TechStack from '../components/TechStack/TechStack'

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
      </main>
      <footer></footer>
    </>
  )
}

export default Home
