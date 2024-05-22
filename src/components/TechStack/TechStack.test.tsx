import { render, screen } from '@testing-library/react'
import TechStack from './TechStack'
import * as Gatsby from 'gatsby'
import { MOCK_TECH_STACK_QUERY } from './mockTechStackQuery'

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`)

describe('TechStack', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => MOCK_TECH_STACK_QUERY)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('renders correctly', () => {
    render(<TechStack />)
    expect(screen.getByTestId('tech-stack-section')).toBeInTheDocument()
    expect(screen.getByText('Tech Stack')).toBeInTheDocument()
    expect(screen.getByText('HTML')).toBeInTheDocument()
  })
})
