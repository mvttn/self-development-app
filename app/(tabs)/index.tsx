import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import "../global.css";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("@/assets/fonts/Montserrat-VariableFont_wght.ttf"),
    Quicksand: require("@/assets/fonts/Quicksand-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a Loading component
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-primary text-xl font-bold font-Quicksand">
        Hi this font is Quicksand
      </Text>
      <Text className="text-secondary text-l font-semibold font-Monserrat">
        And this font is Montserrat
      </Text>
    </View>
  );
}
