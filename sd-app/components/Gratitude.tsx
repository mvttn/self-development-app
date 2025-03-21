import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  Keyboard,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface JournalEntry {
  text: string;
  date: Date;
}

export default function GratitudeJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);

  const addEntry = () => {
    if (newEntry.trim() !== "") {
      const newEntryData = { text: newEntry, date: new Date() };
      setEntries((prevEntries) => [...prevEntries, newEntryData]);
      setNewEntry("");
      Keyboard.dismiss();
    } else {
      console.warn("Entry is empty, not adding.");
    }
  };

  return (
    <View style={styles.container}>
      {!showInput ? (
        <TouchableOpacity
          onPress={() => setShowInput(true)}
          style={styles.addButton}
          activeOpacity={0.7}
        >
          <Ionicons name="add-circle-outline" size={30} color="#000" />
        </TouchableOpacity>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="What are you grateful for today?"
            placeholderTextColor="#999"
            value={newEntry}
            onChangeText={setNewEntry}
            style={styles.textInput}
            returnKeyType="done"
            onSubmitEditing={addEntry}
            autoFocus={true}
          />
          <TouchableOpacity onPress={addEntry} activeOpacity={0.7} style={styles.sendButton}>
            <Ionicons name="send" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={entries}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.entryContainer}>
            <View style={styles.entryTextContainer}>
              <Text style={styles.entryText}>{item.text}</Text>
              <Text style={styles.entryDate}>{new Date(item.date).toLocaleString()}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "flex-start" },
  addButton: { marginVertical: 10 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    color: "grey",
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    margin: 14,
    marginBottom: 24,
    padding: 10,
    fontSize: 16,
    minWidth: 300,
  },
  sendButton: { padding: 10 },
  list: { paddingVertical: 10 },
  entryContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  entryTextContainer: { minWidth: 300, margin: 10 },
  entryText: { fontSize: 16, color: "black" },
  entryDate: {
    fontSize: 10,
    color: "grey",
    marginTop: 5,
    textAlign: "right", // Shift the time/date to the right
  },
});
