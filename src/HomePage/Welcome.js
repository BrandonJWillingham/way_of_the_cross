import photo from "../images/stock-photo.jpeg"

export default function Welcome(){
    return(
    <section>
        <div className="Double">
            <div className="item-1">
                <div>
                <p>
                    Welcome to Way of The Cross Church, The Church with OPEN arms! We believe in uncompromising the word of god and Are
                    committed to spreading the Gospel through all nations. We are a growing community of those who love God and seek to serve God's children 
                    in a spirit of excellence through Prayer and Preached words.
                </p>
                <p>
                    I hope that you will visit our website often.
                    More than that, I look forward to the opportunity to meet you personally.
                    If you are looking for a church home, we invite you to come worship with us on a Sunday, attend any of our programs, or call to make an appointment to speak with myself or a member of our ministerial team.  Enjoy your time on our website and we pray that we will leave a mark on your life that will never be erased.
                    We are praying for you, and anxiously await your arrival!
                </p>
                </div>
            </div>
            <div className="item-2">
                <img src={photo} alt="Elder Andino" className="img"/>
            </div>
        </div>
    </section>
    )
}