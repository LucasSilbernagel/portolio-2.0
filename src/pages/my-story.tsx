import Layout from '../components/Layout'
import Seo from '../components/Seo'
import MyStory from '../components/MyStory/MyStory'

const MyStoryPage = () => {
  return (
    <Layout>
      <MyStory />
    </Layout>
  )
}

export default MyStoryPage

export const Head = () => {
  return <Seo title="Lucas Silbernagel | My story" />
}
