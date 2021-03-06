import React from 'react';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        tittle: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary',
    },
    {
        tittle: 'Visit our location',
        description: 'Brooklyn, NY 10036, United States',
        icon: faMapMarkerAlt,
        background: 'dark',
    },
    {
        tittle: 'Contact us now',
        description: '+000 123 456789',
        icon: faPhone,
        background: 'primary',
    },
]

const BussinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BussinessInfo;