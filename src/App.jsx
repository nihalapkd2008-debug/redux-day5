import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./redux/userActions";

function App() {
  const dispatch = useDispatch();

  const { loading, users, error } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux API Users</h1>

      {loading && <h2>Loading...</h2>}

      {error && <h2>Error: {error}</h2>}

      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default App;