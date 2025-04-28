import { View, Text } from "react-native";
import React from "react";
import CalendarStrip from "react-native-calendar-strip";

const Today = () => {
  return (
    <View className="flex-1 pt-14 bg-background">
      <CalendarStrip
        scrollable
        daySelectionAnimation={{
          type: "border",
          duration: 50,
          borderWidth: 1,
          borderHighlightColor: "#d91bf2",
        }}
        style={{
          height: 100,
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomWidth: 0.5,
          borderColor: "#dadada",
        }}
        calendarColor={"#fef9ff"}
        calendarHeaderStyle={{ color: "#ff4f29", fontFamily: "QuickSand" }}
        dateNumberStyle={{ color: "#ff4f29", fontFamily: "QuickSand" }}
        dateNameStyle={{ color: "#ff4f29" }}
        highlightDateNumberStyle={{ color: "#d91bf2" }}
        highlightDateNameStyle={{ color: "#d91bf2" }}
        disabledDateNameStyle={{ color: "grey" }}
        disabledDateNumberStyle={{ color: "grey" }}
        leftSelector={<Text style={{ fontSize: 25, color: "#f77d74", marginLeft: 10 }}>{"‹"}</Text>}
        rightSelector={
          <Text style={{ fontSize: 25, color: "#f77d74", marginRight: 10 }}>{"›"}</Text>
        }
        onDateSelected={(date) => {
          // handle date selection
        }}
      />
    </View>
  );
};

export default Today;
