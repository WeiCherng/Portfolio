import "./App.css";
import React, { useState }  from "react";
import Landing from "./Components/Landing/Landing";
import Content from "./Components/Content/Content"

function App() {
  const [landing, setLanding] = useState(true);
  const [content, setContent] = useState(false);
  const [selected, setSelected] = useState()

  const changePage = (e) => {
    setSelected(e)
    setLanding(false)
    setTimeout(() => {
      setContent(true)
    }, 900);
    
  }
  return (
    <div className="app">
        <Landing visibility={landing} setVisibility={changePage}></Landing>
        {content && <Content choice={selected}/>}
    </div>
  );
}

export default App;
