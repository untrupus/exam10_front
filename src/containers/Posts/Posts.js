import React, {useEffect} from 'react';
import SingleNews from "../../components/SingleNews/SingleNews";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchNews, deleteNews} from "../../store/actions";
import './Posts.css';


const Posts = () => {
    const news = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    const deletePost = (id) => {
        dispatch(deleteNews(id));
        dispatch(fetchNews());
    };

    let newsFeed;
    if (news === null) {
        newsFeed = (
            <h3>Add news...</h3>
        );
    } else {
        newsFeed = Object.entries(news).map(item => {
            return (
                <SingleNews
                    key={item[1].id}
                    title={item[1].title}
                    time={item[1].timedate.substr(0, 19).replace('T', ' ')}
                    src="https://www.bengi.nl/wp-content/uploads/2014/10/no-image-available1.png"
                    id={item[1].id}
                    del={() => deletePost(item[1].id)}
                />
            )
        });
    }

    return (
        <div className="container">
            <div className="posts">
                <div className="add">
                    <h2>Posts</h2>
                    <button type="button" className="addBtn">
                        <Link className="edit" to='/news/add'>Add new post</Link></button>
                </div>

                {newsFeed}
            </div>
        </div>
    );
};

export default Posts;