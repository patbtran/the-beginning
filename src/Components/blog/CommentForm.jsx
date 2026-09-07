
import React from 'react';

function CommentForm({value}){
    return <div>
        <p>Name: {value.name}</p>
        <p>"{value.body}"</p>
    </div>
}

export default CommentForm;