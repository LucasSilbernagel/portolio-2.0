import { render, screen } from '@testing-library/react'
import ProjectsSection from './ProjectsSection'

const mockProjects = [
  {
    name: 'ReykrMusic.com',
    description:
      'A website for Reykr, an electronic music producer and DJ. Includes unit tests and a three.js background animation.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/ReykrMusic/reykr-music-v3',
    liveLink: 'https://www.reykrmusic.com/',
    imageFileName: 'reykrMusic.png',
  },
  {
    name: 'Quinn Bonnett, RMT',
    description:
      'Freelance business website built for Quinn Bonnett, a Registered Massage Therapist.',
    techStack: ['Gatsby', 'React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/LucasSilbernagel/quinn-rmt',
    liveLink: 'https://quinnbonnettrmt.com/',
    imageFileName: 'quinnBonnettRMT.png',
  },
  {
    name: 'Tasty',
    description:
      'A multi-page website of tasty recipes, inspired by Delish.com. Content is saved and provided by Strapi CMS, with images and video hosted in Cloudinary.',
    techStack: ['Gatsby', 'React', 'TypeScript', 'Strapi', 'Tailwind'],
    github: 'https://github.com/LucasSilbernagel/tasty',
    liveLink: 'https://symphonious-croquembouche-c45916.netlify.app/',
    imageFileName: 'tasty.png',
  },
  {
    name: 'Been There, Done That',
    description:
      'A travel destination log. City and tourist attraction data is provided by the Geoapify Places API and converted to GraphQL with Apollo Server and Apollo Client.',
    techStack: [
      'React',
      'TypeScript',
      'GraphQL',
      'Apollo Client',
      'Apollo Server',
      'REST API',
      'MUI',
      'Mapbox',
    ],
    github: 'https://github.com/LucasSilbernagel/bt-dt',
    liveLink: 'https://shiny-gecko-cc92d2.netlify.app/',
    imageFileName: 'btdt.png',
  },
  {
    name: 'Keep Clone',
    description:
      'A clone of Google Keep built with the MERN stack. Replicates the web app on larger screens and the mobile app on smaller screens. Includes Google authentication and unit tests. Components are documented with Storybook.',
    techStack: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'TypeScript',
      'MUI',
      'Recoil',
    ],
    github: 'https://github.com/LucasSilbernagel/keep-clone',
    liveLink: 'https://glowing-moonbeam-f2cd62.netlify.app/',
    imageFileName: 'keepClone.png',
  },
  {
    name: 'Weather Dash',
    description:
      'A simple weather dashboard build with React, TypeScript, and a REST API. Search for and view a five day weather forecast for any city. Includes unit tests (Jest, React Testing Library), e2e tests (Cypress), and state management (Recoil).',
    techStack: [
      'React',
      'TypeScript',
      'REST API',
      'Recoil',
      'MUI',
      'react-icons',
      'Storybook',
    ],
    github: 'https://github.com/LucasSilbernagel/weather-dash',
    liveLink: 'https://lucassilbernagel.github.io/weather-dash/',
    imageFileName: 'weatherDash.png',
  },
]

const mockImageData = 'mocked-image-data'

jest.mock('gatsby', () => {
  const originalModule = jest.requireActual('gatsby')
  return {
    ...originalModule,
    graphql: jest.fn(),
    useStaticQuery: jest
      .spyOn(originalModule, 'useStaticQuery')
      .mockImplementation(() => ({
        allFile: {
          nodes: mockProjects.map((project) => {
            return {
              relativePath: project.imageFileName,
              childImageSharp: {
                gatsbyImageData: mockImageData,
              },
            }
          }),
        },
      })),
  }
})

describe('ProjectsSection', () => {
  test('renders correctly', () => {
    render(<ProjectsSection />)
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.getByText('Latest Projects')).toBeInTheDocument()
    mockProjects.forEach((project, index) => {
      expect(screen.getByTestId(`project-link-${index}`)).toBeInTheDocument()
      expect(screen.getByTestId(`project-link-${index}`)).toHaveAttribute(
        'href',
        project.liveLink
      )
      expect(screen.getByTestId(`project-image-${index}`)).toBeInTheDocument()
      expect(screen.getByTestId(`project-image-${index}`)).toHaveAttribute(
        'image',
        'mocked-image-data'
      )
      expect(screen.getByTestId(`project-title-${index}`)).toBeInTheDocument()
      expect(screen.getByTestId(`project-title-${index}`)).toHaveAttribute(
        'href',
        project.liveLink
      )
      expect(screen.getByTestId(`project-title-${index}`)).toHaveTextContent(
        project.name
      )
      expect(screen.getAllByText(project.description)[0]).toBeInTheDocument()
      project.techStack.forEach((skill) => {
        expect(screen.getAllByText(skill)[0]).toBeInTheDocument()
      })
      expect(
        screen.getByTestId(`github-project-link-${index}`)
      ).toBeInTheDocument()
      expect(
        screen.getByTestId(`github-project-link-${index}`)
      ).toHaveAttribute('href', project.github)
      expect(
        screen.getByTestId(`external-project-link-${index}`)
      ).toBeInTheDocument()
      expect(
        screen.getByTestId(`external-project-link-${index}`)
      ).toHaveAttribute('href', project.liveLink)
    })
  })
})
