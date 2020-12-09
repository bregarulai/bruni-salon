import React from "react"
import { setConfig } from "react-hot-loader"
import { About, Gallery, Hero, Layout, Services } from "../components"

setConfig({
  showReactDomPatchNotification: false,
})

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Gallery />
    </Layout>
  )
}

export default IndexPage
