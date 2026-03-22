export function Form() {
  return ( <>
  <div>
    <div><h3 className="text-center text-primary">Create New Post</h3></div>
    <div className="d-flex mt-4">
      <div className="flex-grow-1 p-4">
        <form className="row g-3 bg-light p-4 rounded shadow">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Title
            </label>
            <input type="text" className="form-control" id="inputEmail4" placeholder="Title of Post" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Drop your post description"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              No of Reactions
            </label>
            <input type="text" className="form-control" id="inputCity" placeholder="Post Reactions" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Mode
            </label>
            <select id="inputState" className="form-select">
              <option selected>Public</option>
              <option>Private</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Taglines
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}