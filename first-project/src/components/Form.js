import { useState } from "react";

const Form = () => {
  useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [user, setUser] = useState({
    name: null,
    fullname: null,
    age: null,
  });

  const handler = () => {
    const newUser = { name: username, fullname: fullname, age: age };
    setUser(newUser);
  };

  return (
    <div>
      <h1>Form</h1>
      <div className="form">
        <label>Username:-</label>
        <input onChange={(e) => setUsername(e.target.value)}></input>
        <label>Full Name:-</label>
        <input onChange={(e) => setFullname(e.target.value)}></input>
        <label>Age:-</label>
        <input onChange={(e) => setAge(e.target.value)}></input>
        <button className="form_submit_btn" onClick={handler}>
          {" "}
          submit
        </button>
      </div>
      <div>
        <ul className="form_list" style={{ listStyle: "none" }}>
          <li>{user.name}</li>
          <li>{user.fullname}</li>
          <li>{user.age}</li>
        </ul>
      </div>
    </div>
  );
};

export default Form;
