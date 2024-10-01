import Stepper from "./Stepper";

const IpoTimeLine = () => {

    const steps = [
        { label: "Bidding Starts", date: "23/09/2024" },
        { label: "Bidding Ends", date: "25/09/2024" },
        { label: "Allotment Finalisation", date: "26/09/2024" },
        { label: "Refund Initiation", date: "26/09/2024" },
        { label: "Demat Transfer", date: "27/09/2024" },
        { label: "Listing Date", date: "30/09/2024" }
      ];
  return (
    <>
      <div className="ipo-container-cards">
        <h6>IPO TimeLine</h6>
        <div className="ipo-timeline">
            <Stepper steps={steps} activeStep={4}/>
        </div>
      </div>
    </>
  );
};

export default IpoTimeLine;
