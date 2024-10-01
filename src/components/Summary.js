import { SUMMARY_DATA } from "../utils/constants";
import SummaryCard from "./SummaryCard";
import './styles.css'

const Summary = ()=>{
    return(
    <div className="ipo-container-cards">
            <h6>IPO Details</h6>
            <div className="ipo-summary">
              {SUMMARY_DATA.map((summary) => {
                return <SummaryCard key={summary.id} {...summary} />;
              })}
            </div>
          </div>
    )
}
export default Summary