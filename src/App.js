import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './HomePage/Layout';
import NavBar from './Nav/Nav';
import AboutLayout from './AboutPage/AboutLayout';
import DonateLayout from './DonatePage/DonateLayout';
import NotFound from './Errors/PageNotFound';
import BeliefLayout from './BeliefPage/BeliefLayout';
import LeadershipLayout from './LeadershipPage/LeadershipLayout';
import Footer from './Nav/Footer';
import EventsLayout from './EventsPage/EventsLayout';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        
        <Route path={"/"} element={<Layout/>}/>
        <Route path={"/about"} element={<AboutLayout/>}/>
        <Route path={"/donate"} element={<DonateLayout/>}/>
        <Route path={"/belief"} element={<BeliefLayout/>}/>
        <Route path={"/leadership"} element={<LeadershipLayout/>}/>
        <Route path={"/stream"} element={<LeadershipLayout/>}/>
        <Route path={"/events"} element={<EventsLayout/>}/>

        <Route element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
