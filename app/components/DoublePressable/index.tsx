import { Pressable } from "react-native";
import React, { ReactNode } from "react";

interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastTap = 0;

  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
