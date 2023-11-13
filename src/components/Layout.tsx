import { ReactNode } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

interface ILayoutProps {
  isHomePage: boolean
  children: ReactNode
}

const Layout = (props: ILayoutProps) => {
  const { children, isHomePage } = props

  return (
    <>
      <Header isHomePage={isHomePage} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
