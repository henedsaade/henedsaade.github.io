import Information from "./Information";

import React from 'react';

const Appointment = () => {
    return ( 
        <div id="appointment" class=" p-3 my-3 border bg-gradient" style={{'background':'rgb(138, 215, 227)'}}>
            <h1 style={{'color':'rgba(0, 0, 153, 1', 'font-weight':'bold'}}>Prenez un rendez-vous avec nous pour choisir votre animal à adopter!</h1>
            <div class="row justify-content-around">
            </div>
            <Information />
        </div>
     );
}
export default Appointment;