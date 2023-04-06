import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/login";
import Header from "./Components/header";
import Home from "./Components/home";
import Details from "./Components/details";

function App() {
  return (
    <div className="App">
      <Router >
        <Header name="himanshu"></Header>
        <Routes>
          <Route exact path="/"  element={<Login />}/>
          <Route exact path="/home"  element={<Home />}/>
          <Route exact path="/detail/:id" element={<Details/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
