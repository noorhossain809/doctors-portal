import React from 'react';
import william from '../../../images/william.png'
import Aliza from '../../../images/Aliza.png'
import ema from '../../../images/ema.png'
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'


const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : william
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : Aliza
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : ema
    }
]


const Testimonials = () => {
    return (
        <section className="testimonials mt-5">
            <div className="container">
                <div className="section-header">
                      <h5 style={{color:'#5FC7C7'}} className="text-uppercase">Testimonial</h5>
                      <h1 style={{fontWeight:'450'}}>What's Our Patients <br/> Says </h1>
                </div>
                <div className="card-deck mt-5">
                        {
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;