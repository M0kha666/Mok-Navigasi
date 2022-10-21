import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import foto from './errors.jpg';
import { style } from "./style";

const App = () => {
  return (
    <View style={style.container}>
      <View style={style.bagian1}>
        <View style={style.bagian11}></View>
        <View style={style.bagian12}></View>
        <View style={style.bagian11}></View>
        <View style={style.bagian11}></View>
        <View style={style.bagian11}></View>
      </View>
      <View style={style.bagian2}></View>
      <View style={style.bagian1}>
      <View style={style.bagian11}></View>
      <View style={style.bagian12}>
        <TextInput style={{backgroundColor:'white'}}></TextInput>
      </View>
      <View style={style.bagian11}></View>
    </View>
    </View>
  );
}

export default App;