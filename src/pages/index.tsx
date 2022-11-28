import { HeadFC } from 'gatsby'
import AboutSection from '../components/AboutSection/AboutSection'
import Header from '../components/Header/Header'

export const Head: HeadFC = () => (
  <title>Lucas Silbernagel | Front-End Developer</title>
)

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
      </main>
      <footer></footer>
    </>
  )
}

export default Home
