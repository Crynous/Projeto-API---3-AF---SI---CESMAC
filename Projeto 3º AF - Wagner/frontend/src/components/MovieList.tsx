// src/components/MovieList.tsx
import { useEffect, useState } from "react";
import { fetchFilmes, deleteFilme } from "../services/api";
import { Filme } from "../types/Filme";
import MovieForm from "./MovieForm";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Pencil, Trash, PlusCircle } from "react-bootstrap-icons";

interface Props {
  token: string;
}

export default function MovieList({ token }: Props) {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [filmeEdit, setFilmeEdit] = useState<Filme | null>(null);
  const [showForm, setShowForm] = useState(false);

  async function loadFilmes() {
    try {
      const data = await fetchFilmes(token);
      setFilmes(data);
    } catch {
      alert("Erro ao carregar filmes/séries");
    }
  }

  useEffect(() => {
    loadFilmes();
  }, [token]);

  const handleDelete = async (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Deseja realmente deletar?")) {
      // continue
      try {
        await deleteFilme(token, id);
        loadFilmes();
      } catch {
        alert("Erro ao excluir filme");
      }
    }
  };

  const handleCreateNew = () => {
    setFilmeEdit(null);
    setShowForm(true);
  };

  const handleEdit = (filme: Filme) => {
    setFilmeEdit(filme);
    setShowForm(true);
  };

  const handleSuccess = () => {
    loadFilmes();
    setShowForm(false);
    setFilmeEdit(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFilmeEdit(null);
  };

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Filmes e Séries</h2>
        <Button variant="success" onClick={handleCreateNew}>
          <PlusCircle className="me-2" />
          Criar novo filme
        </Button>
      </div>

      {showForm && (
        <MovieForm
          token={token}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
          filmeEdit={filmeEdit}
        />
      )}

      <Row>
        {filmes.map((filme) => (
          <Col md={6} lg={4} key={filme.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{filme.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{filme.tipo}</Card.Subtitle>
                <Card.Text>
                  <strong>Gênero:</strong> {filme.genero} <br />
                  <strong>Ano:</strong> {filme.ano_lancamento} <br />
                  <strong>Sinopse:</strong> <br /> {filme.sinopse}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleEdit(filme)}
                >
                  <Pencil className="me-1" /> Editar
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDelete(filme.id)}
                >
                  <Trash className="me-1" /> Excluir
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
