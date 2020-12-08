import React from "react"
import Image from "gatsby-image"

const ServiceCard = ({ service }) => {
  return (
    <div className="services__card">
      <div className="services__content">
        <h3 className="heading-quaternary u-center-text u-margin-top-medium u-margin-bottom-small">
          hair color
        </h3>
        <p className="paragraph u-margin-bottom-medium">
          I'm baby quinoa edison bulb normcore plaid. Polaroid venmo locavore
          succulents tbh. Messenger bag pinterest taiyaki twee freegan tousled
          woke raclette kale chips succulents.
        </p>
      </div>
      <div className="services__img-box">
        <Image
          fluid={colorImage}
          alt="Hair stylist Hair by B service hair color image"
        />
      </div>
    </div>
  )
}

export default ServiceCard
