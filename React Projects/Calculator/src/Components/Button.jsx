function Button({ value }) {
  return (
    <div className="col-4 mb-3">
      <button className="btn btn-light border w-100 py-3 fs-4 shadow-sm">
        {value}
      </button>
    </div>
  );
}

export default Button;