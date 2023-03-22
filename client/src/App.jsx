import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./routes/routes";

export default function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <MyRoutes></MyRoutes>
      </BrowserRouter>
    </div>
  );
}
