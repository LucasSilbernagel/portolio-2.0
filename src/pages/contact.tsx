import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Contact from '../components/Contact/Contact'

const ContactPage = () => {
  return (
    <Layout>
      <Contact />
    </Layout>
  )
}

export default ContactPage

export const Head = () => {
  return <Seo title="Lucas Silbernagel | Contact" />
}
