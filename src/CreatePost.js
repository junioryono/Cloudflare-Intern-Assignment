import { useState } from "react";

export default function CreatePost({ createPost }) {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  const submitPostHandler = () => createPost(JSON.stringify({ title, username, content }));

  return (
    <form className="createPostContainer" onSubmit={submitPostHandler}>
      <div>
        <div>Title</div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <div>Username</div>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <div>Content</div>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div className="submitButton" onClick={submitPostHandler}>
        Submit
      </div>
    </form>
  );
}
