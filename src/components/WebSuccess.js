import { light, cash, pcArrow, pcHeart, pcCup } from "../assets/index";

const WebSuccess = () => {
  return (
    <div className="web-success">
      <div className="success-header">
        <div className="header">
          <img src={light} alt="" />
          <h2>3 boxes every successful website needs to cheek</h2>
          <img src={light} alt="" />
        </div>

        <p>
          There are millions of websites but not every website is successful. I
          have focused on and mastered the right things that make a website
          successful.
        </p>
      </div>
      <div className="success-card-container">
        <div className="success-card">
          <img src={pcArrow} alt="" />
          <h4>Beautiful yet high converting</h4>
          <p>
            This goes hand in hand. To stand out in the crowd a website needs to
            be extremely beautiful thus converting more leads. Isn't it the best
            combination for a website?
          </p>
        </div>
        <div className="success-card">
          <img src={pcCup} alt="" />
          <h4>Get you ahead of the competition</h4>
          <p>
            It's 2021 and the competition just became so much crazier. It's the
            perfect time to invest in a good website that will leave the
            competition way behind.
          </p>

          <div className="ligth-img">
            <img src={cash} alt="" />
          </div>
        </div>
        <div className="success-card">
          <img src={pcHeart} alt="" />
          <h4>Amaze your customers</h4>
          <p>
            Who doesn’t appreciate beautiful and well-crafted things? Your
            audience will do it too by taking action. In a world full of boring
            websites give them an amazing experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebSuccess;
