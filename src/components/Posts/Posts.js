export const getPosts = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await result.json();
  return data;
};
