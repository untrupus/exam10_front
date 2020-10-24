import React from 'react';
import SingleNews from "../../components/SingleNews/SingleNews";
import './Posts.css';

const Posts = () => {
    return (
        <div className="container">
            <div className="posts">
                <div className="add">
                    <h2>Posts</h2>
                    <button type="button" className="addBtn">Add new post</button>
                </div>
                <SingleNews
                    title="test news"
                    time="22.11.2020"
                />
            </div>
        </div>
    );
};

export default Posts;