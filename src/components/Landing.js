import { Headphone } from "../assets/index";

const Landing = () => {
  return (
    <div className="landing">
      <video className="bg-video" autoPlay loop muted>
        <source
          src="https://uploads-ssl.webflow.com/5ff93875d1eabc23f4b12b57/5ff97a848efa2b09fb9a2f5d_test%20hipi%206br-transcode.webm"
          type="video/webm"
        />
      </video>
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
          <button className="btn">I want a cool website</button>
          <button className="btn dark">Drop an email</button>
        </div>
      </div>
      <div className="hero-img">
        <img src={Headphone} alt="" />
      </div>
    </div>
  );
};

export default Landing;
