import { View, Text } from "react-native"
import { db } from '../../services/config'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { ScrollView } from "react-native-gesture-handler";
import PantallaVacia from "../../components/PantallaVacia/PantallaVacia";
import CompraItems from "../../components/CompraItems/CompraItems";
import { Button } from "react-native-elements";

export default () => {

    const [compras, setCompras] = useState([])

    useEffect(() => {

        const obtenerCompras = async () => {
            const q = query(collection(db, 'usuarios'), where('id', '==', 1));

            try {
                const resultadoQuery = await getDocs(q);
                
                if (!resultadoQuery.empty) {
                    const { compras } = resultadoQuery.docs[0].data()
                    setCompras(compras);
                }
            } catch ( err ) {
                console.log('Error al traer las compras: ', err)
            }
        };

        obtenerCompras()
    },[])
    
    return (
        <ScrollView>
            {true ? (
                <>
                
                    <CompraItems compras={compras} />
                </>
            ) : (
                <PantallaVacia texto={'¡No tienes compras actualmente!'} />
            )}
        </ScrollView>
    )
}