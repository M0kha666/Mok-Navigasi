import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { style } from "./MokStyle.js";
import fhello from './image/bwh.png';

const Home = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.mokstyle}>HELLO MOKWRLD</Text>

            <Image source = {fhello} style={{width:200, height:500, alignSelf:'center'}}/>

                <Text></Text>
            <Button title='About'
            onPress={()=>navigation.navigate('About')}/>
                <Text></Text>
            <Button title='Profile'
            onPress={()=>navigation.navigate('Profile')}/>
                <Text></Text>
            <Button title='Social'
            onPress={()=>navigation.navigate('Social')}/>
                <Text></Text>
            <Button title='Contact'
            onPress={()=>navigation.navigate('Contact')}/>
        </View>
    );
};

export default Home;