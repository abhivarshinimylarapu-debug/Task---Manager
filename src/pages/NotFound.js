import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-card">

        <h1>404</h1>

        <h2>Page not found</h2>

        <p>
          The page you are looking for does not
          exist or was moved.
        </p>

        <Link
          to="/dashboard"
          className="notfound-btn"
        >
          Back to dashboard
        </Link>

      </div>
    </div>
  );
}

export default NotFound;