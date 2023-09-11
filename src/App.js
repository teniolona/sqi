// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./Navbar";
import Frontpage from "./Frontpage";
import Description from "./Description";

const App = () => {
  return (
    <div>
      {/* <h1>Welcome to my App</h1> */}
      <Navbar/>
      <Frontpage/>
      <Description/>
    </div>
  )
}

export default App