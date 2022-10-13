import { View, Text, TextInput, Button } from "react-native";
import React from "react";

const Signup = () => {
  const signup = () => {
    console.log("signup");
  };
  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="bg-blue-300 p-5 rounded-lg space-y-3 w-11/12">
        <TextInput
          placeholder="Name"
          className="bg-white  px-3 py-2 rounded-xl "
        />
        <TextInput
          placeholder="Email"
          className="bg-white  px-3 py-2 rounded-xl "
        />
        <TextInput
          placeholder="Phone Number"
          className="bg-white  px-3 py-2 rounded-xl "
        />
        <TextInput
          placeholder="password"
          className="bg-white  px-3 py-2 rounded-xl "
        />
      </View>
      <Button onPress={signup} title="Signup" />
    </View>
  );
};

export default Signup;
