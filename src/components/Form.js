import React from "react"

const Form = () => {
  return (
    <form action="" className="form">
      <div>
        <h4 className="heading-quaternary u-margin-bottom-medium u-center-text">
          send a message for an appointment
        </h4>
      </div>
      <div className="form__group">
        <input
          id="name"
          type="text"
          className="form__input"
          placeholder="Name"
          required
        />
        <label htmlFor="name" className="form__label">
          Name
        </label>
      </div>
      <div className="form__group">
        <input
          id="cell"
          type="text"
          className="form__input"
          placeholder="Cell"
          required
        />
        <label htmlFor="cell" className="form__label">
          Cell
        </label>
      </div>
      <div className="form__group">
        <input
          id="email"
          type="email"
          className="form__input"
          placeholder="Email"
          required
        />
        <label htmlFor="email" className="form__label">
          Email
        </label>
      </div>
      <div className="form__group">
        <textarea
          id="message"
          type="textarea"
          className="form__input"
          placeholder="Message"
          required
        />
        <label htmlFor="message" className="form__label">
          Message
        </label>
      </div>
    </form>
  )
}

export default Form
