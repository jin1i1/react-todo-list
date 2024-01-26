/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

/*import React from "react";
import Hello from './Hello';

function App() {
	return (
    //<Hello name="React" />
    <Hello />
  );
}

export default App;*/

// import Hello from "./Hello";

// function App() {
//   return <Hello name="React!" />;
// }

// export default App;

/*import Hello from "./Hello"; //10강 
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="React!" />
      <p>I love React!</p>
      <Hello name="React!" />
    </Wrapper>      
  );
}

export default App;*/

/*import React, {useState} from "react"; //11강

import Input from "./input"

function App(){
  return <Input/>
}

export default App;*/

/*import React, {useState, useEffect} from 'react'; //13강

function App() {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      console.log("useEffect");
      document.title = `You clicked &{count} times`; 
    }
  )

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={
        () => {
          console.log("Click");
          setCount(count + 1);
        }
      }>
        Click Me
      </button>
    </>
  );
}
export default App;*/

/*import React from "react"; //14강
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/">Index</Link>
      </button>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  var navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }

  return (
    <>
      <h2>Index</h2>
      <button type="button" onClick={handleClick}>Go home</button>
    </>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2>
      <p>This is home</p>
    </>
  );
}

export default App;*/

/*import { useState } from "react"; //17강
function App() {
  // const [click1, setClick1] = useState(false);
  // const [click2, setClick2] = useState(false);
  // const [click3, setClick3] = useState(false);
  // const [click4, setClick4] = useState(false);
  // const [click5, setClick5] = useState(false);

  const [click1, toggle1] = useToggle(false);
  const [click2, toggle2] = useToggle(false);
  const [click3, toggle3] = useToggle(false);
  const [click4, toggle4] = useToggle(false);
  const [click5, toggle5] = useToggle(false);

  // const toggle1 = () => setState1((click1) => !click1);
  // const toggle2 = () => setState2((click2) => !click2);
  // const toggle3 = () => setState3((click3) => !click3);
  // const toggle4 = () => setState4((click4) => !click4);
  // const toggle5 = () => setState5((click5) => !click5);

  return (
    <>
      <button onClick={toggle1}>{click1 ? "Hello" : "Goodbye"}</button>
      <button onClick={toggle2}>{click2 ? "Hello" : "Goodbye"}</button>
      <button onClick={toggle3}>{click3 ? "Hello" : "Goodbye"}</button>
      <button onClick={toggle4}>{click4 ? "Hello" : "Goodbye"}</button>
      <button onClick={toggle5}>{click5 ? "Hello" : "Goodbye"}</button>
    </>
  );
}

const useToggle = (defaultValue = false) => {
  const[click, setClick] = useState(defaultValue)
  const toggle = () => setClick((click)=>!click)

  return [click, toggle];
}

export default App;*/

import React from "react";
import Items from "./components/Items";
import Header from "./components/Header";
import CreateItem from "./components/Createitem";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// eslint-disable-next-line no-undef
dotenv.config();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Items/>}/>
          <Route path="/todo" element={<Items endpoint="?status=todo"/>}/>
          <Route path="/done" element={<Items endpoint="?status=done"/>}/>
          <Route path="/create_item" element={<CreateItem/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;