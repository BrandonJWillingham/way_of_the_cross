// import events function, input week/month, output events within parameters
// import header Img
import EventsWeek from "./EventsWeek"
import EventsMonth from "./EventsMonth"
import {useEffect, useState} from "react"
import { formatAsDate, today } from "../utils/date-time"
import { listEvents } from "../utils/api"

export default function EventsLayout() {

    /*
    events arr sorted by date 
    events = [
        {
            date,
            location,
            bio,
            time,
            id
        },
    ]
    events will be listed by week
    <EventsWeek events = {events}/> 
    or by calendar month
    <EventsMonth events = {events}/> 
    seperated by if statemnet on useState(true) var "weekView "

    */
    // date set as 2023-09-18
    const [events,setEvents] = useState([])
    const [eventsError,setEventsError] = useState({})
    const [viewWeek, setViewWeek] = useState(true)
    // const [date,setDate] = useState(today())
    const [date,setDate] = useState("2023-09-10")
    const [month,setMonth] = useState([])
    const [week,setWeek] = useState([])
    const [position,setPosition] = useState(0)

    let newposition = 0
    
    const changeToMonth =()=>{
        setViewWeek(false)
    }

    const changeToWeek = ()=>{
        setViewWeek(true)
    }
    const showRightDiv=()=>{
        console.log("called show right", newposition)
        if (newposition <= -360){
            newposition = 0
            document.querySelector(".weeklyView").style.display = "block"
        }
        else{
            let index = newposition/(360/week.length)
            index < 0? index*=-1:index=index;
            document.querySelectorAll(".weeklyView")[index].style.display = "block"
        }
    }

    const showLeftDiv =()=>{
        console.log("called show left", newposition)
        if (newposition >= 360 || newposition == 0){
            newposition = 0
            document.querySelector(".weeklyView").style.display = "block"
        }else{
            let index = newposition/(360/week.length) 
            index < 0 ? index = week.length-(index * -1) : index = week.length - index 
            console.log("index in show left: ", index)
            if(index<0) index *= -1
            document.querySelectorAll(".weeklyView")[index].style.display = "block"
            hideDiv(index+1)
        }
    }
    const hideDiv =(index)=>{
        document.querySelectorAll(".weeklyView")[index].style.display = "none"
    }
    const handleLeftClick=()=>{
        const doct= document.querySelector(".listed")
        const distance = 360 / week.length
        newposition += distance
        console.log("position: ",newposition)
        showLeftDiv()
        doct.style.transform = `perspective(1000px) rotateY(${newposition}deg)`
    }
    const handleRightClick=()=>{
        const doct= document.querySelector(".listed")
        const distance = 360 / week.length
        newposition -= distance
        console.log("position: ", newposition)
        showRightDiv()
        doct.style.transform = `perspective(1000px) rotateY(${newposition}deg)`
    }

    useEffect(()=>{
        loadEvents(date)
        console.log("date")
    }, [date])

    async function loadEvents(){
        const abortController = new AbortController()
        listEvents(date,abortController.signal)
        .then((response)=>{
            response.forEach((event)=> event.date = formatAsDate(event.date))
            let sorted = response.sort((a,b)=> {if((a.date > b.date)==false) return -1; return 0})
            console.log("sorted: ", sorted)
            setEvents(response)
            setMonth(sorted)
            setWeek(selectedWeek(response))
        })
        .catch(setEventsError)
        return () => abortController.abort()
    }

    const selectedWeek =(events)=>{

        // work on util function that adds 7 days and sends back properstring 
        let limitArr = date.split("-").map(element => parseInt(element))
        limitArr[2] += 7 
        let limit = `${limitArr[0]}-0${limitArr[1]}-${limitArr[2]}`
        
        let beforeDate = events.filter((event)=> {
            return limit > event.date
        })
        return beforeDate.filter((event)=> event.date > date)
    }

    return (
        <section>
            <div className="eventsHeader">
                <img src={""} alt="testing"/>
                <h3>some header text</h3>
                <p> some following up smaller header text</p>
            </div>
            
            <div className="viewSwitch">
                <button onClick={changeToWeek}>
                    {/* when active, bolded */}
                    <p>Week</p>
                </button>
                <button onClick={changeToMonth}>
                    <p>Month</p>
                </button>
            </div>

            <div className="view">
                {/* swap week */}
                <div>
                    <button onClick={handleLeftClick}>
                        {/* left arrow */}
                    </button>

                    <button onClick={handleRightClick}>
                        {/* right arrow */}
                    </button>
                </div>
                <ul>{}</ul>
                {/* {weekView ? <EventsWeek events={events}/> : <EventsMonth events={events}/> } */}
                {viewWeek && week && <EventsWeek events={week} viewWeek={viewWeek}/>}
                {!viewWeek && events && <EventsMonth events={events} date={date} />}
            </div>

        </section>
    )
}