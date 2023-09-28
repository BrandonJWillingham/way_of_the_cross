import beliefHeaderPhoto from "../images/beliefCrosses.jpg"
import "./Belief.css"
import { AnimationOnScroll } from "react-animation-on-scroll"
import "animate.css"

export default function BeliefLayout(){
    
    return (
        <main className="beliefLayout">
            <section className="header">
                <h1>What we believe</h1>
            </section>

            {/* break */}
            <div style={{background:"black",height:50}}>
            <span/>
            </div>

            <section className="beliefBody">

                {/* sliding section */}
                <section style={{height:"70vh",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center", fontSize:50}}>
                    
                    <div style={{display:"flex",justifyContent:"start", width:"100%"}}>
                        <AnimationOnScroll animateIn="animate__fadeIn"> 
                            <p>
                                One God
                            </p>
                        </AnimationOnScroll>
                    </div>
                    
                    
                   
                    <div style={{display:"flex",justifyContent:"center", width:"100%"}}>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <p>
                                One Faith
                            </p>
                       </AnimationOnScroll> 
                    </div>
                    
                    
                    
                    <div style={{display:"flex",justifyContent:"end", width:"100%"}}>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <p>
                                One Baptism
                            </p>
                        </AnimationOnScroll>
                    </div>
                    
                    
                </section>

                <div className="declaration">
                    <h2 style={{display:"flex",justifyContent:"center"}}>
                        Declarition of Faith
                    </h2>
                    <p style={{display:"flex",justifyContent:"start",marginLeft:"10vw"}}> what we believe</p>
                </div>

                <section className="belief">
                    <div className="beliefComponent">
                        <div className="beliefFragment">
                            <p>
                                The salvation comes only through faith in the death burial and resurrection of our Lord and savior Jesus Christ, who is the only begotton
                                Son of the Father, conceived of the Holy Ghost, and born of the Virgin Mary. He has ascended to heaven and is today the right hand of the Father
                                as our intercessor. 
                            </p>
                        </div>
                        <div className="beliefFragment">
                            <p>
                                That all have sinned and fallen short of God's glory and that repentance is required by God and is necessary for the
                                forgiveness of sins
                            </p>
                            <p className="scripture">
                                Acts 2:38
                            </p>
                        </div>
                        <div className="beliefFragment">
                            <p>
                                That baptism by immersion must be in the Name of the Lord Jesus Christ for the remission of sin
                            </p>
                            <p className="scripture"> Acts 8:38</p>
                        </div>
                        <div className="beliefFragment">
                            <p>
                            That calling on the name of Jesus is necessary to recieve the Holy Ghost
                            </p>
                            <p className="scripture">Acts 2:21</p>
                        </div>
                        <div className="beliefFragment">
                            <p>
                                That speaking with other tounges as the Spirt of God gives an utterance is the initial
                                evidence of baptism of the Holy Ghost
                            </p>
                            <p className="scripture"> Acts 2:4</p>
                        </div>  
                    </div>
                    {/* belief  text components */}
             

                </section>
            </section>
            
            
        </main>
    )
}