import { ReactNode } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

interface ILayoutProps {
  children: ReactNode
  isHomePage?: boolean
  isContactPage?: boolean
}

const Layout = (props: ILayoutProps) => {
  const { children, isHomePage = false, isContactPage = false } = props

  return (
    <>
      <Header isHomePage={isHomePage} isContactPage={isContactPage} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
