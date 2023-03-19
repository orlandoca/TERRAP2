import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {isAuthenticated && (
        <div className="row justify-content-center align-self-centerss">
          <div className="col ">
            <picture>
              <img src={user.picture} className="rounded mx-auto d-block" />
            </picture>
          </div>
          <div className="col ">
            <h6>{user.name}</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
