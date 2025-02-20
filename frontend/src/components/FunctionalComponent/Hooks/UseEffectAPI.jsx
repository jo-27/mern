import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log("Couldn't fetch data:", err));
  }, []);
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div>
      <h1>This is useEffect example with API</h1>
      <h2>We are going to fetch data from JSON placeholder and display it</h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      <button
        onClick={() => {
          console.log("button clicked");
        }}
      >
        hello
      </button>
    </div>
  );
};

export default UseEffectAPI;
