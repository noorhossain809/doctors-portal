import React from 'react';
import wilson from '../../../images/william.png';
import ema from '../../../images/ema.png';
import Aliza from '../../../images/Aliza.png'
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css'


const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : ema,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : Aliza,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <section className="blogs mt-5">
            <div className="container">
            <div className="section-header text-center">
            <h5 style={{color:'#5FC7C7', fontWeight:'500'}} className="text-uppercase">Our Blog</h5>
            <h1 style={{color:'#3C4356', fontWeight: '600'}}>From Our Blog News</h1>
        </div>
              <div className="card-deck mt-5">
                  {
                      blogData.map(blog => <BlogPost blog={blog}></BlogPost>)
                  }
              </div>
            </div>
        </section>
    );
};

export default Blogs;