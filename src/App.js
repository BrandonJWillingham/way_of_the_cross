import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './HomePage/Layout';
import NavBar from './Nav/Nav';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Layout/>}/>
      </Routes>
    </div>
  );
}

export default App;
