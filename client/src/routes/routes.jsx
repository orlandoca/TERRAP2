import { Route, Routes } from "react-router-dom";

import BookingHome from "../pages/BookingHome";
import Home from "../pages/Home";
import BookingAdd from "../pages/BookingAdd";
import BookingDetail from "../pages/BookingDetail";
import BookingEdit from "../pages/BookingEdit";

import UserHome from "../pages/UserHome";
import UserAdd from "../pages/UserAdd";
import UserDetailcomp from "../components/UserDetailcomp";
import UserEditComp from "../components/UserEditComp";
import LandingPage from "../pages/LandingPage";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking/home" element={<BookingHome />} />
      <Route path="/booking/new" element={<BookingAdd />} />
      <Route path="/booking/detail/:id" element={<BookingDetail />} />
      <Route path="/booking/edit/:id" element={<BookingEdit />} />

      <Route path="/user/home" element={<UserHome />} />
      <Route path="/user/new" element={<UserAdd />} />
      <Route path="/user/edit/:id" element={<UserEditComp />} />
      <Route path="/user/detail/:id" element={<UserDetailcomp />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  );
}
