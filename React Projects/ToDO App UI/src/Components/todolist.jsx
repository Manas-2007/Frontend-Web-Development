function Todo_list() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-9">

          <div className="bg-white shadow-sm rounded-4 p-3 border mb-3">
            <div className="row align-items-center">
              <div className="col-md-5 text-start">
                <p className="mb-0 fs-5 fw-semibold text-dark">Buy Milk</p>
              </div>

              <div className="col-md-4 text-start">
                <p className="mb-0 fs-6 text-muted">12/03/2026</p>
              </div>

              <div className="col-md-3">
                <button className="btn btn-danger w-100 rounded-3 fw-semibold shadow-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-3 border mb-3">
            <div className="row align-items-center">
              <div className="col-md-5 text-start">
                <p className="mb-0 fs-5 fw-semibold text-dark">Wash Car</p>
              </div>

              <div className="col-md-4 text-start">
                <p className="mb-0 fs-6 text-muted">15/03/2026</p>
              </div>

              <div className="col-md-3">
                <button className="btn btn-danger w-100 rounded-3 fw-semibold shadow-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-3 border mb-3">
            <div className="row align-items-center">
              <div className="col-md-5 text-start">
                <p className="mb-0 fs-5 fw-semibold text-dark">Go to Market</p>
              </div>

              <div className="col-md-4 text-start">
                <p className="mb-0 fs-6 text-muted">20/03/2026</p>
              </div>

              <div className="col-md-3">
                <button className="btn btn-danger w-100 rounded-3 fw-semibold shadow-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-4 p-3 border mb-3">
            <div className="row align-items-center">
              <div className="col-md-5 text-start">
                <p className="mb-0 fs-5 fw-semibold text-dark">Buy Books</p>
              </div>

              <div className="col-md-4 text-start">
                <p className="mb-0 fs-6 text-muted">25/03/2026</p>
              </div>

              <div className="col-md-3">
                <button className="btn btn-danger w-100 rounded-3 fw-semibold shadow-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Todo_list;
