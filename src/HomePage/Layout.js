
import Welcome from "./Welcome";
import JoinUs from "./JoinUs";
import EventComponent from "./EventComponent";
import LocationComponent from "./LocationComponent";
export default function Layout(){
    return(
        <div className="">
            <div className="ImgDiv"/>

            <div className="welcome">
                <h1>Welcome </h1>
                <h1> To</h1>
                <h1 className="cross"> The Cross </h1>
                <h4> Be Apart of Harlem's Gifted and Blessed </h4>
            </div>


            
            <section className="webEdge" >
                <JoinUs/>
                <Welcome/>
                <LocationComponent/>
                <EventComponent/> 
            </section>
            
       </div>
    )
}