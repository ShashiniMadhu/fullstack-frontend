import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//https://www.npmjs.com/package/axios - for add axios
import axios from 'axios';
//https://www.npmjs.com/package/react-router-dom - for add routings
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUser from './users/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
