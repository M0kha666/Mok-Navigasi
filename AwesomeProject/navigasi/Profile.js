import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { style } from './MokStyle';
import fmoka from './image/moka.png'

const Profile = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.mokstyle}>Profile</Text>

            <Image source = {fmoka} style={{width:300, height:300, alignSelf:'center'}}/>

                <Text style={style.mokstyleN}>Name : Mochammad Khafidz</Text>
                    <Text></Text>
                <Text style={style.mokstyleN}>NIM : 20520005</Text>
                    <Text></Text>
                <Text style={style.mokstyleN}>Prodi : S1 - Teknologi Informasi</Text>
            
            <Text style={{paddingVertical:10}}></Text>
                <Button title='About'
                onPress={()=>navigation.navigate('About')}/>
            <Text></Text>
                <Button title='Social'
                onPress={()=>navigation.navigate('Social')}/>
            <Text></Text>
                <Button title='Go Home'
                onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Profile;