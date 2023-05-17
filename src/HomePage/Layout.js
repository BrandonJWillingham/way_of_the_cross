import react from "react";
import {useState, useEffect} from "react-router-dom"
import Welcome from "./Welcome";

export default function Layout(){
    return(
        <div className="container">
            <div className="spacer"/>
            <div className="ImgDiv">
                <div className="HomePage Welcome ">
                    <h1>
                        Welcome To The Cross
                    </h1>
                    <h2>
                        The way of the cross church located in harlem ny
                    </h2>
                </div>

            </div>




            <Welcome/>
            
       </div>
    )
}