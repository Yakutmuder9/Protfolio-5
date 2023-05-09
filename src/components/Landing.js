import { Headphone } from "../assets/index";

const Landing = () => {
  return (
    <div className="landing">
      <div className="hero-txt">
        <h1>
          Upgrade your business with a beautiful yet high converting website
        </h1>
        <p>
          Getting a super amazing website was never this easy. Get yourself a
          beautiful and creative website and amaze your audience with the best
          web experience.
        </p>
        <div className="action-btns">
          <button>I want a cool website</button>
          <button>Drop an email</button>
        </div>
      </div>
      <div className="hero-img">
        <img src={Headphone} alt="" />
      </div>
    </div>
  );
};

export default Landing;
