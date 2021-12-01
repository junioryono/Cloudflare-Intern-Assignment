export default function ViewPosts({ posts }) {
  return (
    <div className="viewPostsContainer">
      {posts === null
        ? "Loading"
        : Array.isArray(posts)
        ? posts.map((element, index) => (
            <div key={index} className="postContainer">
              <div className="topBar">
                <div>{element.title}</div>
                <div>{element.username}</div>
              </div>
              <div className="content">{element.content}</div>
            </div>
          ))
        : "There are no posts"}
    </div>
  );
}
