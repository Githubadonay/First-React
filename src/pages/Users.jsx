import { useParams } from "react-router-dom";
import { use, useEffect } from "react";
function Users() {
    const { username } = useParams();
    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export default Users;