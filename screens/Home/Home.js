import { SafeAreaView, ScrollView, View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';

import { getDocs, collection, query } from 'firebase/firestore'
// getDocs me permite obtener los documentos de una coleccion.
// collection me permite obtener una coleccion.
// query la uso cuando quiero generar una consulta.
// where la uso para agregar filtros a mis consultas.

// ahora me traigo mi referencia de la base de datos
import { db } from '../../services/config'


export default () => {

    const [productos, setProductos] = useState([])
    const [buscar, setBuscar] = useState([])

    useEffect(() => {

        const obtenerProductos = async () => {
            const q = query(collection(db, 'productos'));

            try {
                const resultadoQuery = await getDocs(q);
                const productosData = [];
                
                if (!resultadoQuery.empty) {
                  resultadoQuery.forEach(doc => {
                    productosData.push(doc.data());
                  });
                   setProductos(productosData);
                }
            } catch ( err ) {
                console.log('Error al traer los productos: ', err)
            }
        };

        obtenerProductos();
    },[])

    
    console.log(productos)
    return (
        <SafeAreaView>
          <View>
            <TextInput placeholder="Nombre de producto" 
            onChangeText={(buscar) => setBuscar(buscar)}
            />
             <Button title="Buscar" />
          </View>
        <ScrollView>
        {productos.map((producto, index) => (
        <View>
          <Text style={styles.nombreProducto}>{producto.nombre}</Text>
          <Text style={styles.precio}>{producto.precio}</Text>
          <Text style={styles.stock}>{producto.stock}</Text>
        </View>
      ))}
        </ScrollView>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    nombreProducto: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    precio: {
      fontSize: 16,
      color: 'green',
    },
    stock: {
        fontSize: 16,
        color: 'black',
      },
  });