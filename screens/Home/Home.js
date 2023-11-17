import { Avatar } from '@rneui/themed';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InformacionPersonal from '../../components/InformacionPersonal/InformacionPersonal';
import Soporte from '../../components/Soporte/Soporte';
import Configuracion from '../../components/Configuracion/Configuracion';
import ExpandedContext from '../../context/ExpandedContext';
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

    useEffect(() => {

        const obtenerProductos = async () => {
            const q = query(collection(db, 'productos'));

            try {
                const resultadoQuery = await getDocs(q);
                
                if (!resultadoQuery.empty) {
                    setProductos(resultadoQuery.docs[0].data());
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
        <ScrollView>
        {productos.map((producto, index) => (
        <View key={producto.id} style={styles.productoContainer}>
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
    productoContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
    },
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