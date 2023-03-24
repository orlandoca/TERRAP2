import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { MyRoutes } from "./routes/routes";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Sidebar />

          <MyRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
}
