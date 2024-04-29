import { useState } from 'react'
import Loader from '../Loader/Loader'
import { Link } from 'gatsby'
import './Contact.css'

const Contact = () => {
  const DEFAULT_FORM_SUBMISSION = {
    name: '',
    emailAddress: '',
    message: '',
  }

  const [formSubmission, setFormSubmission] = useState(DEFAULT_FORM_SUBMISSION)

  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false)

  const [formError, setFormError] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsLoading(true)
    setFormError('')
    setIsSubmissionSuccessful(false)
    if (
      formSubmission.name.length > 0 &&
      formSubmission.emailAddress.length > 0 &&
      formSubmission.message.length > 0
    ) {
      try {
        const response = await fetch(
          `https://submit-form.com/${process.env.GATSBY_FORMSPARK_ID}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(formSubmission),
          }
        )
        if (response.ok) {
          setIsSubmissionSuccessful(true)
          setFormSubmission(DEFAULT_FORM_SUBMISSION)
        } else {
          setFormError('Something went wrong, please try again.')
        }
      } catch (error) {
        console.error(error)
        setFormError(String(error))
      } finally {
        setIsLoading(false)
      }
    } else {
      setFormError('Please fill out all required fields.')
    }
  }

  return (
    <div className="Contact mb-36">
      <h1>Contact me</h1>
      <h2 className="AccentFont">
        Get in touch with me through any of my social accounts, or by using the
        form below. You can also email me directly at
        hello@lucassilbernagel.com.
      </h2>
      {isSubmissionSuccessful ? (
        <div className="text-center flex flex-col items-center py-24">
          <p aria-live="polite">
            Thanks for your message! I&apos;ll get back to you as soon as I can.
          </p>
          <div>
            <Link className="AccentButton" to="/">
              Go back
            </Link>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 mx-auto max-w-lg"
        >
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
            onChange={(e) =>
              setFormSubmission({ ...formSubmission, name: e.target.value })
            }
            value={formSubmission.name}
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            required
            onChange={(e) =>
              setFormSubmission({
                ...formSubmission,
                emailAddress: e.target.value,
              })
            }
            value={formSubmission.emailAddress}
          />
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            required
            className="min-h-[100px]"
            onChange={(e) =>
              setFormSubmission({ ...formSubmission, message: e.target.value })
            }
            value={formSubmission.message}
          />
          <div className="w-full flex flex-col items-center">
            {formError.length > 0 && <p aria-live="polite">{formError}</p>}
            {isLoading ? (
              <div className="mb-3">
                <Loader />
              </div>
            ) : (
              <button
                type="submit"
                className={
                  formError
                    ? 'AccentButton AccentButton--error'
                    : 'AccentButton'
                }
                name="submit"
              >
                Send message
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

export default Contact
