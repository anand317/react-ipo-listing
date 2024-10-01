import "./App.css";
import IpoDetails from "./components/IpoDetails";
import IpoLists from "./components/IpoLists";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import BreadCrumb from "./components/BreadCrumb";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <BreadCrumb />}
      <Routes>
        <Route path="/" element={<IpoLists />}></Route>
        <Route path="/:company" element={<IpoDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
