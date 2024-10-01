import { IPO_Lists_JSON } from "../utils/constants";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const IpoLists = () => {
  const navigate = useNavigate();

  const handleRowClick = (company) => {
    navigate(`/${encodeURIComponent(company)}`, {
      state: { company: company },
    });
  };
  return (
    <div className="cardContent">
      <table>
        <thead>
          <tr>
            <th>
              <small>Company Name/Issue Date</small>
            </th>
            <th>
              <small>Issue Size </small>
            </th>
            <th>
              <small>Prise Range</small>
            </th>
            <th>
              <small>Min Invest/Qty</small>
            </th>
          </tr>
        </thead>
        <tbody>
          {IPO_Lists_JSON.map((ipo, index) => {
            return (
              <tr key={index} onClick={() => handleRowClick(ipo.company)}>
                <td
                  style={{  paddingLeft: "20px" }}
                  data-label="Company Name/Issue Date"
                >
                  <strong>{ipo.company}</strong>
                  <br />
                  <small style={{ marginTop: "5px" }}> {ipo.issueDate}</small>
                </td>

                <td data-label="Issue Size">
                  <strong>₹{ipo.issueSize}</strong>
                </td>
                <td data-label="Prise Range">
                  <strong>₹{ipo.priceRange}</strong>
                </td>
                <td data-label="Min Invest/Qty">
                  <strong>₹{ipo.minInvest}</strong>
                  <br />
                  <small>{ipo.Qty}</small>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IpoLists;
