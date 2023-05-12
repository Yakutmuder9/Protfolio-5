import { qand, question } from "../assets";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";

const FAQs = () => {
  return (
    <div className="faqs">
      <div className="container">
        <div className="dollar-img">
          <img src={qand} alt="" />
          <img src={question} alt="" />
        </div>

        <div className="faqs-header">
          <h2>Frequently asked questions</h2>
          <p>
            Here are some of the questions that I have got asked frequently. So
            I have added them here for you. If you have any more
            questions/doubts you can always contact me below.
          </p>
        </div>

        <div className="faqs-accordian-container">
          <div className="faqs-card">
            <h6>What motivates me to design such amazing websites?</h6>
            <FaAngleDown />
          </div>
          <div className="faqs-card">
            <h6>What motivates me to design such amazing websites?</h6>
            <FaAngleDown />
          </div>
          <div className="faqs-card">
            <h6>What motivates me to design such amazing websites?</h6>
            <FaAngleDown />
          </div>
          <div className="faqs-card">
            <h6>What motivates me to design such amazing websites?</h6>
            <FaAngleDown />
          </div>
          <div className="faqs-card">
            <h6>What motivates me to design such amazing websites?</h6>
            <FaAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
