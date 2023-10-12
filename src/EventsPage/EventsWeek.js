import EventComponent from "./EventComponent"

export default function EventsWeek({events,viewWeek,position}){
    document.documentElement.style.setProperty("--test",`${position}`)
    return(
    <>
        <div style={{"--position":position}}className={`listed `}>
            {events.map((event,index) =>  <EventComponent event={event} viewWeek={viewWeek} index={index}key={Math.random()*10000} length={events.length} position={position}/>)}
        </div>
        
    </>
    )
}