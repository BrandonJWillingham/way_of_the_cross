import { AnimationOnScroll } from "react-animation-on-scroll"
import "animate.css"

export default function BeliefComponent (){
    return (
        <section className="section ">
            <div className="beliefComponent">
                <h2 style={{justifyContent:"center",display:"flex"}}> Our Belief</h2>
                <div className="beliefText">
                    <AnimationOnScroll animateIn="animate__backInLeft">
                        <div className="text">
                            <p>One God</p>
                        </div>
                    </AnimationOnScroll>
                        
                    <AnimationOnScroll animateIn="animate__backInLeft">
                        <div className="text" style={{justifyContent:"center"}}>
                            <p>One Faith</p>
                        </div>
                    </AnimationOnScroll>
                    
                    <AnimationOnScroll animateIn="animate__backInLeft">
                        <div className="text" style={{justifyContent:"flex-end"}}>
                        <p>One Batism</p>  
                        </div>
                    </AnimationOnScroll>
                    
                </div>
                    <div>
                        <p>
                            Our beliefs are founded on the teachings of the Apoloslic doctrine  
                        </p>
                    </div>
                <a style={{display:"flex", justifyContent:"center"}}><button>Declaration of Faith</button></a>
            </div>
        </section>
    )
}