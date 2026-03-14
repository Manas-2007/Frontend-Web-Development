function Display() {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            className="form-control form-control-lg text-end border shadow-lg"
            placeholder="0"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default Display;