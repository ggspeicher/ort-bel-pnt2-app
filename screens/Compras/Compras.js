import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import PantallaVacia from '../../components/PantallaVacia/PantallaVacia';
import CompraItems from '../../components/CompraItems/CompraItems';
import { usePerfil } from '../../context/PerfilContext';
import { View, StyleSheet } from 'react-native';

export default () => {

  const { perfil } = usePerfil()
  const { compras } = perfil

  return (
    <ScrollView>
      <View style={styles.container}>
        {compras > 0 ? (
          <>
            <CompraItems compras={compras} />
          </>
        ) : (
          <PantallaVacia texto={'¡No tienes compras actualmente!'} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});