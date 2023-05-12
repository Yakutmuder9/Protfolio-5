import { pkPro, blPro, ogPro, gdPro, prPro } from "../assets";

const Works = () => {
  return (
    <div className="works">
      <div className="container">
        <div className="dollar-img">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <div className="work-header">
          <h2>Some of my previous work</h2>
          <p>
            I create every project as my personal project. I put my blood and
            sweat into every project I do and always try to make every project
            amazing.
          </p>
        </div>

        <div className="work-cards-container">
          <div className="work-card">
            <img src={blPro} alt="" />
            <div className="work-card-text-cont">
              <h3>My previous portfolio v.1 </h3>
              <p>
                I had planned for a simple layout yet very modern and
                minimalasatic to help me explain all my work and process and the
                result turned preety good.
              </p>
            </div>
          </div>
          <div className="work-card">
            <img src={ogPro} alt="" />
            <div className="work-card-text-cont">
              <h3>My previous portfolio v.1 </h3>
              <p>
                I had planned for a simple layout yet very modern and
                minimalasatic to help me explain all my work and process and the
                result turned preety good.
              </p>
            </div>
          </div>
        </div>

        <div className="slide-work-container">
          <div className="slide-card">
            <img src={gdPro} alt="" />
            <div className="work-card-text-cont">
              <h4>My previous portfolio v.1 </h4>
              <p>
                I had planned for a simple layout yet very modern and
                minimalasatic to help me explain all my work and process and the
                result turned preety good.
              </p>
            </div>
          </div>
          <div className="slide-card">
            <img src={pkPro} alt="" />
            <div className="work-card-text-cont">
              <h4>My previous portfolio v.1 </h4>
              <p>
                I had planned for a simple layout yet very modern and
                minimalasatic to help me explain all my work and process and the
                result turned preety good.
              </p>
            </div>
          </div>
          <div className="slide-card">
            <img src={prPro} alt="" />
            <div className="work-card-text-cont">
              <h4>My previous portfolio v.1 </h4>
              <p>
                I had planned for a simple layout yet very modern and
                minimalasatic to help me explain all my work and process and the
                result turned preety good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
