import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default ( { defaultValue, value, set, kbType, setErrors} ) => {

  const keyboardType = String(kbType)

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.input}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        label="TextInput"
        defaultValue={ defaultValue }
        onChangeText={text => {
          set(text);
          setErrors(false)
        }}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
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
  placeholderStyle: { fontSize: 16 }
});