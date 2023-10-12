import react from "react";

import logo from "../images/Way-of-The-Cross-logos_white.png"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright} from "@fortawesome/free-solid-svg-icons";

export default function Footer(){

    return (
        <section className="footer" style={{paddingBottom:20}}>
            <div className="logoSection">

                <div className="footerLogo">
                    <img src={logo} alt="way of the cross logo footer"/>
                </div>

                <hr/>
                
                <div className="socialMedia">
                    <div>
                        <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff"}} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff"}} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff"}} />
                    </div>
                </div>
                <div className="copyright">
                    <p>2023 Way of the Cross Church</p>
                    <FontAwesomeIcon icon={faCopyright} style={{color:"#ffffff"}}/>
                </div>
                <div style={{color:"#ffffff"}}>
                    
                </div>
            </div>
            <div style={{display:"flex",width:"100%",justifyContent:"flex-end"}}>
                <div className="reach" style={{color:"#ffffff", width:"25%"}}>
                    <h3 style={{marginBottom:0}}>Reach</h3>
                    <hr/>
                    {/* <a className="flex" style={{justifyContent:"flex-start", paddingTop:5}}><p>Contact</p></a> */}
                    <a className="flex" style={{justifyContent:"flex-start", paddingTop:5}}><p>Ask For Prayer</p></a>
                    <a className="flex" style={{justifyContent:"flex-start", paddingTop:5}}><p>Our Fellowship</p></a>
                    <a className="flex" style={{justifyContent:"flex-start", paddingTop:5}}><p>The Community</p></a>
                </div>
            </div>
            
            
        </section>
    )
}