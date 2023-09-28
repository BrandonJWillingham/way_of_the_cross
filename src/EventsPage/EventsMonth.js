import "./Events.css"
import { useState } from "react"
import EventComponent from "./EventComponent"

export default function EventsMonths ({date,events }){
    const [selectedDate,setSelectedDate] = useState(-1)


    const resetDate = ()=>{
        setSelectedDate(-1)
    }
    // console.log(new Date("2003","00",1).getDay())
    // console.log(events)

    const dateArr = date.split("-").map(element=> parseInt(element))
    const firstDayOfMonth = new Date(dateArr[0], --dateArr[1], 1)

    
    // either 28,35,42

    // events in month should only be for that month 


    //generating calendarSpaces 
    // if it has an event it is clickable and has the class eventOnDate
    function loadCalendarDays(events,firstDayOfMonth){
        const calendarDays = []
        let eventIndex = 0;
        const hello =(event)=>{
            event.stopPropagation()
            console.log("hello world")
        }
        const resetDate =(event)=>{
            event.stopPropagation()
            // console.log("called resetDate")
            setSelectedDate(-1)
        }

        const chooseDate = (event,date) =>{
            // event stop propagations prevents event listeners from propagating down to the children 
            event.stopPropagation()
            // console.log(event)
            setSelectedDate(date)
        }
        const eventDate = (eventIndex) =>{
            let date = events[eventIndex].date.split('-')[2]
            return parseInt(date)
        }

        const calendarLength = (firstDayOfMonth) =>{
            const month = firstDayOfMonth.getMonth()
            const day = firstDayOfMonth.getDay()
            if([0,2,4,6,7,9,11].includes(month) && day > 4) return 42 
            if([3,5,8,10].includes(month) && day > 5)return 42
            if(month == 1 && day == 0) return 28
            return 35
        }

        for(let i = 0; i < calendarLength(firstDayOfMonth); i++){
            let date = i - firstDayOfMonth.getDay()+1
            let calendarSpace
            if (date > 0 )
                {
                if (eventDate(eventIndex) != date){
                    calendarSpace = (
                        <div className="calendarBox calendarSpace" key={i}>
                            {<p>{i+1 -firstDayOfMonth.getDay()}</p>}
                        </div>
                    )
                    calendarDays.push(calendarSpace)
                }else{
                    
                    let eventsJSX = []

                    do{
                        // this needs to change. in this do while loop i should only add components into the date, if there are multiple events
                        // in the same day it will create two different cal cells with the same date 
                       eventsJSX.push(<EventComponent event={events[eventIndex]} resetDate={resetDate}/>)
                        if(eventIndex != (events.length-1)){
                            eventIndex++
                        }else {
                            //edge case when eventIndex reaches end of list
                            eventIndex = 0
                        }
                        

                    }while(eventDate(eventIndex) == date )
                    // console.log(eventsJSX)
                    calendarSpace = (
                        <div onClick={(e)=>chooseDate(e,date)} className="calendarBox calendarSpace eventOnDate" key={i}>
                            
                            {<p className="eventOnDate">{date}</p>}
                           
                            {selectedDate == date && <div className="eventContainer" onClick={(event)=>resetDate(event)}>{eventsJSX}</div>}
                            
                        </div>
                    )
                    calendarDays.push(calendarSpace)
                    eventsJSX = []
                }
                
            } else{

                calendarSpace = ( 
                    <div className="calendarBox calendarSpace"key={i}>
                        <p></p>
                    </div>
                )
                calendarDays.push(calendarSpace)
            }
            
            
        }
        return calendarDays

    }

    
    return (
        <div className="calendarContainer" onClick={()=>resetDate()}>
            <ul className="flex row wrap" >
                <li className="calendarBox"><p>Sun</p></li>
                <li className="calendarBox"><p>Mon</p></li>
                <li className="calendarBox"><p>Tue</p></li>
                <li className="calendarBox"><p>Wed</p></li>
                <li className="calendarBox"><p>Thu</p></li>
                <li className="calendarBox"><p>Fri</p></li>
                <li className="calendarBox"><p>Sat</p></li>
            </ul>
            <ul className="flex row wrap">
                {loadCalendarDays(events,firstDayOfMonth)}
            </ul>
        </ div>
    )
}