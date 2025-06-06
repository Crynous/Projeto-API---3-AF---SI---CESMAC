// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto py-4 shadow-sm">
      <div className="container text-center">
        <p className="mb-2">© {new Date().getFullYear()} CineApp. Todos os direitos reservados.</p>

        <div className="d-flex justify-content-center mb-2">
          <a
            href="https://github.com/seuprojeto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
          </a>
        </div>

        <p className="small text-secondary">Desenvolvido por Pedro Lucas ;p</p>
      </div>
    </footer>
  );
}
