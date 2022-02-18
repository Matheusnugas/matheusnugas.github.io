import React from "react";
import "./Contact.css";
import contactImg from "../images/contactImg.png";
import { Link } from "react-router-dom";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import { useState } from "react";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_b1d6905",
      "template_eua4kvm",
      toSend,
      "user_GoH3MBOvP9kVGDrxwUB5G"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({ from_name: "", message: "", reply_to: "" });
  };

  const handleClick = (e) => {
    const { from_name, message, reply_to } = toSend;
    if (
      from_name.length > 1 &&
      reply_to.includes("@") &&
      reply_to.includes(".com") &&
      message.length > 10
    ) {
      e.target.innerText = "Message sent";
    } else {
      e.target.innerText = "Try to submit again";
    }
  };

  return (
    <div className="contactWrapper">
      <div className="formWrapper">
        <form
          action="mailto:matheusnugas@gmail.com"
          method="POST"
          enctype="multipart/form-data"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            required
            placeholder="Your Name"
            name="from_name"
            onChange={handleChange}
            value={toSend.from_name}
          />
          <input
            type="email"
            required
            placeholder="Your e-mail"
            name="reply_to"
            onChange={handleChange}
            value={toSend.reply_to}
          />
          <textarea
            type="textarea"
            required
            placeholder="Your message here!"
            name="message"
            onChange={handleChange}
            value={toSend.message}
          />
          <button className="formButton" type="submit" onClick={handleClick}>
            Submit!
          </button>
          <div className="contactLinkWrap">
            <p>
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/matheusluznugas/",
                }}
                target="_blank"
              >
                <img className="linkedin" src={linkedin} alt="github" />
              </Link>
            </p>
            <p>
              <Link
                to={{
                  pathname: "https://github.com/Matheusnugas",
                }}
                target="_blank"
              >
                <img className="octocat" src={github} alt="github" />
              </Link>
            </p>
          </div>
        </form>
        <div>
          <img src={contactImg} alt="chatImage" className="contactImg" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
