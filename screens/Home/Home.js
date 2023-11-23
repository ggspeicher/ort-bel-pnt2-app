import { SafeAreaView, View } from 'react-native';
import { useEffect, useState } from 'react';

import { getDocs, collection, query } from 'firebase/firestore'
import { db } from '../../services/config'
import ProductGrid from '../../components/Productos/Productos';
import SearchProduct from '../../components/Search/Search';


export default () => {
    const [productos, setProductos] = useState([])
    const [productosFiltrados, setProductosFiltrados] = useState([]);

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

    return (
        <SafeAreaView>
        <View>
        <SearchProduct
          productos={productos}
          setProductosFiltrados={setProductosFiltrados}
        />
        </View>
        <View>
        <ProductGrid productos={productosFiltrados} />
        </View>
        </SafeAreaView>
    )

}