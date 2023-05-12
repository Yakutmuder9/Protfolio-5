import { footGr, light } from "../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-side-text">
          <h2>Now it’s your turn</h2>
          <p>
            Let's start working together. You can drop me a mail, send a message
            on Facebook, or fill the form (please double check your email). I’ll
            get back to you within 24 hours.MY EMAIL: yakutmuder9@gmail.com
          </p>
          <div className="footer-btns">
            <button className="btn dark">Drop an email</button>
            <button className="btn dark">Message on linkedln</button>
          </div>
          <img src={light} alt="" />
        </div>
        <div className="footer-form">
          <img src="" alt="" />

          <div className="form-row">
            <p>
              <strong>Name</strong>
            </p>
            <input type="text" placeholder="Type your name here" />
          </div>
          <div className="form-row">
            <p>
              <strong>Email</strong>
            </p>
            <input type="text" placeholder="Type your email here" />
          </div>
          <div className="form-row">
            <p>
              <strong>Message</strong>
            </p>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here"
              className="message-inp"
              rows="5"
            ></textarea>

          </div>
          <button className="btn">Send</button>
        </div>
      </div>
      <div className="footer-wave">
        <img src={footGr} loading="lazy" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
