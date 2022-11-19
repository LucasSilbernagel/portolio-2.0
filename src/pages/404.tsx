import { Link, HeadFC } from 'gatsby'

export const Head: HeadFC = () => <title>Lucas Silbernagel | Not found</title>

const NotFoundPage = () => {
  return (
    <>
      <header></header>
      <main>
        <h1 className="font-black text-4xl mt-20 mb-8">
          Oops! We don&apos;t have the page you&apos;re looking for.
        </h1>
        <p className="text-xl">
          <Link
            className="underline underline-offset-4 duration-300 hover:text-blue-1 focus:text-blue-1"
            to="/"
          >
            Return to the homepage
          </Link>
          .
        </p>
      </main>
      <footer></footer>
    </>
  )
}

export default NotFoundPage
