import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import {postNews} from "../../store/actions";
import {useDispatch} from "react-redux";
import './AddNews.css';

const AddNews = props => {
    const [value, setValue] = useState({
        title: '',
        news_text: '',
        image: ''
    });

    const inputRef = useRef();

    const dispatch = useDispatch();

    const onChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setValue(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setValue(prevState => ({
            ...prevState,
            [name]: file
        }));
    };

    const sendMessage = () => {
        if (value.title !== '' && value.text !== '') {
            const formData = new FormData();
            Object.keys(value).forEach(key => {
                formData.append(key, value[key]);
            });
            dispatch(postNews(formData));
            setValue({title: '', news_text: '', image: ''});
            props.history.push({
                pathname: '/'
            });
        } else {
            alert("Fill in all fields");
        }
    };

    const clear = () => {
        const newValue = {
            title: '',
            news_text: '',
            image: ''
        };
        setValue(newValue);
        props.history.push({
            pathname: '/'
        });
    };


    return (
        <div className="container">
                <h2>Add new post</h2>
            <form>
                <p className="inputDescription">Title:
                    <input
                        placeholder="enter title"
                        name="title"
                        className="field"
                        value={value.title}
                        onChange={onChangeHandler}
                    /></p>
                <p className="inputDescription">Content:
                    <textarea
                        placeholder="enter content"
                        name="text"
                        className="textarea"
                        value={value.news_text}
                        onChange={onChangeHandler}
                    /></p>
                <p className="inputDescription">Image:
                    <input type="file"
                           name="image"
                           className="field"
                           ref={inputRef}
                           onChange={fileChangeHandler}
                    /></p>
                <button type="submit"
                        className="addBtn"
                        onClick={sendMessage}
                >Save
                </button>
                <button type="button"
                        className="addBtn"
                        onClick={clear}
                ><Link className="edit" to='/'>Return</Link></button>
            </form>
        </div>
    );
};

export default AddNews;