import React, { Component } from "react";
import "./Testimonial.css";
// import Person1 from "../../images/NewPerson2.jpeg"
import Person1 from "../../images/Person1.jpg";
import Person2 from "../../images/Person2.jpg";
import Person3 from "../../images/Person3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

class Testmonial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testimonials: [
        {
          name: "John Doe",
          role: "Lead Engineer",
          content:
            "Lorem ipsum dolor sit amet; consector adipiscing elit. Quam.",
          imgSrc: Person1,
        },
        {
          name: "Natasha",
          role: "Software Engineer",
          content:
            "Lorem ipsum dolor sit amet; consector adipiscing elit. Quam.",
          imgSrc: Person2,
        },
        {
          name: "James Hill",
          role: "Delivery Engineer",
          content:
            "Lorem ipsum dolor sit amet; consector adipiscing elit. Quam.",
          imgSrc: Person3,
        },
      ],
    };
  }

  render() {
    return (
      <div className="testimonialContainer">
        <h2 className="testimonialHeader">
          What <span className="underlineTxtWhite">Our Cust</span>omers Says
        </h2>
        <div className="testimonialWrapper">
          {this.state.testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonialCard">
              <div className="testimonialContentWrapper">
                <p className="testimonialContent">{testimonial.content}</p>
                {/* <p className="closeQuote"></p> */}
                <p className="closeQuote">
                  <FontAwesomeIcon
                    color="rgb(32,32,32)"
                    size="2x"
                    icon={faQuoteRight}
                  />
                </p>
              </div>
              <div className="profileWrapper">
                <div className="profileInfoWrapper">
                  <p className="profileName">{testimonial.name}</p>
                  <p className="profileRole">{testimonial.role}</p>
                </div>
                <div className="profileImageWrapper">
                  <img
                    className="profileImage"
                    src={testimonial.imgSrc}
                    alt="Person 1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonialScrollWrapper">
          <div className="testimonialScrollActive"></div>
          <div className="testimonialScrollInActive"></div>
          <div className="testimonialScrollInActive"></div>
          <div className="testimonialScrollInActive"></div>
        </div>
      </div>
    );
  }
}

export default Testmonial;
