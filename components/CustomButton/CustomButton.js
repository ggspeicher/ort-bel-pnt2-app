import React from "react";
import { Button } from "react-native-elements";

export default ({ text, color, width, height, onPress }) => {
  return (
    <Button
      title={text}
      buttonStyle={{
        backgroundColor: color || "#007AFF",
        width: width || 200,
        height: height || 50,
      }}
      onPress={onPress}
    />
  );
};