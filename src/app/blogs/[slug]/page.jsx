import React from 'react';

const BlogsDetails = ({ params }) => {
  console.log(params);
  const blog = blogs.find(blog => blog.slug === params.slug);
  return (
    <div className="h-screen">
      <h1 className="text-2xl font-bold">{blog.name}</h1>
      <p>{blog.description}</p>
    </div>
  );
};
const blogs = [
  {
    name: 'JavaScript Essentials',
    slug: 'javascript-essentials',
    description:
      'A comprehensive guide to the fundamentals of JavaScript, covering everything from variables to closures.',
  },
  {
    name: 'React Best Practices',
    slug: 'react-best-practices',
    description:
      'Learn the best practices for building scalable and maintainable React applications.',
  },
  {
    name: 'Mastering Python',
    slug: 'mastering-python',
    description:
      'An in-depth look at advanced Python programming techniques for developers looking to enhance their skills.',
  },
  {
    name: 'Web Development Trends 2024',
    slug: 'web-development-trends-2024',
    description:
      'Explore the latest trends and technologies shaping the future of web development in 2024.',
  },
  {
    name: 'Understanding CSS Flexbox',
    slug: 'understanding-css-flexbox',
    description:
      'A detailed tutorial on how to use CSS Flexbox for creating responsive web layouts with ease.',
  },
];
export default BlogsDetails;
