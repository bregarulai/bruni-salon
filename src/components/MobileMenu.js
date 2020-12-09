import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"
import { useContext } from "react"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { GatsbyContext } from "../context/context"

const MobileMenu = () => {
  const { links, isMenuOpen } = useContext(GatsbyContext)
  return (
    <div className="menu">
      <div
        className={
          isMenuOpen
            ? "menu__background menu__background--grow"
            : "menu__background"
        }
      >
        &nbsp;
      </div>
      <nav className="menu__nav">
        <ul className="menu__list">
          {links.map((link, index) => {
            return (
              <li key={index} className="menu__item">
                <AnchorLink
                  to={link.url}
                  title={link.label}
                  className="menu__link"
                  stripHash
                />
              </li>
            )
          })}
          <div className="menu__social">
            <a href="#">
              <FaInstagram className="menu__icon" />
            </a>
            <a href="#">
              <FaFacebookSquare className="menu__icon" />
            </a>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu
