import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact container my-5 py-5">
            <div className="container">
                  <div className="section-header text-center text-white mb-5">
                      <h6 style={{fontWeight:'800', color: '#1CC7C1'}} className="text-uppercase">Contact Us</h6>
                      <h2 style={{fontWeight:'600'}}>Always Contact with us</h2>
                  </div>
                  <div className="col-md-9 mx-auto">
                  <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
                  </div>
            </div>
        </section>
    );
};

export default Contact;