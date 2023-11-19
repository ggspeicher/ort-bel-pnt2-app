import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import PantallaVacia from '../../components/PantallaVacia/PantallaVacia';
import CompraItems from '../../components/CompraItems/CompraItems';
import ServicioCompras from '../../services/ServicioCompras';

export default () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
      const obtenerDatos = async () => {
          setCompras(await ServicioCompras.obtenerCompras("1"));
      };
      obtenerDatos();
  }, []);

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
  );
};