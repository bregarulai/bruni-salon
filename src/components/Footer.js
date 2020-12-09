import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Image from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "logo-light.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Footer = () => {
  const {
    file: {
      image: { fluid: logo },
    },
  } = useStaticQuery(query)
  return (
    <footer className="u-section footer">
      <div className="u-section-center">
        <div className="footer__brand">
          <h4 className="footer__heading u-center-text">hair stylist</h4>
          <div className="footer__img-box">
            <Image fluid={logo} alt="Hair stylist Hair by B logo image" />
          </div>
          <h4 className="footer__heading u-center-text">hair by b</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
