import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const ProductGrid = ({ productos }) => {
    const renderProductItem = ({ item }) => (
      <View style={styles.item}>
        <Text>{item.nombre}</Text>
        <Text>Precio: {item.precio}</Text>
        <Text>Stock: {item.stock}</Text>
      </View>
    );
  
    const keyExtractor = (item, index) => index.toString();
  
    return (
      <View>
        <FlatList
          data={productos}
          renderItem={renderProductItem}
          keyExtractor={keyExtractor}
          horizontal
          contentContainerStyle={styles.list}
          style={{ width: '100%' }}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 10,
  },
  item: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 'auto', // El ancho será dinámico según el tamaño del contenido
    maxWidth: 200,
  },
});

export default ProductGrid;