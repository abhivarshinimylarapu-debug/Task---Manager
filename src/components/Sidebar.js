import { useNavigate } from "react-router-dom";

function Sidebar({ openModal }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="sidebar">

      <div className="sidebar-top">

        <div className="logo">
          📋
        </div>

        <h2>Task Manager</h2>

        <p>Project Dashboard</p>

      </div>

      <div className="sidebar-buttons">

        <button
          className="add-btn"
          onClick={openModal}
        >
          + Add Task
        </button>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Log out
        </button>

      </div>

    </div>
  );
}

export default Sidebar;