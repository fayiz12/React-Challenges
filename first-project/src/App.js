import GamePage from "./components/diceGame/GamePage";
import Landing from "./components/diceGame/Landing";
import {useState} from "react"
function App() {
  const [toggle,setToggle]=useState(true)

  const toggleGamePlay=()=>{
    setToggle((prev)=>!prev)
  }
  return (
    <div className="App">
      {
        toggle ? <Landing toggle={toggleGamePlay}/>:<GamePage/>
      }
      
      
    </div>
  );
}

export default App;
