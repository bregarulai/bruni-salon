import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"

const IndexPage = () => {
  const hello = useContext(GatsbyContext)
  console.log(hello)
  return (
    <div>
      <p>{hello.hello}</p>
    </div>
  )
}

export default IndexPage
