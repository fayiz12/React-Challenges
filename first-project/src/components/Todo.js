import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(["hello"]);
  const [input, setInput] = useState("");

  const handler = () => {
    const newTodos = [...todos, input];
    setTodos(newTodos);
  };
  const deletehandler = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        <input
          className="todo_input"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className="todos_btn" onClick={handler}>
          add
        </button>
      </div>
      <div className="todo_listing">
        <ul className="todo_list" style={{ listStyle: "none" }}>
          {todos.map((todo) => (
            <li className="each_list">
              {todo}
              <button className="todo-btn" onClick={deletehandler}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
