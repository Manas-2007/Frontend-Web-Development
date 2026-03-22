import { useState } from "react"; // CRITICAL: Don't forget this import
import { Header } from "./Components/header";
import { Footer } from "./Components/footer";
import { Sidebar } from "./Components/sidebar";
import { Form } from "./Components/create_post";
import { Post } from "./Components/allposts";


export default function App() {
  // Logic to track which tab is active
  const [selectedTab, setSelectedTab] = useState("Home");

  //Track total posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to my App",
      description: "This is a default post. Create your own!",
      reactions: 5,
      mode: "Public",
      tags: ["React", "Bootstrap"]
    }
  ]);

  // 2. Function to add a new post to the list
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Adds new post to the top
    setSelectedTab("Home"); // Automatically redirect to Home after posting!
  };

  

  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content w-100 p-4 bg-light">
                  {selectedTab === "Home" ? (
          <div className="container">
            <h3 className="mb-4 fw-bold">Recent Posts</h3>
            
            {/* This is the Scrollable Container */}
            <div 
              style={{ 
                height: "70vh",      // Set a fixed height (70% of screen)
                overflowY: "auto",   // Enable vertical scrolling
                paddingRight: "10px" // Space for the scrollbar
              }}
              className="custom-scrollbar"
            >
              {posts.map((post) => (
                <Post key={post.id} {...post} />
              ))}
            </div>
          </div>
        ) : (
          <div className="container" style={{ maxWidth: "600px" }}>
            <h3 className="mb-4 fw-bold">Create New Post</h3>
            <Form addPost={addPost} />
          </div>
        )}
        </div>
      </div>
      <Footer />
    </>
  );
}