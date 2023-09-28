export default function EventComponent({event,resetDate,viewWeek,index,length}){

    // const style = {"--index": index} as React.CSSProperties
    const stopProp = (e)=>{
        e.stopPropagation()
    }

    const dayOfWeek={
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday"
    }

    const dayOfMonth={
        0:"Jan",
        1:"Feb",
        2:"Mar",
        3:"Apr",
        4:"May",
        5:"Jun",
        6:"Jul",
        7:"Aug",
        8:"Sep",
        9:"Oct",
        10:"Nov",
        11:"Dec",
    }

    const getTime = (time) =>{
        let midDay
        let hour = parseInt(time.slice(0,2))
        if(hour > 12) {
            midDay = "PM"
            hour -= 12
        }else if(hour == 12){
            midDay="PM"
        }else{
            midDay= "AM"
        }
        return `${hour}${time.slice(2)} ${midDay}`
    }

    const suffix=(day) => {

        if(day == 11) return (<sup>th</sup>)
        if((day %10) == 1 ) return (<sup> st </sup>)
        if((day %10) == 2 ) return (<sup> nd </sup>)
        return (<sup> th </sup>)
    }

    const date = new Date(event.date.replace(/-/g,"\/"))


    return(
        <div style={{"--index":index,"--length":length}} onClick={(event)=>stopProp(event)}key={Math.random()*10000} className={`event blackText ${viewWeek? "weeklyView hide":""}`}>
            <div>
                <div className="flex space-between background">
                    <h3 className="flex col">
                        <span>
                        {dayOfWeek[date.getDay()] +"," } 
                        </span>
                    <span>
                        {dayOfMonth[date.getMonth()] + " " + date.getDate()} {suffix(date.getDate())}
                    </span>
                    </h3>
                    {resetDate && <button onClick={(event)=>resetDate(event)} className="fit-content hvrBtn" >{"X"}</button>}
                    
                </div>

                <div className="fit-content">
                    {getTime(event.time.slice(0,-3))}
                </div>
            </div>
            
            {event.img && <img src="img"></img>}
            <div>
                <div className="flex contentCenter">
                    {event.bio}
                </div>
                <div className="flex contentCenter">
                    {"Find us at: "+event.location}
                </div>
            </div>
            
        </div>
    )
}