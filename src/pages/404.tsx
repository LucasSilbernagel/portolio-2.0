import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const NotFoundPage = () => {
  return (
    <Layout isHomePage={false}>
      <div className="text-center my-36">
        <h1 className="font-fira-code text-9xl font-black text-accent-1 mb-4">
          404
        </h1>
        <h2 className="font-black text-4xl mb-8">Page Not Found</h2>
        <div className="flex justify-center items-center">
          <Link className="AccentButton" to="/">
            Go back
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => {
  return <Seo title="Lucas Silbernagel | 404" />
}
