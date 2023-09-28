import EventComponent from "./EventComponent"

export default function EventsWeek({events,viewWeek}){
    return(
    <>
        <div className={`listed `}>
            {events.map((event,index) =>  <EventComponent event={event} viewWeek={viewWeek} index={index}key={Math.random()*10000} length={events.length}/>)}
        </div>
    </>
    )
}