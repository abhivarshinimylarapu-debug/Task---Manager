import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // Demo/local authentication
    if (
      email === "sara@example.com" &&
      password === "user123"
    ) {
      localStorage.setItem(
        "authToken",
        "task_manager_demo_token"
      );

      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-content">
          <div className="login-logo">
            📋
          </div>

          <h1>Task Manager</h1>

          <p className="login-subtitle">
            Sign in to open your project dashboard.
          </p>

          <ul className="feature-list">
            <li>
              Plan work across To Do, In Progress, and Done
            </li>

            <li>
              Track priorities and deadlines in one place
            </li>

            <li>
              Your board is saved in this browser
            </li>
          </ul>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back</h2>

          <p>Sign in to continue</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;