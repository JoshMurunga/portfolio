import React, { Component } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  namechange = (e) => {
    this.setState({ name: e.target.value });
  };

  emailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  subjectChange = (e) => {
    this.setState({ subject: e.target.value });
  };

  messageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
    const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const userId = process.env.REACT_APP_YOUR_USER_ID;

    this.sendEmail(
      serviceId,
      templateId,
      {
        message_subject: this.state.subject,
        to_name: "Josh Murunga",
        from_name: this.state.name,
        from_email: this.state.email,
        message_html: this.state.message,
      },
      userId
    );
  };

  sendEmail(serviceId, templateId, variables, userId) {
    emailjs
      .send(serviceId, templateId, variables, userId)
      .then((res) => {
        this.setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        toast.success("Your Message Has Been Sent Successfully :)");
      })
      .catch((err) =>
        toast.error("Something Must Have Gone Wrong...Please try again")
      );
  }

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
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="name"
                  id="name"
                  onChange={this.namechange}
                  value={this.state.name}
                  required
                />
              </div>
              <div className="form-group col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  onChange={this.emailChange}
                  value={this.state.email}
                  required
                />
              </div>
            </div>
            <div className="form-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                onChange={this.subjectChange}
                value={this.state.subject}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id=""
                cols="22"
                rows="5"
                className="form-control"
                placeholder="Message"
                name="message"
                onChange={this.messageChange}
                value={this.state.message}
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
          <ToastContainer className="toasty" />
        </div>
      </div>
    );
  }
}

export default Contact;
