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
            <h1 className="heading-primary--main">Hairstylist</h1>
            <h2 className="heading-primary--sub">
              Making Wesley Chapel hair reflect their story and spirit.
            </h2>

            <div className="hero__logo-img-box">
              <Image fluid={logoImg} alt="Hairstylist Hair by B logo image" />
            </div>
            <AnchorLink
              to="/#contact"
              title="contact"
              className="hero__button u-margin-bottom-medium u-margin-top-small"
            />
          </div>
          <div className="hero__hero-img-box">
            <Image fluid={heroImg} alt="Hairstylist Hair by B hero image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
