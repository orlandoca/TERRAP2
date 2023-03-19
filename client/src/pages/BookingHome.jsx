import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import BookingComp from "../components/BookingComp";

export default function BookingHome() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">
      <div>
        {isAuthenticated ? (
          <div>
            <BookingComp />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
