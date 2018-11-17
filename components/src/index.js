import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ReplyLike from './ReplyLike'
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ReplyLike>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    comment="Nice blog post!" 
                    avatar={faker.image.avatar()} 
                />
            </ReplyLike>
            <ReplyLike>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    comment="Absolutely wonderful :)" 
                    avatar={faker.image.avatar()} 
                />
            </ReplyLike>
            <ReplyLike>
                <CommentDetail 
                    author={faker.name.firstName()} 
                    comment="Fantastic read" 
                    avatar={faker.image.avatar()} 
                />
            </ReplyLike>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));