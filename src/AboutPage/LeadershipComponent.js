import leaderPhoto from "../images/aboutLeadership.jpg"
export default function LeadershipComponent(){
    return (
        <section className="section">
            <div className="leadershipContent component ">
                <img src={leaderPhoto} alt="board of directors photos & pastor photo"/>
                <div className="leadershipText">
                    <h3>Leadership </h3>
                    <p> Our church has a board of members that handles administrative work suchas events, wellness and maintence of the church and its people, and finances</p>
                    <a href="/leadership"><button>Learn More</button></a>
                </div>
            </div>
            <a href="leadership team page" />
        </section>
    )
}