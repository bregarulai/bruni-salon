import React from "react"
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
