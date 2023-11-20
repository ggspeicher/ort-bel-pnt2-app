import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DetalleProducto({ route }) {
  const { producto } = route.params;
  const navigation = useNavigation();

  const agregarAlCarrito = () => {
    // ** Validar si hay usuario logeado si lo hay, agrega y si no al login **

    // Lógica para agregar el producto al carrito
    console.log(`Producto ${producto.nombre} agregado al carrito.`);
    navigation.navigate('Productos');
  };

  return (
    <View style={styles.container}>
      <View style={styles.productDetails}>
        <Image source={{ uri: producto.path }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{producto.nombre}</Text>
          <Text style={styles.price}>Precio: ${producto.precio}</Text>
          <TouchableOpacity style={styles.addButton}  onPress={agregarAlCarrito}>
            <Text style={styles.addButtonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 50, 
      paddingHorizontal: 20,
    },
    productDetails: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20, 
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
      borderRadius: 5,
    },
    details: {
      marginLeft: 20,
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    price: {
      fontSize: 18,
      marginBottom: 10,
    },
    addButton: {
      backgroundColor: 'green',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    addButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });