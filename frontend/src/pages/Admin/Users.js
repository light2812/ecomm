import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu.js";
import Layout from "./../../components/Layout/Layout.js";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/users`); // Fetch users from backend API
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1>User List</h1>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                {user.name} - {user.email} - {user.phone} - {user.address}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
