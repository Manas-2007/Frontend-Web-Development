import { useRef } from "react";

export function Form({ addPost }) {
  // 1. Create references for your inputs
  const titleRef = useRef();
  const descRef = useRef();
  const reactionsRef = useRef();
  const modeRef = useRef();
  const tagsRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading

    // 2. Collect the data from the inputs
    const newPost = {
      id: Date.now(), // Unique ID for React keys
      title: titleRef.current.value,
      description: descRef.current.value,
      reactions: reactionsRef.current.value,
      mode: modeRef.current.value,
      tags: tagsRef.current.value.split(" "), // Converts string to array
    };

    // 3. Send it to App.jsx
    addPost(newPost);
  };

  return (
    <div>
      <div>
        <h3 className="text-center text-primary">Create New Post</h3>
      </div>
      <div className="d-flex mt-4">
        <div className="flex-grow-1 p-4">
          {/* 4. Add the onSubmit handler here */}
          <form className="row g-3 bg-light p-4 rounded shadow" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Title</label>
              {/* 5. Attach the REFS to your inputs */}
              <input type="text" ref={titleRef} className="form-control" id="inputEmail4" placeholder="Title of Post" required />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Description</label>
              <input type="text" ref={descRef} className="form-control" id="inputAddress" placeholder="Drop your post description" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">No of Reactions</label>
              <input type="number" ref={reactionsRef} className="form-control" id="inputCity" placeholder="Post Reactions" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">Mode</label>
              <select id="inputState" ref={modeRef} className="form-select">
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Taglines</label>
              <input type="text" ref={tagsRef} className="form-control" id="inputZip" placeholder="tags..." />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}