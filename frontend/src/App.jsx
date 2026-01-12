import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" ? (
        <>
          <Login />
          <p
            className="text-center mt-4 cursor-pointer text-blue-600"
            onClick={() => setPage("register")}
          >
            Don’t have an account? Register
          </p>
        </>
      ) : (
        <>
          <Register />
          <p
            className="text-center mt-4 cursor-pointer text-blue-600"
            onClick={() => setPage("login")}
          >
            Already have an account? Login
          </p>
        </>
      )}
    </>
  );
}

export default App;
