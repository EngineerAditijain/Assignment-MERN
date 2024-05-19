import React, { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import User from "./user";

const URL = "http://localhost:5000/users";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, [refetch]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{display:"flex", flexDirection:"column",gap:2}}>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
        style={{
          marginTop:"1rem",
          height:"34px",
          alignSelf:"center",
          padding:5
        }}
        
      />
      <ul>
        {filteredUsers.map((user, i) => (
          <li key={i}>
            <User user={user} setRefetch={setRefetch} refetch={refetch} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
