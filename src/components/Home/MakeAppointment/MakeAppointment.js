import React from 'react';
import doctor from '../../../images/doctors.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment container">
            <div className="container">
            <div className="row">
                <div className="col-md-5 d-none d-md-block">
                    <img src={doctor} alt=""/>
                </div>
                <div className="col-md-7 text-white py-5">
                        <h3 className="text-primary text-uppercase">APPOINTMENT</h3>
                        <h1 className="my-4 ">Make an appointment <br/> Today</h1>
                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Aut praesentium quam impedit mollitia blanditiis <br/>natus voluptatum error dolor doloribus.</p>
                        <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default MakeAppointment;