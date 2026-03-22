import { useState, useEffect } from "react"; 
import { Header } from "./Components/header";
import { Footer } from "./Components/footer";
import { Sidebar } from "./Components/sidebar";
import { Form } from "./Components/create_post";
import { Post } from "./Components/allposts";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [posts, setPosts] = useState([]);
  const [fetching, setFetching] = useState(false); // To show a loading spinner

  // 1. Fetching Data from API on initial load
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // Mapping API data (body) to YOUR data (description)
        const mappedPosts = data.posts.map((post) => ({
          id: post.id,
          title: post.title,
          description: post.body, // API calls it 'body', you call it 'description'
          reactions: post.reactions.likes || post.reactions, // Handling different API versions
          mode: "Public", // API doesn't have 'mode', so we add it
          tags: post.tags,
        }));
        setPosts(mappedPosts);
        setFetching(false);
      });
  }, []);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setSelectedTab("Home");
  };

  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content w-100 p-4 bg-light">
          {selectedTab === "Home" ? (
            <div className="container">
              <h3 className="mb-4 fw-bold text-dark">Recent Feed</h3>
              
              <div 
                style={{ height: "70vh", overflowY: "auto", paddingRight: "10px" }}
                className="custom-scrollbar"
              >
                {/* 2. Show Spinner while fetching */}
                {fetching && (
                  <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status"></div>
                    <p className="mt-2 text-muted">Loading your social feed...</p>
                  </div>
                )}

                {/* 3. Display mapped posts */}
                {!fetching && posts.map((post) => (
                  <Post key={post.id} {...post} />
                ))}
              </div>
            </div>
          ) : (
            <div className="container" style={{ maxWidth: "600px" }}>
              <Form addPost={addPost} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}