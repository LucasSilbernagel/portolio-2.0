import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact page', () => {
  it('should render', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Contact me/i })).toBeVisible()
    expect(
      screen.getByRole('heading', {
        name: /Get in touch with me through any of my social accounts, or by using the form below. You can also email me directly at hello@lucassilbernagel.com./i,
      })
    ).toBeVisible()
    expect(screen.getByLabelText(/Name/i)).toBeVisible()
    expect(screen.getByLabelText(/Email/i)).toBeVisible()
    expect(screen.getByLabelText(/Message/i)).toBeVisible()
    expect(screen.getByRole('button', { name: /Send message/i })).toBeVisible()
  })
})
