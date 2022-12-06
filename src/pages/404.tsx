import { Link, HeadFC } from 'gatsby'
import { FaArrowLeft } from 'react-icons/fa'
import { SEO } from '../components/Seo'

export const Head: HeadFC = () => (
  <SEO
    title="Lucas Silbernagel | Not found"
    description="Personal website and web development portfolio for Lucas Silbernagel"
  />
)

const NotFoundPage = () => {
  return (
    <main className="text-center min-h-[70vh] mt-36">
      <h1 className="font-black text-4xl mb-8">
        Sorry, that page doesn&apos;t exist!
      </h1>
      <div className="flex justify-center items-center gap-4 hover:text-accent-1 focus:text-accent-1 duration-300">
        <FaArrowLeft />
        <p className="text-xl">
          <Link className="underline underline-offset-8" to="/">
            Go back
          </Link>
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage
