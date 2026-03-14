function Todo_list({ tasktodo }) {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-9">
          <div className="bg-white shadow rounded-4 p-4 border">

            {tasktodo.map((item, index) => (
              <div
                className="row g-3 align-items-center mb-3 pb-2 border-bottom"
                key={index}
              >
                <div className="col-md-5">
                  <span className="fs-5">{item.todo}</span>
                </div>

                <div className="col-md-4">
                  <span className="text-muted fs-6">
                    {item.duedate}
                  </span>
                </div>

                <div className="col-md-3">
                  <button className="btn btn-danger w-100 rounded-3 fw-semibold shadow-sm">
                    Delete
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo_list;