import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    gallery: allContentfulGalleryBruni(
      limit: 4
      sort: { fields: image___createdAt, order: DESC }
    ) {
      images: nodes {
        id
        title
        altText
        image {
          fluid(maxWidth: 300) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Gallery = () => {
  const {
    gallery: { images },
  } = useStaticQuery(query)
  return (
    <section className="u-section gallery">
      <div className="u-section-center">
        <h2 className="heading-tertiary gallery__title u-center-text">
          gallery
        </h2>
        <div className="gallery__container u-margin-top-medium u-margin-bottom-medium">
          {images.map(image => {
            return (
              <div key={image.id} className="gallery__img-box">
                <Image
                  fluid={image.image.fluid}
                  alt={image.altText}
                  className="gallery__img"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gallery
