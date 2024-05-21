import { Link } from 'gatsby'

const PageNotFound = () => {
  return (
    <div data-testid="page-not-found" className="text-center my-36">
      <h1 className="font-fira-code text-9xl font-black text-accent-1 mb-4">
        404
      </h1>
      <h2 className="font-black text-4xl mb-8">Page not found</h2>
      <div className="flex justify-center items-center">
        <Link className="AccentButton" to="/">
          Go back
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
