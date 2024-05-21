import { render, screen } from '@testing-library/react'
import PageNotFound from './PageNotFound'

describe('PageNotFound', () => {
  test('renders correctly', () => {
    render(<PageNotFound />)
    expect(screen.getByTestId('page-not-found')).toBeInTheDocument()
    expect(screen.getByText('404')).toBeVisible()
    expect(screen.getByText('Page not found')).toBeVisible()
    expect(screen.getByRole('link', { name: /Go back/i })).toBeVisible()
    expect(screen.getByRole('link', { name: /Go back/i })).toHaveAttribute(
      'href',
      '/'
    )
  })
})
