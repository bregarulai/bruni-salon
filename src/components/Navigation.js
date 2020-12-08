import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import Image from "gatsby-image"
import { GatsbyContext } from "../context/context"

const query = graphql`
  {
    file(relativePath: { eq: "logo.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 50) {
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

  const { isSidebarOpen, toggleSidebar } = useContext(GatsbyContext)

  return (
    <header className="navigation">
      <div className="u-section-center">
        <div className="navigation__container">
          <div className="navigation__brand">
            <div className="navigation__img-box">
              <Image fluid={fluid} alt="Hair stylist Hair by B logo" />
            </div>
            <p className="navigation__name">Hair by B</p>
          </div>

          <button
            className="navigation__button"
            onClick={toggleSidebar}
            aria-label="humburger menu button"
          >
            <span
              className={
                isSidebarOpen
                  ? "navigation__icon navigation__icon--rotate"
                  : "navigation__icon"
              }
            >
              &nbsp;
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navigation
