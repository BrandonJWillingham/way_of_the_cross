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
        setPosition(0)
        setViewWeek(false)
    }

    const changeToWeek = ()=>{
        setViewWeek(true)
    }

    const handleLeftClick=()=>{
        console.log("start of left click\nposition:", position,"\nnewposition",newposition)
        const distance = 360 / week.length
        const newPosition = position + distance
        const doct= document.querySelector(".listed")
        newposition += distance 
        if(position >= (360-distance)){
            setPosition(0)
        }else{
          setPosition(newPosition)  
        }
        doct.style.transform = `perspective(2000px) rotateY(${newPosition}deg)`
        console.log("end of left click\nposition:", position,"\nnewposition",newPosition)
    }
    const handleRightClick=()=>{
        const doct= document.querySelector(".listed")
        const distance = 360 / week.length
        const newPosition = position - distance
        if(newPosition <= -360){
            setPosition(0)
        }else{
          setPosition(newPosition)  
        }
        doct.style.transform = `perspective(2000px) rotateY(${newPosition}deg)`
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
            return limit >= event.date
        })
        return beforeDate.filter((event)=> event.date >= date)
    }

    const activeDotLogic = (index)=>{
        if(index == position) return "black"
        if(position < 0){
            if(Math.abs(position) == index*360/week.length) return "black"
            return ""
        }else{
            if(position == 360 - (index*360/week.length)) return "black"
            return ""
        }
    }

    const dotClick = (index,event)=>{
        event.preventDefault()
        const newPosition = (index*360*-1/week.length)
        setPosition(newPosition)
        const doct= document.querySelector(".listed")
        doct.style.transform = `perspective(2000px) rotateY(${newPosition}deg)`
    }

    return (
        <section>
            <div className="eventsHeader">
                <img src={""} alt="testing"/>
                <h3>some header text</h3>
                <p> some following up smaller header text</p>
            </div>
            
            <div className="flex contentCenter">
                <div className="viewSwitch flex ">
                  <button className="hvrBtn" onClick={changeToWeek}>
                    {/* when active, bolded */}
                    <p>Week</p>
                </button>
                <button className="hvrBtn" onClick={changeToMonth}>
                    <p>Month</p>
                </button>  
                </div>
                
            </div>


            {viewWeek && week && <div className="view">
                {/* swap day */}
                <div style={{justifyContent:"center"}}className="flex">
                    <button style={{transform:"rotate(180deg)",margin:"10px"}} className="gg-arrow-right-o"onClick={handleLeftClick}>
                        {/* left arrow */}
                    </button>

                        {week.map((i,index)=><span onClick={(event)=>dotClick(index,event)} style={{marginRight:"5px",marginLeft:"5px",alignSelf:"center",backgroundColor:`${activeDotLogic(index)}`}} className="dot"/>)}

                    <button style={{margin:"10px"}}className="gg-arrow-right-o" onClick={handleRightClick}>
                        {/* right arrow */}
                    </button>
                </div>
                
                {<EventsWeek events={week} viewWeek={viewWeek} position={position}/>}
                
            </div>}
            {!viewWeek && events && <EventsMonth events={events} date={date} viewWeek={viewWeek} />}
        </section>
    )
}