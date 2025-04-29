import { View, Image } from "react-native";
import { useFonts } from "expo-font";
import "../global.css";
import React from "react";
import CreatePostBar from "@/components/CreatePostBar";
import { router } from "expo-router";
import GradientText from "@/components/GradientText";
import { Bell } from "lucide-react-native";
import { icons } from "@/constants/icons";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("@/assets/fonts/Montserrat-VariableFont_wght.ttf"),
    Quicksand: require("@/assets/fonts/Quicksand-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a Loading component
  }

  return (
    <View className="flex-1 pt-14 bg-background">
      <View className="flex-row justify-between items-center pr-6">
        <View className="flex-row justify-center items-center">
          <Image source={icons.momentaLogo} className="w-14 h-14"></Image>
          <GradientText
            text="Momenta"
            colors={["#f77d74", "#ff4f29", "#d91bf2"]}
            style={{
              fontSize: 32,
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          />
        </View>
        <Bell color="#64748b" size={26} />
      </View>
      <CreatePostBar onPress={() => router.push("/createPost")} text="Reflect..." />
    </View>
  );
}
