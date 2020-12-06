import React from "react"

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  return (
    <GatsbyContext.Provider value={{ hello: "hello from provider" }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
