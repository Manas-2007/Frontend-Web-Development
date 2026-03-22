import React from "react";

export function Footer() {
  return (
    <footer
      className="bg-dark text-light text-center"
      style={{ padding: "0.5rem 0", fontSize: "0.9rem" }}
    >
      <div className="container">
        <p className="mb-1">Follow us on Social Media</p>
        <div className="my-1">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-light"
          >
            <i className="bi bi-facebook" style={{ fontSize: "1.2rem" }}></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-light"
          >
            <i className="bi bi-twitter" style={{ fontSize: "1.2rem" }}></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-light"
          >
            <i className="bi bi-instagram" style={{ fontSize: "1.2rem" }}></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-light"
          >
            <i className="bi bi-linkedin" style={{ fontSize: "1.2rem" }}></i>
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}