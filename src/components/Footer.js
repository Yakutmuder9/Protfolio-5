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
            <button>Drop an email</button>
            <button>Message on linkedln</button>
          </div>
          <img src="" alt="" />
        </div>
        <div className="footer-form">
          <img src="" alt="" />
          <div>
            <p>
              <strong>Name</strong>
            </p>
            <input type="text" placeholder="Type your name here" />
          </div>
          <div>
            <p>
              <strong>Email</strong>
            </p>
            <input type="text" placeholder="Type your email here" />
          </div>
          <div>
            <p>
              <strong>Message</strong>
            </p>
            <input type="text" placeholder="Type your message here" />
          </div>
          <button>Send</button>
        </div>
      </div>
      <div className="footer-wave">
        <img src="" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
