import type { GatsbyConfig, Page } from 'gatsby'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = {
  title: `Lucas Silbernagel | Software Developer`,
  description: `Personal website and software development portfolio for Lucas Silbernagel`,
  image: '/portfolio.png',
  siteUrl: `https://lucassilbernagel.com`,
}

const config: GatsbyConfig = {
  siteMetadata: siteMetadata,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `q20xjmol`,
        dataset: `lucas-silbernagel-portfolio`,
        graphqlTag: 'default',
      },
    },
    `gatsby-plugin-graphql-codegen`,
    'gatsby-plugin-image',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteMetadata.siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }: {
          allSitePage: { nodes: Page[] }
        }) => {
          return allPages.map((page: Page) => {
            return { ...page }
          })
        },
        serialize: ({
          path,
          modifiedGmt,
        }: {
          path: string
          modifiedGmt: string
        }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en-US',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/profile-photo.jpg',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap`,
          },
          {
            name: `Fira Code`,
            file: `https://fonts.googleapis.com/css2?family=Fira+Code&display=swap`,
          },
        ],
      },
    },
  ],
}

export default config
