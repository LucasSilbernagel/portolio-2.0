import { render, screen } from '@testing-library/react'
import TechStack from './TechStack'
import { TECH_STACK } from '../../content/skills'

describe('TechStack', () => {
  test('renders correctly', () => {
    render(<TechStack />)
    expect(screen.getByTestId('tech-stack-section')).toBeInTheDocument()
    expect(screen.getByText('Tech Stack')).toBeInTheDocument()
    TECH_STACK.forEach((skillset) => {
      expect(screen.getByText(skillset.section)).toBeInTheDocument()
      skillset.skills.forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument()
      })
    })
  })
})
