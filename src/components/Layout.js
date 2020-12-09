import React from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"

const layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default layout
