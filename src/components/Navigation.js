import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Image from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "logo.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Navigation = () => {
  const {
    file: {
      image: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="navigation">
      <div className="u-section-center">
        <div className="navigation__brand">
          <div className="navigation__img-box">
            <Image fluid={fluid} alt="Hairstylist Hair by B logo" />
          </div>
          <p>Hair by B</p>
        </div>
      </div>
    </header>
  )
}

export default Navigation
