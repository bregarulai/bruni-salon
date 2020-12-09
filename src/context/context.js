import React, { useState } from "react"
import subLinks from "../constants/links"

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  /* eslint-disable-next-line */
  const [links, setLinks] = useState(subLinks)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <GatsbyContext.Provider value={{ isMenuOpen, toggleMenu, links }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
