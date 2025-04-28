import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { PencilLine } from "lucide-react-native";

interface CreatePostBarProps {
  onPress?: () => void;
  text?: string;
}

const CreatePostBar = ({ onPress, text }: CreatePostBarProps) => {
  return (
    <View
      className="flex-row justify-start bg-background items-center rounded-full px-5 py-3 my-3 mx-4 
      shadow-sm shadow-slate-300"
      style={{ elevation: 2 }}
    >
      <TouchableOpacity onPress={onPress} className="flex flex-row">
        <PencilLine color="#64748b" size={26} strokeWidth={1.4} />
        <Text className="text-lg text-slate-500 ml-3 font-Quicksand font-medium">{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostBar;
