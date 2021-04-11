import React from 'react';

const BlogPost = (props) => {
    const { title, authorImg, author, description, date } = props.blog;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex align-items-center">
                <img className="mx-3" src={authorImg} alt="" width="70"/>
                <div>
                    <h6 style={{fontWeight:'700'}}>{author}</h6>
                    <p className="m-0 text-secondary">{date}</p>
                </div>
            </div>
            <div className="card-body">
                    <h5 style={{fontWeight:'600'}}>{title}</h5>
                    <p className="text-secondary">{description}</p>

                </div>
        </div>
    );
};

export default BlogPost;