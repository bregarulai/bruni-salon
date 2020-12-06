import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { setConfig } from "react-hot-loader"

setConfig({
  showReactDomPatchNotification: false,
})

const IndexPage = () => {
  const hello = useContext(GatsbyContext)
  return (
    <div>
      <p className="paragraph">{hello.hello}</p>
    </div>
  )
}

export default IndexPage
