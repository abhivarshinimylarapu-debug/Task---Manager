import { Link } from "react-router-dom";

function TaskCard({
  task,
  deleteTask,
  updateTaskStatus,
}) {
  return (
    <div className="task-card">

      <div className="card-top">

        <span
          className={`priority-badge ${task.priority.toLowerCase()}`}
        >
          {task.priority}
        </span>

        {task.status === "done" && (
          <span className="completed-badge">
            COMPLETED
          </span>
        )}

      </div>

      <Link
        to={`/task/${task.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <h3>{task.title}</h3>

        <p className="task-description">
          {task.description}
        </p>

        <p className="deadline">
          Deadline: {task.deadline}
        </p>
      </Link>

      <div className="task-actions">

        <select
          value={task.status}
          onChange={(e) =>
            updateTaskStatus(
              task.id,
              e.target.value
            )
          }
        >
          <option value="todo">
            To Do
          </option>

          <option value="inprogress">
            In Progress
          </option>

          <option value="done">
            Done
          </option>
        </select>

        <button
          className="delete-btn"
          onClick={() =>
            deleteTask(task.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;