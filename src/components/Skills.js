import { Headphone, motionTr, webTr, copyTr, settingTr } from "../assets";

const Skills = () => {
  return (
    <div className="skill">
      <div className="skill-container">
        <div className="skill-left-side-card">
          <div className="motion-card">
            <button className="btn dark">
              3D and Motion <span>3D</span>
            </button>
            <div className="img-cont">
              <img src={motionTr} alt="" />
            </div>
          </div>
          <div className="design-card">
            <div className="btn-container">
              <button className="btn dark">
                Website Design<span>Web</span>
              </button>
            </div>
            <div className="img-cont">
              <img src={webTr} alt="" />
            </div>
          </div>
        </div>
        <div className="skill-middle-img">
          {" "}
          <img src={Headphone} alt="" />
        </div>
        <div className="skill-right-side-card">
          <div className="motion-card">
            <div className="img-cont">
              <img src={motionTr} alt="" />
            </div>
            <button className="btn dark">
              <span>3D</span> 3D and Motion
            </button>
          </div>
          <div className="design-card">
            <div className="img-cont">
              <img src={webTr} alt="" />
            </div>
            <div className="btn-container">
              <button className="btn dark">
                <span>Web</span> Website Design
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-vid">
        <video autoPlay loop muted>
          <source
            src="https://uploads-ssl.webflow.com/5ff93875d1eabc23f4b12b57/5ff97abfc34e6343385d07b6_final 15bf-transcode.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  );
};

export default Skills;
