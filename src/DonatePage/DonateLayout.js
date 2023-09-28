// import {stripe}

import DonationBodyComponent from "./DonationBodyComponent";
import DonationInformation from "./DonationInfoComponent";
import { useState,useEffect } from "react";
import "./Donate.css"

export default function DonateLayout(){
    const [donate,setDonate] = useState(false)

    useEffect(()=>{

        const timer = setTimeout (()=>{
            console.log("timed")
            const div = document.getElementsByClassName("paymentInformation")[0]
            div.classList.add("hide")
            div.classList.remove("fade")
            console.log("end of timer", div.classList)
        }, 700)
        return ()=> clearTimeout(timer)
    },[donate])

    const handleDonate = () =>{
        console.log(window.scrollY)
        console.log(document.getElementsByClassName("paymentInformation"))
        const div = document.getElementsByClassName("paymentInformation")[0];
    
  
        console.log("class list",div.classList)
        if(div.classList[1] == "hide"){
            div.classList.remove("hide")
        }else{
            div.classList.add("fade")
            setDonate(!donate)
        }

    }
    return(
        <main>
            <section className="headerDonate">
                <h1> Giving</h1>
                <p>Be apart of our support to the community</p>
            </section>

           
            <DonationBodyComponent/>

            <button onClick={handleDonate}>
                Donate
            </button>

            {/* {donate ? <DonationInformation/> : <p>hidden</p>} */}
            <DonationInformation />

        </main>
    )
}