import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Image, Button, Divider, Header } from 'react-native-elements';
import { Tarjeta } from '../components/Tarjeta';
import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
} from 'react-native';

const imagen = () => {
    return (
        <View>
            <Image
                style={styles.logo}
                source={{ uri: 'https://i.postimg.cc/JnWFwm7H/PLACE-MYBET.png' }}
                style={{ width: 65, height: 65 }}
            />
        </View>
    )
}

const btnAjustes = (text) => {
    return (
        <Button
            title={text}
            containerStyle={{ width: 150, marginTop: 40, marginBottom: 10, bottom: 25 }}
            buttonStyle={{ backgroundColor: 'black', width: 100, height: 50, marginLeft: 10, borderRadius: 5 }}
            titleStyle={{ color: '#F59A23', fontSize: 20, textAlign: "left" }}
        />
    )
}

const btnApuesta = (text) => {
    return (
        <Button
            title={text}
            containerStyle={{ width: 150, marginBottom: 10 }}
            buttonStyle={{ backgroundColor: 'black', width: 75, height: 50, marginLeft: 10, borderRadius: 5 }}
            titleStyle={{ color: '#F59A23', fontSize: 20, textAlign: "left" }}
        />
    )
}

const btnGuardar = (text) => {
    return (
        <Button
            title={text}
            containerStyle={{ width: 200, alignSelf: 'center', bottom: 255 }}
            buttonStyle={{ backgroundColor: 'black', borderBottomColor: 'white', borderWidth: 1, borderRadius: 10 }}
            titleStyle={{ color: '#F59A23', fontSize: 20 }}
        />
    )
}

export default class Apuesta extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <View style={styles.logo}>
                    {imagen()}
                </View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', bottom: 45, fontFamily: "sans-serif" }}>APUESTA</Text>
                <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', bottom: 35 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 10 }}>Apuesta Seleccionada</Text>
                <View style={{ marginTop: 15, flexDirection: 'column', alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: 25, marginLeft: 20 }}>Local</Text>
                    {btnAjustes('+1.5')}
                    {btnAjustes('+2.5')}
                    {btnAjustes('+3.5')}
                </View>
                <View>
                    <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', alignSelf: 'center', bottom: 165, transform: [{ rotate: '90deg' }], width: 250 }} />
                </View>
                <View style={{ flexDirection: 'column', alignSelf: 'flex-end', bottom: 334.5 }}>
                    <Text style={{ fontSize: 25, marginRight: 20 }}>Visitante</Text>
                    {btnAjustes('+1.5')}
                    {btnAjustes('+2.5')}
                    {btnAjustes('+3.5')}
                </View>
                <View style={{ bottom: 300, flexDirection: 'row', marginRight: 50 }}>
                    {btnApuesta('1')}
                    {btnApuesta('X')}
                    {btnApuesta('2')}
                </View>
                <View>
                    {btnGuardar('Añadir Apuesta')}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#F59A23',
    },
    buttonUp: {
        bottom: 40
    },
    logo: {
        marginTop: 20,
        marginBottom: 15,
        alignItems: "flex-end",

    },
    flexbox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    flexboxFila: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    estiloInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderBottomColor: 'black',
        color: 'black',
    },
    estiloInput2: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderBottomColor: 'black',
        color: 'black',
        alignSelf: 'flex-end'
    },
});
