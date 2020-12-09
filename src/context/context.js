import React, { useState } from "react"
import subLinks from "../constants/links"

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  /* eslint-disable-next-line */
  const [links, setLinks] = useState(subLinks)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <GatsbyContext.Provider value={{ isSidebarOpen, toggleSidebar, links }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
