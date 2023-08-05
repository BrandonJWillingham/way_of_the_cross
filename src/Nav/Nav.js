import React from 'react'
import logo from "../images/Way-of-The-Cross-logos.jpeg"


export default function NavBar(){
    function toggleSubNav(divName){
        const subDiv = document.getElementById(`${divName}SubDiv`)
        subDiv.classList.toggle("disappear")  
    }   
    return (
        <section className='navBar'>
        
            <div className='image-container'>
                <img src={logo} alt='way of the cross logo'/>
            </div>
            
            <div className='navSubContainer'>
                <div className='navItem' onMouseEnter={()=> toggleSubNav("about")} onMouseLeave={()=> toggleSubNav("about")}>
                    <div>
                        <div>
                        <p>About us</p>
                        </div>
                        <div id='aboutSubDiv' className='navSubItem'>
                            <button href='#'>testing</button>
                            <button href='#'>test 2</button>
                        </div>
                    </div>
                    
                </div>
        
                <div className='navItem' onMouseEnter={()=> toggleSubNav("events")} onMouseLeave={()=>toggleSubNav("events")}>
                    <div>
                        <div>
                            <p>Events</p>
                        </div>
                        <div id='eventsSubDiv'className='navSubItem'>
                            <button href='#'>testing</button>
                        </div>
                    </div>
                    
                </div>

                <div className='navItem' onMouseEnter={()=> toggleSubNav("watch")} onMouseLeave={()=>toggleSubNav("watch")}>
                    <div>
                        <div>
                        <p> Watch</p>
                        </div>
                        <div id='watchSubDiv' className='navSubItem'>
                            <button href='#'> <p>test</p> </button>  
                        </div>
                    </div>
                </div> 

            </div>

        </section>
)
}
