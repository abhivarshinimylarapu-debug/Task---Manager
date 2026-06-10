import TaskCard from "./TaskCard";

function TaskColumn({
  title,
  tasks,
  deleteTask,
  updateTaskStatus,
}) {
  return (
    <div className="task-column">
      <div className="column-header">
        <h2>{title}</h2>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks here</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTaskStatus={
              updateTaskStatus
            }
          />
        ))
      )}
    </div>
  );
}

export default TaskColumn;