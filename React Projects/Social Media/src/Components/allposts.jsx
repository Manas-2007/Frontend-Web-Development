export function Post({ title, description, reactions, mode, tags }) {
  return (
    <div className="card shadow-sm mb-4" style={{ borderRadius: "12px", border: "1px solid #e0e0e0" }}>
      <div className="card-body p-4">
        {/* Header: Title and Privacy Badge */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title fw-bold mb-0" style={{ color: "#2d3436" }}>
            {title || "Post Title"}
          </h5>
          <span className={`badge rounded-pill ${mode === "private" ? "bg-secondary" : "bg-primary"}`}>
            {mode || "Public"}
          </span>
        </div>

        {/* Taglines */}
        <div className="mb-3">
          {tags && tags.map((tag, index) => (
            <span key={index} className="badge bg-light text-dark border me-1" style={{ fontSize: "0.75rem" }}>
              #{tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <p className="card-text text-muted" style={{ lineHeight: "1.6" }}>
          {description || "This is where your post content will appear. It looks clean and readable with proper line height."}
        </p>

        {/* Footer: Reactions and Action */}
        <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
          <div className="reactions">
            <button className="btn btn-outline-danger btn-sm rounded-pill px-3">
              ❤️ <span className="fw-bold ms-1">{reactions || 0}</span>
            </button>
          </div>
          <div className="actions">
            <a href="#" className="card-link text-decoration-none fw-semibold">View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}