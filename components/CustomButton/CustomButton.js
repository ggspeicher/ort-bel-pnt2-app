import React from 'react';
import { Button } from 'react-native-elements';

export default ({ text, color, width, height, onPress, marginBottom }) => {
  return (
    <Button
      title={text}
      buttonStyle={{
        backgroundColor: color || '#007AFF',
        width: width || 200,
        height: height || 50,
        marginBottom: marginBottom || 0,
      }}
      onPress={onPress}
    />
  );
};
