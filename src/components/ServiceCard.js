import React from "react"
import Image from "gatsby-image"

const ServiceCard = ({ service }) => {
  const {
    title,
    altText,
    desc: { description },
    image: { fluid },
  } = service
  return (
    <div className="services__card">
      <div className="services__content">
        <h3 className="heading-quaternary u-center-text u-margin-top-medium u-margin-bottom-small">
          {title}
        </h3>
        <p className="paragraph u-margin-bottom-medium">{description}</p>
      </div>
      <div className="services__img-box">
        <Image fluid={fluid} alt={altText} className="services__img" />
      </div>
    </div>
  )
}

export default ServiceCard
