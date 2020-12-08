import React from "react"
import { setConfig } from "react-hot-loader"
import { About, Hero, Layout } from "../components"

setConfig({
  showReactDomPatchNotification: false,
})

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}

export default IndexPage
