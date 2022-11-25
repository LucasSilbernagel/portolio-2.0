import { HeadFC } from 'gatsby'
import Header from '../components/Header/Header'

export const Head: HeadFC = () => (
  <title>Lucas Silbernagel | Front-End Developer</title>
)

const Home = () => {
  return (
    <>
      <Header />
      <main className="min-h-[200vh] mt-60">
        <h1 className="text-center">Main</h1>
      </main>
      <footer></footer>
    </>
  )
}

export default Home
