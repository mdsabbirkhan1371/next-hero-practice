import { getPosts } from '@/components/Posts/Posts';
import Link from 'next/link';
import React from 'react';

const PostsPage = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h4>All Posts : {posts.length}</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-4">
        {posts.slice(0, 15).map(post => (
          <div className="border p-4" key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <button className="bg-red-500 px-4 py-2 mt-3">
              <Link href={`/posts/${post.id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
