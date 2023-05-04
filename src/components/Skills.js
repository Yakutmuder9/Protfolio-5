import { Headphone } from "../assets";

const Skills = () => {
  return (
    <div className="skill">
      <div className="container">
        <div className="skill-side-card">
          <div className="motion-card">
            <p>
              3D and Motion <span>3D</span>
            </p>
            <img src="" alt="" />
          </div>
          <div className="design-card">
            <div>
              <p>
                <span>Website Design</span>
              </p>
              Web
            </div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="skill-img">
          <img src={Headphone} alt="" />
        </div>
        <div className="skill-side-card">
          <div className="motion-card">
            <p>
              3D and Motion <span>3D</span>
            </p>
            <img src="" alt="" />
          </div>
          <div className="design-card">
            <div>
              <p>
                <span>Website Design</span>
              </p>
              Web
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
