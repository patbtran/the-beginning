import { useParams } from 'react-router-dom';
import Comments from './Comments';
import Content from './Content';

function BlogPost({ post, user }) {
  const params = useParams();

  if (!post) return <div className="p-4">Post not found.</div>;

  return (
    <div className="p-4">
      <Content
        title={post.title}
        content={post.content}
        author={post.author}
        date={post.date}
      />
      {user && (
        <div className="mt-4 border rounded p-4 bg-slate-50">
          
          <p className="font-semibold">Author: {user.name}</p>
          <p className="text-sm">{user.email}</p>
         
        </div>
      )}
      <Comments postId={params.id} />
    </div>
  );
}

export default BlogPost;
