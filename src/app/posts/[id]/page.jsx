import React from 'react';

const getPostsDetails = async id => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await result.json();
  return data;
};
const PostDetailsPage = async ({ params }) => {
  console.log(params);
  const postDetail = await getPostsDetails(params.id);
  return (
    <div className="h-screen">
      <div className="p-5">
        <h1>{postDetail.title}</h1>
        <p>{postDetail.body}</p>
      </div>
    </div>
  );
};

export default PostDetailsPage;
