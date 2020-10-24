import React from 'react';
import './SingleNews.css';

const SingleNews = props => {
    return (
        <div className="singleNews">
            {/*<img src="" alt="news img"/>*/}
            <div className="newsInfo">
                <h3>{props.title}</h3>
                <span>At {props.time}</span>
                <button type="button" className="newsBtn">Read full post</button>
                <button type="button" className="newsBtn">Delete</button>
            </div>
        </div>
    );
};

export default SingleNews;