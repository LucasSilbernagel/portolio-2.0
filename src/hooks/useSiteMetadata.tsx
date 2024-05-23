import { graphql, useStaticQuery } from 'gatsby'
import { SiteMetadataQuery } from '../../graphql-types'

export const useSiteMetadata = () => {
  const data: SiteMetadataQuery = useStaticQuery(graphql`
    query SiteMetadata {
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

  return {
    defaultTitle: data.site?.siteMetadata?.title,
    defaultDescription: data.site?.siteMetadata?.description,
    siteUrl: data.site?.siteMetadata?.siteUrl,
  }
}
