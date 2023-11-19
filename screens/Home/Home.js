import { SafeAreaView, View, StyleSheet,TextInput } from 'react-native';
import { useEffect, useState } from 'react';

import { getDocs, collection, query } from 'firebase/firestore'
import { db } from '../../services/config'
import ProductGrid from '../../components/Productos/Productos';
import SearchButton from '../../components/Search/Search';


export default () => {

    const [productos, setProductos] = useState([])
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [buscar, setBuscar] = useState('');

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
                   setProductosFiltrados(productosData);
                }
            } catch ( err ) {
                console.log('Error al traer los productos: ', err)
            }
        };

        obtenerProductos();
    },[])
    console.log(productos)

    useEffect(() => {
      // Verifica si el campo de búsqueda está vacío y muestra todos los productos
      if (buscar === '') {
        setProductosFiltrados(productos);
      }
    }, [buscar, productos]);

    return (
        <SafeAreaView>
          <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Nombre de producto"
            onChangeText={(text) => setBuscar(text)}
      />
      <SearchButton
          productos={productos}
          setProductosFiltrados={setProductosFiltrados}
          buscar={buscar}
        />
          </View>
        <View>
        <ProductGrid productos={productosFiltrados} />
        </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  });