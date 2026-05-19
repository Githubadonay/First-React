function User({ name, username, id }) {
  return (
    <div>
        <div key={id} style={{ border: "1px solid red", margin: "10px" }}>
          <div>{name}</div>
          <div>{username}</div>
          <div>{id}</div>
        </div>
    </div>
  );
}

export default User;
