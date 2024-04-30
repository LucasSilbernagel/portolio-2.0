import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact page', () => {
  it('should render', () => {
    render(<Contact />)
    expect(
      screen.getByRole('heading', { name: /Contact me/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Get in touch with me through any of my social accounts, or by using the form below. You can also email me directly at hello@lucassilbernagel.com./i,
      })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Send message/i })
    ).toBeInTheDocument()
  })
})
