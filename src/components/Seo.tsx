import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { getPathname } from '../utils/urlHelpers'

interface SeoProps {
  title?: string
  description?: string
  image?: string
  pathname?: string
  children?: JSX.Element
  imageBasePath?: string
}

const Seo = ({
  title,
  description = '',
  image,
  imageBasePath = '/',
  children,
}: SeoProps) => {
  const { defaultTitle, defaultDescription, siteUrl } = useSiteMetadata()

  const formatImagePath = () => {
    if (image?.includes('https://')) {
      return image
    } else {
      return image
        ? `${siteUrl}${imageBasePath}${image}`
        : `${siteUrl}/portfolio.png`
    }
  }

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: formatImagePath(),
    url: `${siteUrl}${getPathname()}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={String(seo.description)} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={String(seo.title)} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={String(seo.description)} />
      <meta name="twitter:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={String(seo.title)} />
      <meta property="og:description" content={String(seo.description)} />
      <meta property="og:image" content={seo.image} />
      {children}
    </>
  )
}

export default Seo
