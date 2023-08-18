import historyPhoto1 from "../images/historyPhoto1.jpg"
import historyPhoto2 from "../images/historyPhoto2.jpg"
import historyPhoto3 from "../images/historyPhoto3.jpg"
import { useEffect } from "react";


export default function ChurchHistoryComponent(){

    let slideIndex = 0;
 
    useEffect(()=>{
        
        const changePhoto = setInterval(()=>{

            const elements = document.getElementsByClassName("historySlide")

            for (let i = 0 ; i < elements.length; i++){
                elements[i].style.display = "none"
            }
            slideIndex++
            if(slideIndex >= elements.length){
                console.log("if statement called")
                slideIndex = 0
            }

            console.log("slideIndex", slideIndex)

            elements[slideIndex].style.display = "block"
        },5000)

        return () =>{
            clearInterval(changePhoto)
        } 
       
    },[slideIndex])
    return (
        <section className="ChurchHistory" hidden="hidden">
             <div className="component" >
                <div className="textContent">

                    <h3>
                        Way of the Cross History
                    </h3>
                    <p>
                        Apostle James Pitt, his wife and 5 faithful members, founded Way of the Cross Church 1957.  
                    </p>
                    <p style={{marginTop:0}}> Location has been moved from their living room to 1368 boston road store front church and in 1976 found home in harlem at 124-126 w 136th St</p>
                </div>
                <div className="imgContent">

                    <div className="slideShowContainer">
                        <div className="historySlide" style={{display:"block"}}>
                            <img src={historyPhoto1} alt="church history photo" />
                        </div>

                        <div className="historySlide" style={{display:"none"}}>
                            <img src={historyPhoto2} alt="church history photo" />
                        </div>

                        <div className="historySlide" style={{display:"none"}}>
                            <img src={historyPhoto3} alt="church history photo" />
                        </div>
                    </div>
                    

                    <div className="dots">
                    
                </div>

            </div>
             </div>
            

                
        </section>
    )
}