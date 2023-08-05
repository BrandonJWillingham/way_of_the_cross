
import Welcome from "./Welcome";
import Footer from "../Nav/Footer";
import JoinUs from "./JoinUs";
import EventComponent from "./EventComponent";
import LocationComponent from "./LocationComponent";
export default function Layout(){
    return(
        <div className="container">
            <div className="ImgDiv"/>
            <div className="welcome ">
                <h1>Welcome </h1>
                <h1> To</h1>
                <h1 className="cross"> The Cross </h1>
                <h4> Be Apart of Harlem's Gifted and Blessed </h4>
            </div>


            
            
            <JoinUs/>
            <Welcome/>
            <LocationComponent/>
            <EventComponent/>
            <Footer/>
       </div>
    )
}