import React from 'react';
import doctor from '../../../images/images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            
            <img className="img-fluid mb-3" src={doctor} alt="" width="400px"/>
            <h4>Dr. Coudi</h4>
            <p className="text-secondary"><FontAwesomeIcon  className="text-primary" icon={faPhoneSquare}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;