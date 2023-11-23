import React from 'react';
import { View,TextInput, Button, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

const SearchProduct = ({ productos, setProductosFiltrados}) => {
    const [buscar, setBuscar] = useState('');
    const handleBuscar = () => {
      // Implementa la lógica de búsqueda aquí utilizando 'buscar'
      const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(buscar.toLowerCase())
      );
      setProductosFiltrados(productosFiltrados);
    };
  
    const handleSubmitEditing = () => {
      handleBuscar();
    };

    useEffect(() => {
      // Verifica si el campo de búsqueda está vacío y muestra todos los productos
      if (buscar === '') {
        setProductosFiltrados(productos);
      }
    }, [buscar, productos]);

    return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Nombre de producto"
            onChangeText={(text) => setBuscar(text)}
            onSubmitEditing={handleSubmitEditing}
          />
        <Button
          title="Buscar"
          color="#4CAF50"
          onPress={handleBuscar}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    input: {
      flex: 1,
      marginRight: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    });

export default SearchProduct;