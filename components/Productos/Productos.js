import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

const ProductGrid = ({ productos }) => {
    const renderProductItem = ({ item }) => (
      <View style={styles.item}>
        <Image source={{ uri: item.path }} style={styles.image} />
        <Text>{item.nombre}</Text>
        <Text>Precio: {item.precio}</Text>
        <Text>Stock: {item.stock}</Text>
      </View>
    );
  
  const groupedProducts = [];
  let i = 0;
  while (i < productos.length) {
    groupedProducts.push(productos.slice(i, i + 2));
    i += 2;
  }

  const keyExtractor = (item, index) => {
    if (typeof item.id === 'number') {
      return item.id.toString();
    }
    return index.toString(); // Usar el índice como clave si el ID no es un número
  };
  
    return (
        <View style={styles.container}>
        <FlatList
          data={productos}
          numColumns={2} // Para mostrar dos elementos por fila
          renderItem={renderProductItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.container}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 5,
      paddingTop: 10,
    },
    item: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: Dimensions.get('window').width / 2 - 15, // Para mostrar dos elementos por fila
    },
    image: {
      width: '100%',
      height: 100,
      marginBottom: 5,
      resizeMode: 'cover',
      borderRadius: 5,
    },
  });

export default ProductGrid;