import React from 'react';
import feature from '../../../images/featured.png'

const FeaturedSurvice = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-5 mb-4 m-md-0">
                      <img className="img-fluid" src={feature} alt=""/>
                </div>
                <div className="col-md-7 align-self-center mb-5">
                       <h1 style={{fontWeight:'400'}}>Exceptional Dental <br/>Care, on Your Terms </h1>
                       <p className="text-secondary my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus itaque quis omnis perspiciatis veniam deserunt voluptate autem dolor eveniet voluptatum. Mollitia consequatur quia tenetur, cupiditate placeat corporis fuga laudantium culpa dolore vitae cumque, eaque deserunt. Aliquam facilis possimus unde ipsa pariatur accusamus reiciendis corporis, enim deleniti labore est earum qui quibusdam. Neque totam quia accusantium esse autem saepe veritatis dolor sint consequuntur sapiente error laudantium quod est, magni nulla ut.</p>
                         <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default FeaturedSurvice;