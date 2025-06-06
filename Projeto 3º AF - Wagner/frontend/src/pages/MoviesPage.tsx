// src/pages/MoviesPage.tsx
import MovieList from "../components/MovieList";
import { Container, Alert } from "react-bootstrap";

export default function MoviesPage() {
  const token = localStorage.getItem("access");

  if (!token) {
    return (
      <Container style={{ padding: "2rem", maxWidth: 600 }}>
        <Alert variant="warning">
          Você precisa estar <strong>logado</strong> para ver os filmes.
        </Alert>
      </Container>
    );
  }

  return (
    <Container style={{ padding: "2rem" }}>
      <h1 className="mb-4">Filmes e Séries</h1>
      <MovieList token={token} />
    </Container>
  );
}
