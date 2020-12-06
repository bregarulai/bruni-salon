import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "hero.jpg" }) {
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
    file: {
      image: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <section className="u-section">
      <div className="u-section-center">
        <div className="hero">
          <div className="hero__content">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Hairstylist</span>
              <span className="heading-primary--sub">
                Making Wesley Chapel hair reflect their story and spirit.
              </span>
            </h1>
          </div>
          <div className="hero__img-box">
            <Image fluid={fluid} alt="Hairstylist Hair by B hero image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
