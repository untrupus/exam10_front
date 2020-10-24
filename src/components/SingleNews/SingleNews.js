import React from 'react';
import {Link} from "react-router-dom";
import './SingleNews.css';

const SingleNews = props => {
    return (
        <div className="singleNews">
            <img src={props.src} alt="news img" className="newsImg"/>
            <div className="newsInfo">
                <h3 className="newsTitle">{props.title}</h3>
                <span>At {props.time}</span>
                <button type="button" className="newsBtn">
                    <Link className="edit" to={'/news/' + props.id}>Read full post</Link></button>
                <button type="submit"
                        className="newsBtn"
                        onClick={props.del}
                >Delete</button>
            </div>
        </div>
    );
};

export default SingleNews;