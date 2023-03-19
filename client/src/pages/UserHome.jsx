import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import UserComp from "../components/UserComp";

export default function UserHome() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <UserComp />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
