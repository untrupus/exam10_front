import {
    FETCH_NEWS_ERROR,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_SINGLE_NEWS_ERROR,
    FETCH_SINGLE_NEWS_REQUEST,
    FETCH_SINGLE_NEWS_SUCCESS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
} from "./actionTypes";
import axiosOrder from "../axiosOrder";

const fetchNewsRequest = () => {
    return {type: FETCH_NEWS_REQUEST};
};
const fetchNewsSuccess = value => {
    return {type: FETCH_NEWS_SUCCESS, value};
};
const fetchNewsError = error => {
    return {type: FETCH_NEWS_ERROR, error};
};
const fetchCommentsRequest = () => {
    return {type: FETCH_COMMENTS_REQUEST};
};
const fetchCommentsSuccess = value => {
    return {type: FETCH_COMMENTS_SUCCESS, value};
};
const fetchCommentsError = error => {
    return {type: FETCH_COMMENTS_ERROR, error};
};

const fetchSingleNewsRequest = () => {
    return {type: FETCH_SINGLE_NEWS_REQUEST};
};
const fetchSingleNewsSuccess = value => {
    return {type: FETCH_SINGLE_NEWS_SUCCESS, value};
};
const fetchSingleNewsError = error => {
    return {type: FETCH_SINGLE_NEWS_ERROR, error};
};



export const fetchNews = () => {
    return async dispatch => {
        dispatch(fetchNewsRequest());
        try {
            const response = await axiosOrder.get("news");
            dispatch(fetchNewsSuccess(response.data));
        } catch (e) {
            dispatch(fetchNewsError(e));
        }
    };
};

export const fetchComments = (id) => {
    return async dispatch => {
        dispatch(fetchCommentsRequest());
        try {
            const response = await axiosOrder.get("comments/" + id);
            dispatch(fetchCommentsSuccess(response.data));
        } catch (e) {
            dispatch(fetchCommentsError(e));
        }
    };
};

export const fetchSingleNews = (id) => {
    return async dispatch => {
        dispatch(fetchSingleNewsRequest());
        try {
            const response = await axiosOrder.get("news/" + id);
            dispatch(fetchSingleNewsSuccess(response.data));
        } catch (e) {
            dispatch(fetchSingleNewsError(e));
        }
    };
};

export const deleteNews = (id) => {
    return async dispatch => {
        try {
            await axiosOrder.delete("news/" + id);
        } catch (e) {
            dispatch(fetchNewsError(e));
        }
    };
};

export const postNews = (data) => {
    return async dispatch => {
        try {
            await axiosOrder.post('/news', data);
        } catch (e) {
            dispatch(fetchNewsError(e));
        }
    };
};

export const postComment = (data) => {
    return async dispatch => {
        try {
            await axiosOrder.post('/comments', data);
        } catch (e) {
            dispatch(fetchNewsError(e));
        }
    };
};

export const removeComment = (id) => {
    return async dispatch => {
        try {
            await axiosOrder.delete('/comments/' + id);
        } catch (e) {
            dispatch(fetchNewsError(e));
        }
    };
};