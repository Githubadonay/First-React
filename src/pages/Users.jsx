import { useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const { id } = useParams();
  const [user, setUserData] = useState({});

  async function fetchUserData() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    setUserData(data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Link to="/">Back to Users</Link>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.username}</h1>
    </div>
  )

}

export default Users;
