import { useState } from "react";

function AddTaskModal({
  addTask,
  closeModal,
}) {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [deadline, setDeadline] =
    useState("");

  const handleSubmit = () => {
    if (title.trim() === "") {
      alert("Title is required");
      return;
    }

    if (deadline === "") {
      alert("Deadline is required");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      deadline,
      status: "todo",
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDeadline("");

    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-header">
          <h2>Add New Task</h2>

          <button
            className="close-btn"
            onClick={closeModal}
          >
            ✕
          </button>
        </div>

        <div className="modal-field">
          <label>TASK TITLE</label>

          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />
        </div>

        <div className="modal-field">
          <label>DESCRIPTION</label>

          <textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />
        </div>

        <div className="modal-row">

          <div className="modal-field">
            <label>PRIORITY</label>

            <select
              value={priority}
              onChange={(e) =>
                setPriority(
                  e.target.value
                )
              }
            >
              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>
            </select>
          </div>

          <div className="modal-field">
            <label>STATUS</label>

            <select disabled>
              <option>
                To Do
              </option>
            </select>
          </div>

        </div>

        <div className="modal-field">
          <label>DEADLINE</label>

          <input
            type="date"
            value={deadline}
            onChange={(e) =>
              setDeadline(
                e.target.value
              )
            }
          />
        </div>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Cancel
          </button>

          <button
            className="create-btn"
            onClick={handleSubmit}
          >
            Create Task
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddTaskModal;