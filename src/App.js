import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Card from "./Card";

const App = () => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .catch((err) => setError(err.message));
    if (res) setUsers(res.data.results);
  };

  return (
    <div>
      {users && users.map((user, i) => <Card key={i} userData={user} />)}
      {(!users || users.length === 0) && "No users found"}
      {error && <p>{error}</p>}
    </div>
  );
};
export default App;
