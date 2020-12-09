import React from "react"
import Form from "./Form"

const Contact = () => {
  return (
    <section id="contact" className="u-section contact">
      <div className="u-section-center">
        <h3 className="heading-tertiary u-center-text u-margin-bottom-medium">
          contact
        </h3>
        <div className="contact__form">
          <Form />
          <button className="btn btn--primary btn--submit u-center-text">
            send
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
