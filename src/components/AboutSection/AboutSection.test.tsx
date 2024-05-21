import { render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'
import * as Gatsby from 'gatsby'

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)
const mockUseStaticQuery = {
  sanityHomepage: {
    _rawAboutMe: [
      {
        _key: '2495588702c4',
        _type: 'block',
        children: [
          {
            _key: '7d137482a69b0',
            _type: 'span',
            marks: [],
            text: "Hi, I'm Lucas! I'm a software developer based in Toronto, Canada. I specialize in front-end development, and I've been working in the industry since 2020. My contributions can be found in the codebases of an environmental nonprofit, a cleantech startup, a quantum computing startup, and an online casino and sportsbook. I'm passionate about creating remarkable and accessible user experiences that everyone can enjoy.",
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    profilePhoto: {
      asset: {
        gatsbyImageData: {
          images: {
            sources: [],
            fallback: {
              src: 'https://cdn.sanity.io/images/3npve6dv/production/8194b373c29cc9bb6b656614e8a5f77a21549a4a-477x523.jpg?w=477&h=523&auto=format',
              srcSet:
                'https://cdn.sanity.io/images/3npve6dv/production/8194b373c29cc9bb6b656614e8a5f77a21549a4a-477x523.jpg?w=320&h=351&auto=format 320w,\nhttps://cdn.sanity.io/images/3npve6dv/production/8194b373c29cc9bb6b656614e8a5f77a21549a4a-477x523.jpg?w=477&h=523&auto=format 477w',
              sizes: '(min-width: 477px) 477px, 100vw',
            },
          },
          layout: 'constrained',
          backgroundColor: '#c4bcb3',
          width: 477,
          height: 523,
        },
      },
    },
  },
}

describe('AboutSection', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly', () => {
    render(<AboutSection />)
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByTestId('about-text')).toBeInTheDocument()
    expect(
      screen.getByText(
        mockUseStaticQuery.sanityHomepage._rawAboutMe[0].children[0].text
      )
    ).toBeInTheDocument()
    expect(screen.getByText('Read my story')).toHaveAttribute(
      'href',
      '/my-story'
    )
    expect(screen.getByAltText('Lucas Silbernagel')).toBeInTheDocument()
    expect(screen.getByAltText('Lucas Silbernagel')).toHaveAttribute(
      'src',
      '../../images/profile-photo.jpg'
    )
  })
})
