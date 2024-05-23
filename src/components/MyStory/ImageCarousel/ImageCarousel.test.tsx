import { render, screen } from '@testing-library/react'
import ImageCarousel from './ImageCarousel'

const MOCK_IMAGE_CAROUSEL_ITEMS = [
  {
    image: {
      asset: {
        gatsbyImageData: {
          images: {
            sources: [],
            fallback: {
              src: 'https://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/463f4f608a383b229fef44c2d6be545e536e153e-380x385.jpg?w=380&h=385&auto=format',
              srcSet:
                'https://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/463f4f608a383b229fef44c2d6be545e536e153e-380x385.jpg?w=320&h=324&auto=format 320w,\nhttps://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/463f4f608a383b229fef44c2d6be545e536e153e-380x385.jpg?w=380&h=385&auto=format 380w',
              sizes: '(min-width: 380px) 380px, 100vw',
            },
          },
          layout: 'constrained',
          backgroundColor: '#2c3542',
          width: 380,
          height: 385,
        },
      },
    },
    altText: 'Lucas Silbernagel standing in front of Angkor Wat at sunrise',
  },
  {
    image: {
      asset: {
        gatsbyImageData: {
          images: {
            sources: [],
            fallback: {
              src: 'https://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/ca3eed4e4f62e5b20278f70ff6dc2d4d9f6dda95-380x505.jpg?w=380&h=505&auto=format',
              srcSet:
                'https://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/ca3eed4e4f62e5b20278f70ff6dc2d4d9f6dda95-380x505.jpg?w=320&h=425&auto=format 320w,\nhttps://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/ca3eed4e4f62e5b20278f70ff6dc2d4d9f6dda95-380x505.jpg?w=380&h=505&auto=format 380w',
              sizes: '(min-width: 380px) 380px, 100vw',
            },
          },
          layout: 'constrained',
          backgroundColor: '#d7bbaa',
          width: 380,
          height: 505,
        },
      },
    },
    altText:
      'Lucas Silbernagel standing on a riverboat at sunset in Phnom Penh, Cambodia',
  },
  {
    image: {
      asset: {
        gatsbyImageData: {
          images: {
            sources: [],
            fallback: {
              src: 'https://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/5aa46386b8977b4895b9d0814e5ef34c24d046c6-380x505.jpg?w=380&h=505&auto=format',
              srcSet:
                'https://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/5aa46386b8977b4895b9d0814e5ef34c24d046c6-380x505.jpg?w=320&h=425&auto=format 320w,\nhttps://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/5aa46386b8977b4895b9d0814e5ef34c24d046c6-380x505.jpg?w=380&h=505&auto=format 380w',
              sizes: '(min-width: 380px) 380px, 100vw',
            },
          },
          layout: 'constrained',
          backgroundColor: '#c1949c',
          width: 380,
          height: 505,
        },
      },
    },
    altText: 'Lucas Silbernagel sitting on a rooftop patio in Toronto',
  },
  {
    image: {
      asset: {
        gatsbyImageData: {
          images: {
            sources: [],
            fallback: {
              src: 'https://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/01c0e5576a1690c1ea01734bd7a10353a5ddf430-380x507.jpg?w=380&h=507&auto=format',
              srcSet:
                'https://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/01c0e5576a1690c1ea01734bd7a10353a5ddf430-380x507.jpg?w=320&h=427&auto=format 320w,\nhttps://cdn.sanity.io/images/q20xjmol/lucas-silbernagel-portfolio/01c0e5576a1690c1ea01734bd7a10353a5ddf430-380x507.jpg?w=380&h=507&auto=format 380w',
              sizes: '(min-width: 380px) 380px, 100vw',
            },
          },
          layout: 'constrained',
          backgroundColor: '#cdc8ba',
          width: 380,
          height: 506.99999999999994,
        },
      },
    },
    altText: 'Lucas Silbernagel sitting on a couch playing an acoustic guitar',
  },
]

describe('ImageCarousel', () => {
  test('renders correctly', () => {
    render(<ImageCarousel imageCarouselItems={MOCK_IMAGE_CAROUSEL_ITEMS} />)
    expect(screen.getByTestId('image-carousel')).toBeVisible()
    MOCK_IMAGE_CAROUSEL_ITEMS.forEach((item) => {
      expect(screen.getAllByAltText(item.altText)[0]).toBeVisible()
    })
  })
})
