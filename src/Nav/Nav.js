import React, { useEffect,useState } from 'react'
import logo from "../images/Way-of-The-Cross-logos.jpeg"
import logo2 from "../images/Way-of-The-Cross-logos_black.png"

export default function NavBar(){
    const [scrollTop,setScrollTop] = useState(0)

    
    useEffect(()=>{

        const hexConvert = (num)=>{
            let returning = []
            if (num > 256 ) return ["F","F"];
            const arr=  [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
            returning[0] = arr[Math.floor(num/16)];
            returning[1] = arr[ Math.floor(num%16)];
            return returning
        }
        
        const onScroll = () => {
            setScrollTop(window.scrollY)
            // navBar.setAttribute("style",`background-color: #ded7cd${hexConvert(scrollTop)[0]}${hexConvert(scrollTop)[1]}`)
        }
        
        const navBar = document.getElementsByClassName("navBar")[0]
        navBar.setAttribute("style",`background-color: #ded7cd${hexConvert(scrollTop)[0]}${hexConvert(scrollTop)[1]}`)
        window.addEventListener("scroll", onScroll)
        
    },[scrollTop])

    function toggleSubNav(divName){
        const subDiv = document.getElementById(`${divName}SubDiv`)
        subDiv.classList.toggle("disappear")  
    }   

    return (
        <section className='navBar' >
            <a href='/'>
            <div className='image-container'>
                <img src={logo2} alt='way of the cross logo'/>
            </div>
            </a>
            
            
            <div className='navSubContainer'>
                <div className='navItem' onMouseEnter={()=> toggleSubNav("about")} onMouseLeave={()=> toggleSubNav("about")}>
                    <div>
                        <div>
                        <p>About us</p>
                        </div>
                        <div id='aboutSubDiv' className='navSubItem'>
                            <a href='/about'><button >About</button></a>
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
