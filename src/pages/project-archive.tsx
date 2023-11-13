import Layout from '../components/Layout'
import ProjectArchive from '../components/ProjectArchive/ProjectArchive'
import Seo from '../components/Seo'

const ProjectArchivePage = () => {
  return (
    <Layout isHomePage={false}>
      <ProjectArchive />
    </Layout>
  )
}

export default ProjectArchivePage

export const Head = () => {
  return <Seo title="Lucas Silbernagel | Project Archive" />
}
