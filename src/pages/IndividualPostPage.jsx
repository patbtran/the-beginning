import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BlogPost from '../Components/blog/BlogPost';

function IndividualPostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      if (!id) return;

      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          const postData = response.data;
          setPost(postData);
          return axios.get(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((e) => {
          console.error('Error loading post or user:', e);
          setError(e);
        })
        .finally(() => setLoading(false));
    }, [id]);

    return (
        <div>
            <main className="p-6">
              <div className="mb-4">
                <Link to="/" className="text-blue-600"></Link>
              </div>
              {loading && <p>Loading post...</p>}
              {error && <p className="text-red-600">Error fetching posts:</p>}
              {!loading && !error && post && (
                <BlogPost
                  post={{
                    title: post.title,
                    content: post.body,
                    author: user?.name || `User ${post.userId}`,
                    date: '',
                  }}
                  user={user}
                />
              )}
            </main>
        </div>
    );
}

export default IndividualPostPage;