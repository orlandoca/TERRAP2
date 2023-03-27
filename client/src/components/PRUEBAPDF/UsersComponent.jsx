import React from "react";
const UsersComponent = ({ users }) => {
return (
    <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Nro de telefono</th>
                    <th scope="col">Documento</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.document}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    ); 
};

export default UsersComponent;