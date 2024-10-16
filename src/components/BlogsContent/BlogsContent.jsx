import Link from 'next/link';
import React from 'react';

const BlogsContent = () => {
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

  return (
    <div className="p-24 my-5">
      {blogs?.map((blog, index) => (
        <div className="border p-10" key={index}>
          <h3>{blog.name}</h3>
          <p>{blog.description}</p>
          <button className="btn bg-red-500 p-5 px-5 py-3">
            <Link href={`/blogs/${blog.slug}`}>Read More</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogsContent;
