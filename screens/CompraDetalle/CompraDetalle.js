import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import CompraDetailList from '../../components/CompraDetailList/CompraDetailList';
import { usePerfil } from '../../context/PerfilContext';
import { View, StyleSheet } from 'react-native';

export default function CompraDetalle({ route }) {
  const { compra } = route.params.compra;
  const { perfil } = usePerfil();

  return (
    <ScrollView>
      <View style={styles.container}>
        <CompraDetailList compra={compra} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});