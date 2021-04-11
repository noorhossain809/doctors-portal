import React from 'react';

const Testimonial = (props) => {
    const {quote, name, from, img} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
               <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 style={{color:'#5FC7C7', fontWeight:'800'}}>{name}</h6>
                    <p style={{color:'#3C4356', fontWeight: '600'}} className="m-0">{from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;