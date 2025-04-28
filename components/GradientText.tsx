import React from "react";
import { Text, TextStyle } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

interface GradientTextProps {
  text: string;
  colors: [string, string, ...string[]];
  style?: TextStyle;
}

export const GradientText = ({ text, colors, style }: GradientTextProps) => {
  return (
    <MaskedView
      // maskElement defines the opaque shape
      maskElement={
        <Text
          style={[
            style,
            {
              color: "#000",
              backgroundColor: "transparent",
            },
          ]}
        >
          {text}
        </Text>
      }
    >
      <LinearGradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Text style={[style, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
