import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    
    return (
        <section className="doctors">
            <div className="container">
             <h5 style={{ color: '#1CC7C1', fontWeight: '700' }} className="text-center mt-5 mb-5">Our Doctors</h5>
             <div className="row">
                 {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                 }
                    
                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;