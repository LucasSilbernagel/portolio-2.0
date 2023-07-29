import { render, screen } from '@testing-library/react'
import SocialLinks from './SocialLinks'

describe('SocialLinks', () => {
  test('renders correctly', () => {
    render(<SocialLinks />)
    expect(screen.getByTestId('github-link')).toBeInTheDocument()
    expect(screen.getByTestId('github-link')).toHaveAttribute(
      'href',
      'https://github.com/LucasSilbernagel'
    )
    expect(screen.getByTestId('linkedin-link')).toBeInTheDocument()
    expect(screen.getByTestId('linkedin-link')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/lucassilbernagel/'
    )
    expect(screen.getByTestId('bluesky-link')).toBeInTheDocument()
    expect(screen.getByTestId('bluesky-link')).toHaveAttribute(
      'href',
      'https://bsky.app/profile/lucassilbernagel.com'
    )
  })
})
