import { Link, HeadFC } from 'gatsby'
import { FaArrowLeft } from 'react-icons/fa'

export const Head: HeadFC = () => (
  <>
    <title>Lucas Silbernagel | Not found</title>
    <meta property="og:title" content="Lucas Silbernagel" />
    <meta property="og:url" content="https://lucassilbernagel.com/" />
    <meta
      property="og:description"
      content="Web development portfolio for Lucas Silbernagel"
    />
    <meta property="og:image" content="../images/portfolio.png" />
  </>
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
