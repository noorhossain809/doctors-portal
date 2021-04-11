import React from 'react';
import dental from '../../../images/dental.png';
import tooth1 from '../../../images/tooth 1.png';
import tooth from '../../../images/tooth.png'
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: dental
    },
    {
        name: 'Cavity Filling',
        img: tooth1
    },
    {
        name: 'Teath Whitening',
        img: tooth
    }
]

const Services = () => {
    return (
        <section className="text-container">
            <div className="text-center mt-5">
                 <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                 <h2 style={{color:'#3A4256'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5">
                {
                    servicesData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;