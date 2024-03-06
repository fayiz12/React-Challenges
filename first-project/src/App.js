import PortalDemo from "./components/PortaDemo";
import { useState } from "react";
function App() {
  //this is a dice game
  // const [toggle,setToggle]=useState(true)
  // const toggleGamePlay=()=>{
  //   setToggle((prev)=>!prev)
  // }
  // return (
  //   <div className="App">
  //     {
  //       toggle ? <Landing toggle={toggleGamePlay}/>:<GamePage/>
  //     }
  //   </div>
  // );
  const [show, setShow] = useState(false);
  const handler = () => {
    setShow(!show);
  };
  return (
    <div>
      {show ? <h1>hello</h1> : null}
      <PortalDemo handler={handler} />
    </div>
  );
}

export default App;
