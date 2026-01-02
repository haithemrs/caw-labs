import TaskCard from "./TaskCard";

export default function Column({ title, status, tasks, moveTask }) {
  return (
    <div className="column">
      <h2>{title}</h2>

      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard key={task.id} task={task} moveTask={moveTask} />
        ))}
    </div>
  );
}
