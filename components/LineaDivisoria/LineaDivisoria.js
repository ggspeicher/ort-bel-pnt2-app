import React from 'react';
import { View, StyleSheet } from 'react-native';

export default ({ marginVertical }) => {
  return (
    <View style={
        {
            borderBottomWidth: 0.5,
            borderBottomColor: '#ccc',
            width: '100%',
            marginVertical: marginVertical
        }
    }
    />
  )
}
