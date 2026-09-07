import React from 'react';
import Content from './Content';
import Comments from './Comments';

function IndividualPostPage({ post }) {
	if (!post) return <div className="p-4">Post not found.</div>;

	return (
		<div className="p-6">
			<Content
				title={post.title}
				content={post.content}
				author={post.author}
				date={post.date}
			/>
			<Comments />
		</div>
	);
}

export default IndividualPostPage;
