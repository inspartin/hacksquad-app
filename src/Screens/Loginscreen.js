import { View, Text, TextInput } from "react-native";
import React from "react";

const Loginscreen = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="bg-blue-300 p-5 rounded-lg space-y-3 w-11/12">
        <TextInput
          placeholder="Email"
          className="bg-white  px-3 py-2 rounded-xl "
        />
        <TextInput
          placeholder="password"
          className="bg-white  px-3 py-2 rounded-xl "
        />
      </View>
    </View>
  );
};

export default Loginscreen;
