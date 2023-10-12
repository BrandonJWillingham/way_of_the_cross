import "./About.css"
import BeliefComponent from "./BeliefComponent";
import ChurchHistoryComponent from "./ChurchHistoryComponent";
import LeadershipComponent from "./LeadershipComponent";

export default function AboutLayout(){
    return(
        <main>
            <section className="aboutHeader hero">
                <div>
                    <h1 className="">
                        About us
                    </h1>
                    <p>
                        AT WOTC our mission is to spread the gospel in accordance to the apolositic doctrine
                    </p>
                </div>
            </section>
            <div style={{background:"black",height:25}}/>
            <section className="webEdge">
                <ChurchHistoryComponent/>
                <LeadershipComponent/>
                <BeliefComponent/>
            </section>
            
        </main>
    )
}