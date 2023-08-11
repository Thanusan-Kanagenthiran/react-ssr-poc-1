import React, { useState, useEffect } from "react";
import { Html } from "./Html.jsx";

export const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <Html>
      <div>
        <h1>App</h1>
        <h2>Hello</h2>
        <img
          src="optimus.png"
          alt="Profile Picture"
        />

        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </Html>
  );
};
