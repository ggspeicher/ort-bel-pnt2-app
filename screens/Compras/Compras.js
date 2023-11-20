import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import PantallaVacia from '../../components/PantallaVacia/PantallaVacia';
import CompraItems from '../../components/CompraItems/CompraItems';
import { usePerfil } from '../../context/PerfilContext';

export default () => {

  const { perfil } = usePerfil()
  const { compras } = perfil

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