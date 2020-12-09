import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const query = graphql`
  {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "logo.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    hero: {
      image: { fluid: heroImg },
    },
    logo: {
      image: { fluid: logoImg },
    },
  } = useStaticQuery(query)
  return (
    <section className="u-section hero">
      <div className="u-section-center">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="heading-primary">
              <span className="heading-primary--main">hair stylist</span>
              <span className="heading-primary--sub u-margin-top-small u-margin-bottom-small">
                dominican touch in wesley chapel and lutz area
              </span>
            </h1>
            <h2 className="heading-secondary">
              Making Wesley Chapel and Lutz hair reflect its story and spirit.
            </h2>

            <div className="hero__logo-img-box">
              <Image fluid={logoImg} alt="Hair stylist Hair by B logo image" />
            </div>
            <AnchorLink
              to="/#contact"
              title="contact"
              className="btn btn--primary u-margin-bottom-medium u-margin-top-small"
              stripHash
            />
          </div>
          <div className="hero__hero-img-box">
            <Image fluid={heroImg} alt="Hair stylist Hair by B hero image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
