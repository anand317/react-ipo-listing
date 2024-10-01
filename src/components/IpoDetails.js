import "./styles.css";
import IpoTimeLine from "./IpoTimelLine";
import About from "./About";
import { ABOUT_TEXT } from "../utils/constants";
import Summary from "./Summary";
import Header from "./Header";

const IpoDetails = () => {
  return (
    <div className="ipo-details-wrapper">
      <div className="ipo-details-container">
        <div className="ipo-container">
          <Header/>
          <Summary/>
          <IpoTimeLine />
          <About text={ABOUT_TEXT} />
        </div>
      </div>
    </div>
  );
};
export default IpoDetails;
