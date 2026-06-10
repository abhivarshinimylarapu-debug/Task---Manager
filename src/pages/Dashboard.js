import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TaskColumn from "../components/TaskColumn";
import AddTaskModal from "../components/AddTaskModal";
import tasksData from "../data/tasks";

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : tasksData;
  });

  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("All");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  const updateTaskStatus = (
    id,
    newStatus
  ) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter(
    (task) => {
      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        task.description
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesPriority =
        priority === "All" ||
        task.priority.toLowerCase() ===
          priority.toLowerCase();

      return (
        matchesSearch &&
        matchesPriority
      );
    }
  );

  const todoTasks = filteredTasks.filter(
    (task) => task.status === "todo"
  );

  const inProgressTasks =
    filteredTasks.filter(
      (task) =>
        task.status === "inprogress"
    );

  const doneTasks = filteredTasks.filter(
    (task) => task.status === "done"
  );

  return (
  <div className="app-layout">
    <Sidebar
      openModal={() =>
        setShowModal(true)
      }
    />

    <div className="main-content">

      {showModal && (
        <AddTaskModal
          addTask={addTask}
          closeModal={() =>
            setShowModal(false)
          }
        />
      )}

      <div className="filters-section">

        <label className="filter-label">
          Filter by Priority
        </label>

        <div className="filters">

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <select
            value={priority}
            onChange={(e) =>
              setPriority(
                e.target.value
              )
            }
          >
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

        </div>

      </div>

      <div className="task-columns">

        <TaskColumn
          title={`📝 To Do (${todoTasks.length})`}
          tasks={todoTasks}
          deleteTask={deleteTask}
          updateTaskStatus={
            updateTaskStatus
          }
        />

        <TaskColumn
          title={`🚀 In Progress (${inProgressTasks.length})`}
          tasks={inProgressTasks}
          deleteTask={deleteTask}
          updateTaskStatus={
            updateTaskStatus
          }
        />

        <TaskColumn
          title={`✅ Done (${doneTasks.length})`}
          tasks={doneTasks}
          deleteTask={deleteTask}
          updateTaskStatus={
            updateTaskStatus
          }
        />

      </div>

    </div>
  </div>
);
}

export default Dashboard;