import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductGrid = ({ productos }) => {
  const navigation = useNavigation();

  const renderProductItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => handleDetalleProducto(item)}>
      <View style={styles.column}>
        <View style={styles.item}>
          <Image source={{ uri: item.path }} style={styles.image} />
          <Text style={styles.productName}>{item.nombre}</Text>
          <Text style={styles.price}>Precio: $ {item.precio}</Text>
          <Text>Stock: {item.stock}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  const keyExtractor = (item, index) => {
    if (typeof item.id === 'number') {
      return item.id.toString();
    }
    return index.toString();
  };

  const handleDetalleProducto = (producto) => {
    navigation.navigate('DetalleProducto', {
      producto,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productos}
        numColumns={2}
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
    width: Dimensions.get('window').width / 2 - 15,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 5,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productName: {
    fontSize: 18, // Tamaño más grande para el nombre del producto
    fontWeight: 'bold', // Texto en negrita para resaltar
    marginBottom: 5, // Espacio entre el nombre y el precio
  },
  price: {
    fontSize: 14, // Tamaño más pequeño para el precio
    marginBottom: 5,
  },
});

export default ProductGrid;