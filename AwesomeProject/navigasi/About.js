import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { style } from './MokStyle';
import ferror from './image/errors.jpg'

const About = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.mokstyle}>About Me</Text>

                <Text style={style.mokstyleN}>Seorang Mahasiswa IT biasa yang menyukai banyak hal 
                    yang berkaitan tentang seni</Text>

            <Text style={{paddingVertical:30}}></Text>
            <Image source = {ferror} style={{width:'100%', height:200, alignSelf:'center'}}/>
            
            <Text style={{paddingVertical:50}}></Text>
                <Button title='Profile'
                onPress={()=>navigation.navigate('Profile')}/>
            <Text></Text>
                <Button title='Go Home'
                onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default About;