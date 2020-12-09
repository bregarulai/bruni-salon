import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import Image from "gatsby-image"
import { GatsbyContext } from "../context/context"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { HiCreditCard } from "react-icons/hi"
import { SiPaypal, SiCashapp } from "react-icons/si"
import { IoMdCash } from "react-icons/io"
import { FaInstagram, FaFacebookSquare } from "react-icons/fa"

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

  const { links } = useContext(GatsbyContext)
  return (
    <footer className="u-section footer">
      <div className="u-section-center">
        <div className="footer__container">
          <div className="footer__brand">
            <h4 className="footer__heading u-center-text">hair stylist</h4>
            <div className="footer__img-box">
              <Image fluid={logo} alt="Hair stylist Hair by B logo image" />
            </div>
            <h4 className="footer__heading u-center-text">hair by b</h4>
          </div>
          <div className="footer__links u-margin-top-medium">
            {links.map((link, index) => {
              return (
                <AnchorLink
                  key={index}
                  to={link.url}
                  title={link.label}
                  className="footer__link"
                  stripHash
                />
              )
            })}
          </div>
          <div className="footer__content u-margin-top-medium">
            <div className="footer__payments ">
              <h5 className="footer__sub-heading">payments</h5>
              <div className="footer__icons u-margin-top-small">
                <IoMdCash className="footer__icon" />
                <SiCashapp className="footer__icon" />
                <SiPaypal className="footer__icon" />
                <HiCreditCard className="footer__icon" />
              </div>
            </div>
            <div className="footer__social">
              <h5 className="footer__sub-heading">social media</h5>
              <div className="footer__icons u-margin-top-small">
                <a href="#">
                  <FaInstagram className="footer__icon" />
                </a>
                <a href="#">
                  <FaFacebookSquare className="footer__icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__copyright u-margin-top-medium">
            <p>
              &copy; {new Date().getFullYear()} Hair Stylist Hair by B. Website
              created by
              <a
                href="http://www.flavioaquino.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Flavio Aquino
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
