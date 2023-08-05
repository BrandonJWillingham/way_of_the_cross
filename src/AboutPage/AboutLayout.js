import Footer from "../Nav/Footer";
import NavBar from "../Nav/Nav";
import BeliefComponent from "./BeliefComponent";
import ChurchHistoryComponent from "./ChurchHistoryComponent";
import LeadershipComponent from "./LeadershipComponent";

export default function AboutLayout(){
    return(
        <main>
            <ChurchHistoryComponent/>
            <LeadershipComponent/>
            <BeliefComponent/>
            <Footer/>
        </main>
    )
}