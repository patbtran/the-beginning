import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import CommentForm from "./CommentForm";
import axios from 'axios';
import { useAuth } from "../authWrapper/AuthContext";


function Comments(){
    const params = useParams();
    const postId = params.id;
    const { user } = useAuth();

    const [comment, setComment] = useState({
        name: "",
        body:""
    });

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        if (postId) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => setCommentList(response.data))
                .catch(error => console.error('Error fetching comments:', error));
        }
    }, [postId]);

    const addComment = (commentToAdd) => {
        setCommentList([...commentList, commentToAdd]);
        setComment({ name: '', body: '' });
    };

    const postComment = () => { 
        if (!comment.name.trim() || !comment.body.trim()) {
            alert('Please fill in both name and comment.');
            return;
        }
        axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
            name: comment.name,
            body: comment.body
        })
        .then((res) => {
            console.log(res);
            addComment({ name: comment.name, body: comment.body });
        })
        .catch(error => console.error('Error posting comment:', error));
    }

    return (
        <div className='bg-sky-100 p-4'>
            <h2 className='text-xl'>Comments</h2>
            {commentList.length === 0 ? (
                <p className='text-center text-grey-600 mt-4'>No comments yet. Be the first to comment!</p>
            ) : null}

            {user ? (
                <>
                    <input 
                    value={comment.name}
                    onChange={(e) => setComment({...comment,name: e.target.value})}
                    placeholder="Name" 
                    className='text-xl border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mt-4'
                    />

                    <textarea
                    value={comment.body}
                    placeholder="Add a comment" rows={6} cols={50} className='justify-center text-center mt-4 border-2 border-gray-300 rounded-lg p-3 w-full'
                    onChange={(e) => setComment({...comment, body: e.target.value})}>
                    </textarea>
                    <br></br>

                    <button 
                    onClick={postComment}
                    type="button"
                    className='bg-blue-500 px-6 py-2 rounded-2xl text-white hover:bg-blue-700 mt-4'
                    >Submit</button>
                </>
            ) : (
                <p className='text-center text-grey-600 mt-4'>Please log in to post a comment.</p>
            )}

            {commentList.length > 0 && (
                <div className='mt-4'>
                    <h3 className='text-xl'>Existing Comments:</h3>
                    <ul className='list-disc pl-5 bg-sky-100'>
                        {commentList.map((value, index) => (
                            <CommentForm key={index} value={value} />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Comments;