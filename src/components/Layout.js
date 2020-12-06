import React from "react"
import Navigation from "./Navigation"

const layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default layout
