import { ReactNode } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

interface ILayoutProps {
  children: ReactNode
}

const Layout = (props: ILayoutProps) => {
  const { children } = props

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
