import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import Habits from "@/components/Habits";
import GratitudeJournal from "@/components/Gratitude";
import { Text, View } from "@/components/Themed";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Habits</Text>
        <Habits />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Gratitude</Text>
        <GratitudeJournal />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
