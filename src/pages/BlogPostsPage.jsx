import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); //setting a loading indicator
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      //catching the error= handling the error
      .catch(e => {
        console.error('Error fetching posts: ', e);
        setError(e);
      })
      .finally(() => setLoading(false)); //turn off loading indicator
  }, []);

  return (
    <div>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to our Page!</h1>
        <p className="text-lg text-gray-700">This is a post from the authors, P Tran and K Esmeralda. This is the meeting point for communications via blog posts! Enjoy!</p>
        <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
        <ul className="space-y-4">


          {posts.map((post) => (

            <li key={post.id} className="border rounded p-4 bg-sky-50">
              <Link to={`/post/${post.id}`} className="text-xl font-semibold text-blue-600">
                {post.title}
              </Link>
              <p className="text-sm text-gray-600">User {post.userId}</p>
              <p className="mt-2">
                {post.body.slice(0, 120)}{post.body.length > 120 ? '…' : ''}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default BlogPostsPage;