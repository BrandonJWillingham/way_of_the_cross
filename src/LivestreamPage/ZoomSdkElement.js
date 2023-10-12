import ZoomMtgEmbedded from "@zoomus/websdk/embedded"

export default function ZoomSDK(){
    const client = ZoomMtgEmbedded.createClient();

    var authEndpoint = 'http://localhost:4000'
    var sdkKey = 'ogyN3YxsSt2u1VHlgiqKsQ'
    var meetingNumber = '4797879336'
    var passWord = 'GtAMA7'
    var role = 0
    var userName = 'Web-User'
    var userEmail = ''
    var registrantToken = ''
    var zakToken = ''

    function getSignature(e) {
        e.preventDefault();
    
        fetch(authEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            meetingNumber: meetingNumber,
            role: role
            })
        }).then(res => res.json())
        .then(response => {
            startMeeting(response.signature)
        }).catch(error => {
            console.error(error)
        })
    }
    
    function startMeeting(signature) {
        console.log("called")
        let meetingSDKElement = document.getElementById('ZoomSDKElement');
        console.log(meetingNumber)
        client.init({
            debug: true,
            zoomAppRoot: meetingSDKElement,
            language: 'en-US',
            customize: {
                video:{
                    isResizable:false,
                    viewSizes:{
                        default:{
                            height:800,
                            width:1000
                        },
                        ribbon:{
                            height:500,
                            width:300
                        }
                    }
                },
                meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
                toolbar: {
                    buttons: [
                    {
                        text: 'Custom Button',
                        className: 'CustomButton',
                        onClick: () => {
                            console.log('custom button');
                        }
                    }
                    ]
                }
            }
        });
    
        client.join({
            signature: signature,
            sdkKey: sdkKey,
            meetingNumber: meetingNumber,
            password: passWord,
            userName: userName,
            userEmail: userEmail,
            tk: registrantToken,
            zak: zakToken
        })
    }
    return(
    <>
        <div id="ZoomSDKElement" style={{height:500}}>

        </div>  
        <button onClick={getSignature}> Launch</button>
    </>
    )
}