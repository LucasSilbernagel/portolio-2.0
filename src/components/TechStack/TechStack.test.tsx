import { render, screen } from '@testing-library/react'
import TechStack from './TechStack'

describe('TechStack', () => {
  test('renders correctly', () => {
    render(<TechStack />)
    expect(screen.getByTestId('tech-stack-section')).toBeInTheDocument()
    expect(screen.getByText('Tech Stack')).toBeInTheDocument()
    screen.debug()
  })
})
