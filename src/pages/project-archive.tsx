import Layout from '../components/Layout'
import ProjectArchive from '../components/ProjectArchive/ProjectArchive'

const ProjectArchivePage = () => {
  return (
    <Layout
      isHomePage={false}
      pageTitle="Project Archive"
      pageRoute="/project-archive"
    >
      <ProjectArchive />
    </Layout>
  )
}

export default ProjectArchivePage
