import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
        <div className="comment">
            <div className="commentInfo">
                <p><b>{props.author}</b></p>
                <p>{props.comment}</p>
            </div>

            <button type="button"
                    className="newsBtn"
                    onClick={props.delete}
            >Delete</button>
        </div>
    );
};

export default Comment;