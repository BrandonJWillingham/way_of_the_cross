import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './HomePage/Layout';
import NavBar from './Nav/Nav';
import AboutLayout from './AboutPage/AboutLayout';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Layout/>}/>
        <Route path={"/about"} element={<AboutLayout/>}/>
      </Routes>
    </div>
  );
}

export default App;
