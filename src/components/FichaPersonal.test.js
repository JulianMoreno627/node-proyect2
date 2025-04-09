// src/components/FichaPersonal.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Funcionalidad Ficha Personal', () => {
  test('Se renderiza el botón "Ficha Personal" y al hacer clic muestra el componente FichaPersonal', () => {
    // Renderizamos el componente principal
    render(<App />);
    
    // Buscamos el botón "Ficha Personal"
    const fichaButton = screen.getByRole('button', { name: /Ficha Personal/i });
    expect(fichaButton).toBeInTheDocument();
    
    // Simulamos el clic en el botón
    fireEvent.click(fichaButton);
    
    // Verificamos que se muestre el contenido de FichaPersonal
    const fichaText = screen.getByText(/Esta es la ficha de personal/i);
    expect(fichaText).toBeInTheDocument();
  });
});
