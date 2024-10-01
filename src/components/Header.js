import { useLocation ,useNavigate} from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate=useNavigate();

  const { company } = location.state || {};

  const handleBackBtnClick = ()=>{
    navigate('/')

  }
  return (
    <>
      <div className="header">
        <div className="header-sub-container">
          <button className="btn-back" onClick={handleBackBtnClick}>◀</button>

          <div className="company-details">{company}</div>
        </div>
        <div className="header-sub-container2">
          <div className="download-img" >
            <img
              style={{ width: "100%" }}
              src="https://d10b7kv2y188ox.cloudfront.net/react/document-download.svg"
              alt="downloadbtn"
            />
          </div>
          <div className="btn-container">
            <button className="btn-apply">Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
