import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import CompraDetail from '../../components/CompraDetail/CompraDetail';
import { usePerfil } from '../../context/PerfilContext';
import { View, StyleSheet } from 'react-native';

export default function CompraDetalle({ route }) {
  const { compra } = route.params.compra;
  const { perfil } = usePerfil();

  return (
    <ScrollView>
      <View style={styles.container}>
        <CompraDetail compra={compra} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});