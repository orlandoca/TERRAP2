import { createBrowserRouter } from "react-router-dom";
import BookingHome from "../pages/BookingHome";
import BookingAdd from "../pages/BookingAdd";
import BookingDetail from "../pages/BookingDetail";
import BookingEdit from "../pages/BookingEdit";
import UserAdd from "../pages/UserAdd";
import UserEditComp from "../components/UserEditComp";
import UserDetailcomp from "../components/UserDetailcomp";
import Home from "../pages/Home";
import Layout from "../Menu/Layout";
import UserHome from "../pages/UserHome";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/booking/home/",
        element: <BookingHome />,
      },

      {
        path: "/booking/new",
        element: <BookingAdd />,
      },

      {
        path: "/booking/detail/:id",
        element: <BookingDetail />,
      },
      {
        path: "/booking/edit/:id",
        element: <BookingEdit />,
      },
      {
        path: "/user/new",
        element: <UserAdd />,
      },
      {
        path: "/user/home",
        element: <UserHome />,
      },
      {
        path: "/user/edit/:id",
        element: <UserEditComp />,
      },
      {
        path: "/user/detail/:id",
        element: <UserDetailcomp />,
      },
    ],
  },
]);
