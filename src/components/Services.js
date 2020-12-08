import React from "react"
import Image from "gatsby-image"
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
        <div className="services__container">
          <div className="services__card">
            <div className="services__content">
              <h3 className="heading-quaternary u-center-text u-margin-top-medium u-margin-bottom-small">
                hair color
              </h3>
              <p className="paragraph u-margin-bottom-medium">
                I'm baby quinoa edison bulb normcore plaid. Polaroid venmo
                locavore succulents tbh. Messenger bag pinterest taiyaki twee
                freegan tousled woke raclette kale chips succulents.
              </p>
            </div>
            <div className="services__img-box">
              <Image
                fluid={colorImage}
                alt="Hair stylist Hair by B service hair color image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
