import React, { useEffect, useState } from "react";
import axios from "axios";
import GeneratePDF from './GeneratePDF';

const UserReport = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user/getAll");
        console.log("Para ver que tiene USERS: ",users);
        setUsers(response.data);
      } catch (err) {
        console.log("error");
      }
    };
    
    getAllUsers();
  }, [users]);

  return (
    <div>
          <button
            className="btn btn-danger ml-10"
            onClick={() => GeneratePDF(users)}
          >
            Generar reporte
          </button>
    </div>
  );
};

export default UserReport;