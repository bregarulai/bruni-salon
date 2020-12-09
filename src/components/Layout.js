import React from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"
import { GatsbyContext } from "../context/context"
import { useContext } from "react"
import MobileMenu from "./MobileMenu"

const Layout = ({ children }) => {
  const { isMenuOpen } = useContext(GatsbyContext)
  return (
    <>
      <Navigation />
      {isMenuOpen && <MobileMenu />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
