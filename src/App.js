import { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import ViewPosts from "./ViewPosts";
import "./App.css";

function App() {
  const [posts, setPosts] = useState(null);
  const [createPostView, setCreatePostView] = useState(false);

  useEffect(() => {
    if (posts === null) {
      fetch("http://127.0.0.1:8787/posts")
        .then((response) => (response && response.ok ? response.json() : false))
        .then((response) => setPosts(response || false))
        .catch((error) => console.log(error));
    }
  }, [posts]);

  const createPost = (body) => {
    fetch("http://127.0.0.1:8787/posts", { method: "POST", body })
      .then((response) => (response && response.ok ? true : false))
      .then((response) => {
        if (response) {
          if (Array.isArray(posts)) setPosts([...posts, JSON.parse(body)]);
          else setPosts([body]);
          setCreatePostView(false);
        } else {
          setCreatePostView("An error occurred while creating your post. Please refresh the page and try again.");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="header">
        <div>Posts</div>
        <div className="options">
          <div className={"activeButton"} onClick={() => setCreatePostView((current) => !current)}>
            {createPostView ? "View posts" : "Create new post"}
          </div>
          <div className={(posts === null ? "in" : "") + "activeButton"} onClick={() => posts !== null && setPosts(null)}>
            Refresh
          </div>
        </div>
      </div>
      <div className="contentContainer">
        {createPostView === true ? <CreatePost createPost={createPost} /> : createPostView ? createPostView : <ViewPosts posts={posts} />}
      </div>
    </>
  );
}

export default App;
