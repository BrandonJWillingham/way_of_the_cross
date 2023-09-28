import { useState } from 'react';


export default function DonationInformation () {

    const [donationAmount,setDonationAmount] = useState(0)

    const onChange =  (e)=>{
        setDonationAmount(e.target.value)    
    }
    return (
        <section className='paymentInformation'>
            <div>
                <form action="http://localhost:4000/create-checkout-session" method='POST'>
                    <input name="amount" step=".01" value={donationAmount} type="number" onChange={onChange} placeholder={`$0`}/>  
                    <button type={"submit"} >Donate</button>
                </form>
            </div>
        </section>
    )
}