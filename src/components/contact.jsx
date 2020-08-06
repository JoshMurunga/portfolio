import React, { Component } from "react";
import emailjs from "emailjs-com";

class Contact extends Component {
  render() {
    return (
      <div className="contact-component contact-scroll">
        <div className="contact-me">CONTACT ME</div>
        <div className="contact-media text-center">
          <a
            target="_blank"
            href="https://linkedin.com/in/joshua-murunga-55236a32/"
            rel="noopener noreferrer"
            className="mr-5"
          >
            <i
              className="fa fa-linkedin-square"
              aria-hidden="true"
              style={{ color: "#0e76a8" }}
            ></i>
          </a>

          <a
            href="https://github.com/JoshMurunga"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5"
          >
            <i
              className="fa fa-github-square"
              style={{ color: "#211F1F" }}
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://twitter.com/JoshMurunga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-twitter-square"
              style={{ color: "#00acee" }}
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="text-center contact-message">
          Don't be a stranger. Get in touch with me through the social media
          links above or email me at{" "}
          <a href="mailto:joshmurush@gmail.com" className="cv-email">
            joshmurush@gmail.com
          </a>
          . If you prefer, you could use the message box below. Cheers!
        </div>
        <div className="contact-form">
          <form action="">
            <div className="form-row">
              <div className="form-group col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="form-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                id=""
                cols="22"
                rows="5"
                className="form-control"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="text-right">
              <button className="btn btn-primary " type="submit">
                Send &nbsp;
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
