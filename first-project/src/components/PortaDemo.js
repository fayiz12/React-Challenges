import ReactDOM from "react-dom";

const PortalDemo = ({ handler }) => {
  return ReactDOM.createPortal(
    <div>
      <h1>hey there iam portal</h1>
      <button onClick={handler}>click</button>
    </div>,
    document.getElementById("portable-root"),
  );
};

export default PortalDemo;
