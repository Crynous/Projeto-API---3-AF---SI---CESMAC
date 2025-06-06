// src/components/MovieForm.tsx
import { useState, useEffect } from "react";
import { createFilme, updateFilme } from "../services/api";
import { Filme } from "../types/Filme";
import { Form, Button, Card } from "react-bootstrap";

interface Props {
  token: string;
  onSuccess: () => void;
  onCancel: () => void;
  filmeEdit?: Filme | null;
}

export default function MovieForm({ token, onSuccess, onCancel, filmeEdit }: Props) {
  const [formData, setFormData] = useState<Partial<Filme>>({
    titulo: "",
    tipo: "Filme",
    genero: "",
    ano_lancamento: 2024,
    sinopse: "",
  });

  useEffect(() => {
    if (filmeEdit) {
      setFormData(filmeEdit);
    } else {
      setFormData({
        titulo: "",
        tipo: "Filme",
        genero: "",
        ano_lancamento: 2024,
        sinopse: "",
      });
    }
  }, [filmeEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (filmeEdit) {
        await updateFilme(token, filmeEdit.id, formData);
      } else {
        await createFilme(token, formData);
      }
      setFormData({ titulo: "", tipo: "Filme", genero: "", ano_lancamento: 2024, sinopse: "" });
      onSuccess();
    } catch (error) {
      alert("Erro ao salvar filme");
    }
  };

  return (
    <Card className="mb-4 shadow">
      <Card.Body>
        <h3 className="mb-3">{filmeEdit ? "Editar Filme/Série" : "Novo Filme/Série"}</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              name="titulo"
              value={formData.titulo || ""}
              onChange={handleChange}
              placeholder="Título"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tipo</Form.Label>
            <Form.Select name="tipo" value={formData.tipo || "Filme"} onChange={handleChange}>
              <option value="Filme">Filme</option>
              <option value="Série">Série</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gênero</Form.Label>
            <Form.Control
              name="genero"
              value={formData.genero || ""}
              onChange={handleChange}
              placeholder="Gênero"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ano de Lançamento</Form.Label>
            <Form.Control
              name="ano_lancamento"
              type="number"
              value={formData.ano_lancamento || 2024}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sinopse</Form.Label>
            <Form.Control
              as="textarea"
              name="sinopse"
              value={formData.sinopse || ""}
              onChange={handleChange}
              placeholder="Sinopse"
              rows={3}
              required
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button type="submit" variant="success">
              {filmeEdit ? "Atualizar" : "Criar"}
            </Button>
            <Button variant="secondary" onClick={onCancel}>
              Cancelar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
