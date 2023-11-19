import React from 'react';
import { Button } from 'react-native';

const SearchButton = ({ productos, setProductosFiltrados, buscar }) => {
    const handleBuscar = () => {
      // Implementa la lógica de búsqueda aquí utilizando 'buscar'
      const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(buscar.toLowerCase())
      );
      setProductosFiltrados(productosFiltrados);
    };
  
    return (
      <Button
        title="Buscar"
        color="#4CAF50"
        onPress={handleBuscar}
      />
    );
  };

export default SearchButton;