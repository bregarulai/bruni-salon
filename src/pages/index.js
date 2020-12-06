import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { setConfig } from "react-hot-loader"
import { Layout } from "../components"

setConfig({
  showReactDomPatchNotification: false,
})

const IndexPage = () => {
  const hello = useContext(GatsbyContext)
  return (
    <Layout>
      <p className="paragraph">{hello.hello}</p>
    </Layout>
  )
}

export default IndexPage
