import React from 'react';
import faker from 'faker';

const ReplyLike = (props) => {
    console.log("childrenprops", props.children)
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className='meta extra content' color="rgba(0, 0, 0, 0.4)">
                <a className='like' href="http://blakefletcher.ca" target="_blank" rel="noopener noreferrer" style={{marginLeft:"50px"}}>
                    Reply
                </a>
                <a className='like' href="http://blakefletcher.ca" target="_blank" rel="noopener noreferrer" style={{marginLeft:"50px"}}>
                    <i aria-hidden='true' className='like icon' />
                    {faker.random.number({min:2, max:59})} Likes
                </a>
            </div>
            
        </div>
    )
}

export default ReplyLike;