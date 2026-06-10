import { useParams, Link } from "react-router-dom";

function TaskDetails() {
  const { id } = useParams();

  const tasks =
    JSON.parse(
      localStorage.getItem("tasks")
    ) || [];

  const task = tasks.find(
    (task) => task.id === Number(id)
  );

  if (!task) {
    return (
      <div className="task-details-page">
        <h1>Task Not Found</h1>

        <Link to="/dashboard">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const formattedDate =
    new Date(
      task.deadline
    ).toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );

  return (
    <div className="task-details-page">

      <div className="task-details-container">

        <Link
          to="/dashboard"
          className="back-link"
        >
          ← Back to board
        </Link>

        <div className="task-badge-wrapper">
          <div
            className={`priority-badge ${task.priority.toLowerCase()}`}
          >
            {task.priority}
          </div>
        </div>

        <h1 className="task-title">
          {task.title}
        </h1>

        <div className="info-card">

          <div className="info-row">
            <span>Status</span>

            <strong>
              {task.status === "todo"
                ? "To Do"
                : task.status ===
                  "inprogress"
                ? "In Progress"
                : "Done"}
            </strong>
          </div>

          <div className="info-row">
            <span>Deadline</span>

            <strong>
              {formattedDate}
            </strong>
          </div>

        </div>

        <div className="description-card">

          <h4>DESCRIPTION</h4>

          <p>
            {task.description}
          </p>

        </div>

      </div>

    </div>
  );
}

export default TaskDetails;