import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        pathPrefix
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}
