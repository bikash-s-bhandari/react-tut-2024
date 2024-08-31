import { Link } from "react-router-dom";

const Post = () => {
  const posts = [
    { id: 1,slug:'a', name: "Alice" },
    { id: 2, slug:'b',name: "Bob" },
    { id: 3, slug:'c',name: "Charlie" },
  ];
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.name}</Link>
          </li>
        ))}
      </ul>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}/${post.slug}`}>{post.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
