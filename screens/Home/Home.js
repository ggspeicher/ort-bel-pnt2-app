import { SafeAreaView, ScrollView, View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';

import { getDocs, collection, query } from 'firebase/firestore'
import { db } from '../../services/config'
import ProductGrid from '../../components/Productos/Productos';


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

    return (
        <SafeAreaView>
          <View>
            <TextInput placeholder="Nombre de producto" 
            onChangeText={(buscar) => setBuscar(buscar)}
            />
             <Button title="Buscar" />
          </View>
        <View>
          <ProductGrid productos= {productos} />
        </View>
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