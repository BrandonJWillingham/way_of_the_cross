import React from 'react'
import logo from "../images/Way-of-The-Cross-logos.jpeg"


export default function NavBar(){
    function toggleSubNav(divName){
        const subDiv = document.getElementById(`${divName}SubDiv`)
        subDiv.classList.toggle("disappear")  
    }   
    return (
        <section className='navBar'>
            <a href='/'>
            <div className='image-container'>
                <img src={logo} alt='way of the cross logo'/>
            </div>
            </a>
            
            
            <div className='navSubContainer'>
                <div className='navItem' onMouseEnter={()=> toggleSubNav("about")} onMouseLeave={()=> toggleSubNav("about")}>
                    <div>
                        <div>
                        <p>About us</p>
                        </div>
                        <div id='aboutSubDiv' className='navSubItem'>
                            <a href='about'><button >About</button></a>
                            <a href='/belief'><button >Our Belief</button> </a>
                            <a href='/leadership'><button >Our Leadership</button> </a>
                            
                        </div>
                    </div>
                    
                </div>
        
                <div className='navItem' onMouseEnter={()=> toggleSubNav("events")} onMouseLeave={()=>toggleSubNav("events")}>
                    <div>
                        <div>
                            <p>Events</p>
                        </div>
                        <div id='eventsSubDiv'className='navSubItem'>
                            <a href='/events' ><button> Calendar</button> </a>
                            
                        </div>
                    </div>
                    
                </div>

                <div className='navItem' onMouseEnter={()=> toggleSubNav("watch")} onMouseLeave={()=>toggleSubNav("watch")}>
                    <div>
                        <div>
                        <p> Watch</p>
                        </div>
                        <div id='watchSubDiv' className='navSubItem'>
                            <a href='/stream'><button > <p>watch online</p> </button>  </a>
                            
                        </div>
                    </div>
                </div> 

            </div>

        </section>
)
}
