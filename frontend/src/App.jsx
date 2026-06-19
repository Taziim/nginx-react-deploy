import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Delete task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle completed
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1>📝 Todo App</h1>

      <div style={styles.inputBox}>
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.item}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                ...styles.text,
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                color: todo.completed ? "gray" : "black",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTask(todo.id)}
              style={styles.deleteButton}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Simple inline styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    fontFamily: "Arial",
    textAlign: "center",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  input: {
    padding: "8px",
    width: "70%",
  },
  addButton: {
    padding: "8px 12px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  deleteButton: {
    cursor: "pointer",
    background: "transparent",
    border: "none",
    fontSize: "16px",
  },
};

export default App;