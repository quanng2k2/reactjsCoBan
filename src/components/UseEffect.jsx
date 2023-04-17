import React, { useEffect, useState } from "react";

// useEffect (callback, [deps]) ;
const tabs = ["posts", "comments", "albums"];
function UseEffect() {
  const [title, setTitle] = useState(" ");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  // khai báo biến để show hoặc hide button;
  const [showGoToTop, setShowGoToTop] = useState(false);

  // useEffect (callback,[])
  //   useEffect(() => {
  //     document.title = title;
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((posts) => {
  //         setPosts(posts); // nếu ko comment lại nó sẽ render lại 2 lần
  //       });
  //   }, []);

  // useEffect (callback,[deps])
  useEffect(() => {
    document.title = title;
    fetch(`https://jsonplaceholder.typicode.com/${type}`) 
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts); // nếu ko comment lại nó sẽ render lại 2 lần
      });
  }, [type]);

  // th 1 :
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        //show button
        setShowGoToTop(true);
      } else {
        //Hide button
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  };

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", background: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <button>Click</button>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}> {post.title || post.name} </li>
          ))}

          {showGoToTop && (
            <button
              onClick={goTop}
              style={{
                position: "fixed",
                right: 20,
                bottom: 20,
              }}
            >
              GoToTop
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default UseEffect;
