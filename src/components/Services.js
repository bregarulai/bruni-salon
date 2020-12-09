import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ServiceCard from "./ServiceCard"

const query = graphql`
  {
    services: allContentfulServiceBruni {
      nodes {
        id
        title
        altText
        desc: childContentfulServiceBruniDescriptionTextNode {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Services = () => {
  const {
    services: { nodes },
  } = useStaticQuery(query)
  return (
    <section className="u-section services">
      <div className="u-section-center">
        <h2 className="heading-tertiary u-center-text">services</h2>
        <div className="services__container">
          {nodes.map(service => {
            return <ServiceCard key={service.id} service={service} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
