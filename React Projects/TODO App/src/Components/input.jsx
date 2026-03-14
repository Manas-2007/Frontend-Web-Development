function Todo_input() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-9">
          <div className="bg-white shadow rounded-4 p-4 border">
            <div className="row g-3 align-items-center">
              <div className="col-md-5">
                <input
                  type="text"
                  placeholder="Enter todo here"
                  className="form-control form-control-lg rounded-3"
                />
              </div>

              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control form-control-lg rounded-3"
                />
              </div>

              <div className="col-md-3">
                <button className="btn btn-success btn-lg w-100 rounded-3 fw-semibold shadow-sm">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo_input;
