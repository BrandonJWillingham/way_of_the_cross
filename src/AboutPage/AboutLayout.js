import "./About.css"
import BeliefComponent from "./BeliefComponent";
import ChurchHistoryComponent from "./ChurchHistoryComponent";
import LeadershipComponent from "./LeadershipComponent";

export default function AboutLayout(){
    return(
        <main>
            <section className="aboutHeader">
                <div>
                    <h1>
                        About us
                    </h1>
                    <p>
                        AT WOTC our mission is to spread the gospel in accordance to the apolositic doctrine
                    </p>
                </div>
            
            </section>
            <ChurchHistoryComponent/>
            <LeadershipComponent/>
            <BeliefComponent/>
        </main>
    )
}