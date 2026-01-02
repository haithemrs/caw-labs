import { useState } from "react";
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, status: "todo" }]);
  };

  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div>
      <h1>Kanban Board</h1>

      <TaskForm addTask={addTask} />

      <div className="board">
        <Column title="To Do" status="todo" tasks={tasks} moveTask={moveTask} />
        <Column
          title="In Progress"
          status="progress"
          tasks={tasks}
          moveTask={moveTask}
        />
        <Column title="Done" status="done" tasks={tasks} moveTask={moveTask} />
      </div>
    </div>
  );
}
