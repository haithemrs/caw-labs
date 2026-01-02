export default function TaskCard({ task, moveTask }) {
  return (
    <div className="task">
      <p>{task.title}</p>

      {task.status !== "todo" && (
        <button onClick={() => moveTask(task.id, "todo")}>⬅</button>
      )}

      {task.status !== "done" && (
        <button
          onClick={() =>
            moveTask(task.id, task.status === "todo" ? "progress" : "done")
          }
        >
          ➡
        </button>
      )}
    </div>
  );
}
