import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { style } from './MokStyle';
import fgithub from './image/github.png'
import ftwt from './image/twitter.png'
import ffb from './image/fb.png'
import fig from './image/ig.png'

const Social = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.mokstyle}>Social</Text>

                <Text style={style.moksoc}>Github : M0kha666</Text>
                <Image source = {fgithub} style={{width:70, height:70, alignSelf:'center'}}/>

                <Text style={style.moksoc}>Twitter : mokhazzz</Text>
                <Image source = {ftwt} style={{width:80, height:80, alignSelf:'center'}}/>

                <Text style={style.moksoc}>Facebook : Moch Khafid</Text>
                <Image source = {ffb} style={{width:80, height:80, alignSelf:'center'}}/>

                <Text style={style.moksoc}>Instagram : moch_khafid</Text>
                <Image source = {fig} style={{width:70, height:70, alignSelf:'center'}}/>
            
            <Text style={{paddingVertical:30}}></Text>
                <Button title='Profile'
                onPress={()=>navigation.navigate('Profile')}/>
            <Text></Text>
                <Button title='About'
                onPress={()=>navigation.navigate('About')}/>
            <Text></Text>
                <Button title='Contact'
                onPress={()=>navigation.navigate('Contact')}/>
            <Text></Text>
                <Button title='Go Home'
                onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Social;