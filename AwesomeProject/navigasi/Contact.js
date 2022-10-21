import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';
import { style } from './MokStyle';
import fphone from './image/phone.png';
import fmail from './image/gmail.png';

const Contact = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.mokstyle}>Contact Me</Text>

                <Text style={style.moksoc}>Phone : +62-895-359-629-199</Text>
                    <Image source = {fphone} style={{width:70, height:70, alignSelf:'center'}}/>

                <Text></Text>

                <Text style={style.moksoc}>Gmail : hfdhardcore123@gmail.com</Text>
                    <Image source = {fmail} style={{width:80, height:80, alignSelf:'center'}}/>

                <Text style={{paddingTop:20, fontSize:15}}>Give me some good :</Text>
                <TextInput style={{borderWidth:1, backgroundColor:'white', color:'#262c50', marginTop:20,
            padding:20, fontSize:25}}/>

            <Text style={{paddingVertical:50}}></Text>
                <Button title='Social'
                onPress={()=>navigation.navigate('Social')}/>
            <Text></Text>
                <Button title='Profile'
                onPress={()=>navigation.navigate('Profile')}/>
            <Text></Text>
                <Button title='Go Home'
                onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Contact;