import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default ( { ph, value, set, kbType } ) => {

  const keyboardType = String(kbType)

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholderStyle={styles.placeholderStyle}
        textErrorStyle={styles.textErrorStyle}
        label="TextInput"
        placeholder={ ph ? ph : 'cargando...'}
        placeholderTextColor="gray"
        onChangeText={text => {
          set(text);
        }}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  input: {
    height: 55,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  inputStyle: { fontSize: 16 },
  labelStyle: { fontSize: 14 },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
});