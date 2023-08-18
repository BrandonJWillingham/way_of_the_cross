// import {stripe}

import DonationBodyComponent from "./DonationBodyComponent";
import DonationInformation from "./DonationInfoComponent";

export default function DonateLayout(){


    return(
        <main>
            <DonationBodyComponent/>
            <DonationInformation/>
        </main>
    )
}