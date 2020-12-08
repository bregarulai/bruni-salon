import React from "react"
import aboutImg from "../images/about.svg"

const About = () => {
  return (
    <section className="u-section about">
      <div className="u-section-center">
        <h2 className="heading-tertiary u-center-text">about</h2>
        <div className="about__container">
          <div className="about__content">
            <p className="about__text u-margin-top-medium u-margin-bottom-medium">
              Put a Dominican touch to your hair in Wesley Chapel, Lutz or Tampa
              area. I am a 3rd generation of hair stylist which was born in
              Dominican Republic. I grew up in New York City graduated from Paul
              Mitchell school, and ended finding roots in Florida. As
              cosmetologist we define passion into enhancement of your beauty.
              We touch not just your hair as a Cosmetologis, we touch your soul.
              I am located in a convinient point close to your needs. Come visit
              us and enjoy our dynamic environment of hairstylists.
            </p>
          </div>
          <div className="about__img-box">
            <img
              src={aboutImg}
              alt="Hairstylist Hair by B about illustration"
            ></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
