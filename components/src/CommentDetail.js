import React from 'react';
import RandomDate from './RandomDate';

const CommentDetail = (props) => {
    console.log("props", props)
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.avatar} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <RandomDate />
                <div className="text">{props.comment}</div>
            </div>
        </div>
    )
}

export default CommentDetail;