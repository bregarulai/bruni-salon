import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    serviceColor: file(relativePath: { eq: "service-color.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Services = () => {
  const {
    serviceColor: {
      image: { fluid: colorImage },
    },
  } = useStaticQuery(query)
  return (
    <section className="u-section services">
      <div className="u-section-center">
        <h2 className="heading-tertiary u-center-text">services</h2>
        <div className="services__container"></div>
      </div>
    </section>
  )
}

export default Services
