import {
  paint,
  write,
  wireFrame,
  threeD,
  logoD,
  mouse,
  dollar,
  bulb,
  muInstrument,
  processArrow,
} from "../assets/index";

const Process = () => {
  return (
    <div className="process">
      <div className="container">
        <div className="dollar-img">
          <img src="" alt="" />
        </div>

        <div className="process-header">
          <h2>My process for my work</h2>
          <p>
            When things did in a structured way we save so much resource. And
            also we can track everything that we do. So here’s my process for my
            projects
          </p>
        </div>

        <div className="process-row-container">
          <div className="bg-wall"></div>

          <div className="process-card-content">
            <div className="precess-text-desc">
              <h5>Preparing content</h5>
              <p>
                First, we decide on a goal for the website and preparecontent to
                give a direction to the website and achieve the goal.
              </p>
            </div>

            <div className="process-num">
              <h2>1</h2>
              <img src={processArrow} alt="" />
            </div>

            <div className="process-model">
              <img src={paint} alt="" />
            </div>
          </div>

          <div className="row-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="process-row-container">
          <div className="bg-wall"></div>

          <div className="process-card-content">
            <div className="precess-text-desc">
              <h5>Preparing content</h5>
              <p>
                First, we decide on a goal for the website and preparecontent to
                give a direction to the website and achieve the goal.
              </p>
            </div>

            <div className="process-num">
              <h2>2</h2>
              <img src={processArrow} alt="" />
            </div>

            <div className="process-model">
              <img src={paint} alt="" />
            </div>
          </div>

          <div className="row-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="process-row-container">
          <div className="bg-wall"></div>

          <div className="process-card-content">
            <div className="precess-text-desc">
              <h5>Preparing content</h5>
              <p>
                First, we decide on a goal for the website and preparecontent to
                give a direction to the website and achieve the goal.
              </p>
            </div>

            <div className="process-num">
              <h2>3</h2>
              <img src={processArrow} alt="" />
            </div>

            <div className="process-model">
              <img src={paint} alt="" />
            </div>
          </div>

          <div className="row-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="process-row-container">
          <div className="bg-wall"></div>

          <div className="process-card-content">
            <div className="precess-text-desc">
              <h5>Preparing content</h5>
              <p>
                First, we decide on a goal for the website and preparecontent to
                give a direction to the website and achieve the goal.
              </p>
            </div>

            <div className="process-num">
              <h2>4</h2>
              <img src={processArrow} alt="" />
            </div>

            <div className="process-model">
              <img src={paint} alt="" />
            </div>
          </div>

          <div className="row-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="process-row-container">
          <div className="bg-wall"></div>

          <div className="process-card-content">
            <div className="precess-text-desc">
              <h5>Preparing content</h5>
              <p>
                First, we decide on a goal for the website and preparecontent to
                give a direction to the website and achieve the goal.
              </p>
            </div>

            <div className="process-num">
              <h2>5</h2>
             
            </div>

            <div className="process-model">
              <img src={paint} alt="" />
            </div>
          </div>

          <div className="row-img">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
