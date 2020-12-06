import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import { setConfig } from "react-hot-loader"
import { Hero, Layout } from "../components"

setConfig({
  showReactDomPatchNotification: false,
})

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default IndexPage
