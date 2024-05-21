import Layout from '../components/Layout'
import Seo from '../components/Seo'
import PageNotFound from '../components/PageNotFound/PageNotFound'

const NotFoundPage = () => {
  return (
    <Layout>
      <PageNotFound />
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => {
  return <Seo title="Lucas Silbernagel | 404" />
}
