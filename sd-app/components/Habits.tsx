import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, FlatList, Keyboard } from "react-native";
import { CheckBox } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";

interface Habit {
  title: string;
  checked: boolean;
}

export default function Habits() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);

  const addHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([...habits, { title: newHabit, checked: false }]);
      setNewHabit("");
      Keyboard.dismiss(); // Dismiss keyboard after adding
    }
  };

  const toggleHabit = (index: number) => {
    setHabits(
      habits.map((habit, i) => (i === index ? { ...habit, checked: !habit.checked } : habit))
    );
  };

  return (
    <View style={{ alignItems: "flex-start" }}>
      {!showInput ? (
        <TouchableOpacity onPress={() => setShowInput(true)} activeOpacity={0.7}>
          <Ionicons name="add-circle-outline" size={30} />
        </TouchableOpacity>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder="Add a new habit"
            value={newHabit}
            onChangeText={setNewHabit}
            style={{
              flex: 1,
              borderBottomWidth: 1,
              margin: 14,
              marginBottom: 24,
              padding: 10,
              fontSize: 16,
              minWidth: 300,
            }}
            returnKeyType="done"
            onSubmitEditing={addHabit} // Allow pressing Enter to add habit
            autoFocus={true} // Show keyboard when input appears
          />
          <TouchableOpacity onPress={addHabit} activeOpacity={0.7}>
            <Ionicons name="send" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={habits}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <CheckBox
            title={item.title}
            checked={item.checked}
            onPress={() => toggleHabit(index)}
            containerStyle={{
              margin: 0,
              paddingVertical: 4,
              backgroundColor: "transparent",
              borderWidth: 0,
            }}
          />
        )}
      />
    </View>
  );
}
