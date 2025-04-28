import { View, Text, ImageBackground } from "react-native";
import React, { ReactElement } from "react";
import { Tabs } from "expo-router";
import {
  Pencil,
  FileChartColumnIncreasing,
  House,
  ListTodo,
  Users,
  CalendarCheck,
  User,
  NotebookPen,
  Handshake,
} from "lucide-react-native";
import { Screen } from "react-native-screens";

interface TabIconProps {
  focused: boolean;
  icon: ReactElement;
  title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  return (
    <ImageBackground
      className="flex flex-1 flex-row w-full overflow-hidden min-w-[4rem] min-h-14 justify-center 
  items-center mt-8"
    >
      <View className="flex flex-col justify-center items-center">
        {React.cloneElement(icon, {
          color: focused ? "#ff4f29" : "#19021b",
          size: 24,
        })}
        <Text
          className={`font-Quicksand font-semibold text-xs ${
            focused ? "text-accent" : "text-text"
          }`}
        >
          {focused ? title : ""}
        </Text>
      </View>
    </ImageBackground>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "inherit",
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={<House />} title={"Home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="today"
        options={{
          title: "Today",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={<CalendarCheck />} title={"Today"} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "You",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={<User />} title={"You"} />,
        }}
      />
    </Tabs>
  );
};

export default _Layout;
