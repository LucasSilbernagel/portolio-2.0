import { render, screen } from '@testing-library/react'
import MyStory from './MyStory'

describe('MyStory', () => {
  test('renders correctly', () => {
    render(<MyStory />)
    expect(screen.getByTestId('my-story')).toBeInTheDocument()
    expect(screen.getByText('My story')).toBeInTheDocument()
    expect(screen.getByText('Say hello')).toHaveAttribute('href', '/contact')
  })
})
