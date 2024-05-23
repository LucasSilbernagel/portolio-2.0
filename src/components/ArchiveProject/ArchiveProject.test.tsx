import { render, screen } from '@testing-library/react'
import ArchiveProject from './ArchiveProject'

const MOCK_PROJECT = {
  name: 'Super Simon',
  year: 2023,
  description:
    'The classic memory game Simon, with a twist! How long of a sequence can you remember? Super Simon is a Progressive Web App that can be played on the web, installed on your device, and even played offline! Includes unit tests (Jest, React Testing Library) and e2e tests (Playwright).',
  techStack: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind',
    'Redux',
    'Firebase',
  ],
  githubProjectLink: 'https://github.com/LucasSilbernagel/super-simon',
  liveLink: 'https://super-simon-kappa.vercel.app/',
}

describe('ArchiveProject', () => {
  const index = 0
  test('renders correctly', () => {
    render(<ArchiveProject project={MOCK_PROJECT} index={index} />)
    expect(screen.getByTestId('archive-project')).toBeVisible()
    expect(screen.getByTestId(`project-year-${index}`)).toBeVisible()
    expect(screen.getByTestId(`project-year-${index}`)).toHaveTextContent(
      String(MOCK_PROJECT.year)
    )
    expect(screen.getByTestId(`github-project-link-${index}`)).toBeVisible()
    expect(screen.getByTestId(`github-project-link-${index}`)).toHaveAttribute(
      'href',
      MOCK_PROJECT.githubProjectLink
    )
    expect(screen.getByTestId(`external-project-link-${index}`)).toBeVisible()
    expect(
      screen.getByTestId(`external-project-link-${index}`)
    ).toHaveAttribute('href', MOCK_PROJECT.liveLink)
    expect(screen.getByText(MOCK_PROJECT.name)).toBeVisible()
    expect(screen.getByText(MOCK_PROJECT.name)).toHaveAttribute(
      'href',
      MOCK_PROJECT.liveLink
    )
    expect(screen.getByText(MOCK_PROJECT.description)).toBeVisible()
    MOCK_PROJECT.techStack.forEach((skill) => {
      expect(screen.getAllByText(skill)[0]).toBeVisible()
    })
  })
})
