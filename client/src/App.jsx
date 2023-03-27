import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { MyRoutes } from "./routes/routes";
import { useAuth0 } from "@auth0/auth0-react";
import Landing from "./components/Landing";

export default function App() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      <BrowserRouter>
        <div>
          {isAuthenticated ? (
            <div className="row">
              <div className="col-2 ">
                <Sidebar />
              </div>
              <div className="col-10">
                <div className="row">
                  <Navbar />
                </div>
                <div className="row container">
                  <MyRoutes />
                </div>
              </div>
            </div>
          ) : (
            <Landing />
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}
