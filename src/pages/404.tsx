import { Link, HeadFC } from 'gatsby'
import { FaArrowLeft } from 'react-icons/fa'

export const Head: HeadFC = () => (
  <>
    <title>Lucas Silbernagel | Not found</title>
    <meta
      property="og:title"
      content="Lucas Silbernagel | Front-End Developer"
    />
    <meta property="og:url" content="https://lucassilbernagel.com/" />
    <meta
      property="og:description"
      content="Personal website and web development portfolio for Lucas Silbernagel"
    />
    <meta
      property="og:image:secure"
      content="https://meek-cannoli-5408ac.netlify.app/static/portfolio.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@LucasCodePro" />
    <meta name="twitter:creator" content="@LucasCodePro" />
    <meta
      name="twitter:title"
      content="Lucas Silbernagel | Front-End Developer"
    />
    <meta
      name="twitter:description"
      content="Personal website and web development portfolio for Lucas Silbernagel"
    />
    <meta name="twitter:image" content="/static/portfolio.png" />
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
