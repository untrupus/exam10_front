import React, {useEffect, useState} from 'react';
import Comment from "../../components/Comment/Comment";
import './NewsPage.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleNews, postComment, fetchComments, removeComment} from "../../store/actions";

const NewsPage = props => {
    const singleNews = useSelector(state => state.singleNews);
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch();

    const [comment, setComment] = useState({
        news_id: props.match.params.id,
        author: '',
        description: ''
    });

    useEffect(() => {
        dispatch(fetchComments(props.match.params.id));
    }, [props.match.params.id, dispatch]);

    useEffect(() => {
        dispatch(fetchSingleNews(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const onChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setComment(prevState => ({...prevState, [name]: value}));
    };

    const save = () => {
        if (comment.description !== '') {
            dispatch(postComment(comment));
            dispatch(fetchComments(props.match.params.id));
            const newComment = {
                news_id: props.match.params.id,
                author: '',
                description: ''
            };
            setComment(newComment);
        } else {
            alert("Fill in all description");
        }
    };

    const deleteComment = (id) => {
        dispatch(removeComment(id));
        dispatch(fetchComments(props.match.params.id));
    };

    console.log(singleNews);
    let commentFeed;
    if (comments.length === 0) {
        commentFeed = (
            <h3>Leave a comment...</h3>
        );
    } else {
        commentFeed = comments.map(singleComment => {
            return (
                <Comment
                   key={singleComment.id}
                   author={singleComment.author ? singleComment.author : "Anonymous"}
                   comment={singleComment.description}
                   delete={() => deleteComment(singleComment.id)}
                />
            );
        });
    }

    return (
        <div className="container">
            {singleNews[0] && <h3>{singleNews[0].title}</h3>}
            {singleNews[0] && <span>{singleNews[0].timedate.substr(0, 19).replace('T', ' ')}</span>}
            {singleNews[0] && <p>{singleNews[0].news_text}</p>}
            <h4>Comments</h4>
            {commentFeed}
            <h4>Add comment</h4>
            <p className="inputDescription">Name:
                <input
                    placeholder="enter title"
                    name="author"
                    className="field"
                    value={comment.author}
                    onChange={onChangeHandler}
                /></p>
            <p className="inputDescription">Comment:
                <textarea
                    placeholder="enter content"
                    name="description"
                    className="textarea"
                    value={comment.description}
                    onChange={onChangeHandler}
                /></p>

            <button type="button"
                    className="addBtn"
                    onClick={save}
            >Add
            </button>
        </div>
    );
};

export default NewsPage;