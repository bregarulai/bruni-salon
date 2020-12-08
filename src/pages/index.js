import React from "react"
import { setConfig } from "react-hot-loader"
import { About, Hero, Layout, Services } from "../components"

setConfig({
  showReactDomPatchNotification: false,
})

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
    </Layout>
  )
}

export default IndexPage
