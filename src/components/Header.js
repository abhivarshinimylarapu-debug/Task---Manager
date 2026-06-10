import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <header>
      <h1>Task Management App</h1>

      <Navbar />

      <button onClick={handleLogout}>
        Logout
      </button>

      <hr />
    </header>
  );
}

export default Header;