// import logo from "./logo.svg";
// import "./App.css";
// import Submit from "./submit";
// import styles from './style.modules.css'

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/register";
import imagepage from "./pages/image";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/image" component={imagepage} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

// function App() {
//   const handleLogout = (e) => {
//     alert("Anda logout.");
//   };

//   const handleOnClick = event =>{
//     this.setState({danger:true})
//   }

//   const {danger} = this.state
//   return (
//     <div className="App">
//       <Container className={styles.container}>
//         <Container>
//           <Button className="mb-4" color="danger" onClick={this.handleOnClick}></Button>
//         </Container>
//       </Container>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello src</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <button onClick={handleLogout}>Logout</button>
//       </header>
//       <Submit />
//     </div>
//   );
// }

export default App;
