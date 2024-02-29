import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(["hey there"]);
  const [input, setInput] = useState("");

  const handler = () => {
    const newTodos = [...todos, input];
    setTodos(newTodos);
  };
  return (
    <div>
      <div>
        <input
          className="todo_input"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          className="todo_btn"
          onClick={() => {
            handler;
          }}
        >
          add
        </button>
      </div>
      <div>
        <ul style={{ listStyle: "none" }}>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
