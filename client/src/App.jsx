import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { MyRoutes } from "./routes/routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div className="row">
            <div className="col-3 " style={{ backgroundColor: "CadetBlue" }}>
              <Sidebar />
            </div>
            <div className="col-9" style={{ backgroundColor: "white" }}>
              <div className="row">
                <Navbar />
              </div>
              <div className="row container">
                <MyRoutes />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
