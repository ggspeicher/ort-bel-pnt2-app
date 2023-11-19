import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default DetalleProducto = ({route}) => {
  const { producto } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del Producto</Text>
      <View style={styles.productInfo}>
        <Text>Nombre: {producto.nombre}</Text>
        <Text>Precio: {producto.precio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productInfo: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});