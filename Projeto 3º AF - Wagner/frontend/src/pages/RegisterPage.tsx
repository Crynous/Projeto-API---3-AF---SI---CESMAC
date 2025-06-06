// src/pages/RegisterPage.tsx
import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Card } from 'react-bootstrap';

export default function RegisterPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Card style={{ width: '100%', maxWidth: '450px', padding: '2rem' }}>
        <h2 className="text-center mb-4">Registro</h2>
        <RegisterForm />
      </Card>
    </div>
  );
}
