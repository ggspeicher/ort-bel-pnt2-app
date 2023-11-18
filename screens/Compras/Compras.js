import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { getDocs, collection, query, where } from 'firebase/firestore';
import PantallaVacia from '../../components/PantallaVacia/PantallaVacia';
import CompraItems from '../../components/CompraItems/CompraItems';
import { db } from '../../services/config';
import ServicioCompras from '../../services/ServicioCompras';

export default () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const obtenerCompras = async () => {
      try {
        setCompras(await ServicioCompras.obtenerComprasPorUsuario(1));
      } catch (err) {
        console.error(err)
      }
    };
    obtenerCompras();
  }, []);

  return (
    <ScrollView>
      {compras.length > 0 ? (
        <>
          <CompraItems compras={compras} />
        </>
      ) : (
        <PantallaVacia texto={'¡No tienes compras actualmente!'} />
      )}
    </ScrollView>
  );
};