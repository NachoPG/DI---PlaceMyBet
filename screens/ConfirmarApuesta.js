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

const CuadroApuesta = () => {
    return (
        <View style={styles.directo}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Local</Text>
                <Text style={{ color: 'white', marginTop: 10 }}>Cuota de Partido</Text>
            </View>
            <View style={{ alignSelf: 'flex-start' }}>
                <Text style={{ color: 'white' }}>+Apuestas</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Visitante</Text>
                <Text style={{ color: 'white' }}>Visitante</Text>
            </View>
        </View>
    )
}

const btnGuardar = (text) => {
    return (
        <Button
            title={text}
            containerStyle={{ width: 200, alignSelf: 'center', top: 70 }}
            buttonStyle={{ backgroundColor: 'black', borderBottomColor: 'white', borderWidth: 1, borderRadius: 10 }}
            titleStyle={{ color: '#F59A23', fontSize: 20 }}
        />
    )
}

export default class ConfirmarApuesta extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.fondo}>
                    <View style={styles.logo}>
                        {imagen()}
                    </View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', bottom: 45, fontFamily: "sans-serif" }}>CONFIRMAR APUESTA</Text>
                    <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', bottom: 35 }} />
                    <Tarjeta eLocal='Local' eVisitant='Visitante' cuotaLocal='1.7' cuotaVisitante='2.8'></Tarjeta>
                    <View style={{ maxWidth: 100, alignSelf: 'flex-end', backgroundColor: 'black', marginRight: 10 }}>
                        <Text style={{ textAlign: 'right', color: 'white', fontSize: 18, marginRight: 10, borderWidth: 1 }}>Introducir Apuesta</Text>
                    </View>
                    <Tarjeta eLocal='Local' eVisitant='Visitante' cuotaLocal='1.7' cuotaVisitante='2.8'></Tarjeta>
                    <View style={{ maxWidth: 100, alignSelf: 'flex-end', backgroundColor: 'black', marginRight: 10 }}>
                        <Text style={{ textAlign: 'right', color: 'white', fontSize: 18, marginRight: 10, borderWidth: 1 }}>Introducir Apuesta</Text>
                    </View>
                    <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', top: 20 }} />
                    <View style={{ flexDirection: 'row', top: 40, alignSelf: 'flex-end' }}>
                        <Text style={{ marginRight: 5, fontSize: 17, fontWeight: 'bold' }}>Total de Apuesta:</Text>
                        <Text style={{ textAlign: 'right', color: 'black', fontSize: 18, marginRight: 10, borderWidth: 1,padding:4 }}>Introducir Apuesta</Text>
                    </View>
                    <View style={{ flexDirection: 'row', top: 40, alignSelf: 'flex-end', marginTop: 10 }}>
                        <Text style={{ marginRight: 5, fontSize: 17, fontWeight: 'bold' }}>Ganancias Potenciales:</Text>
                        <Text style={{ textAlign: 'right', color: 'black', fontSize: 18, marginRight: 10, borderWidth: 1,padding:4 }}>Ganancias Potenciales</Text>
                    </View>
                    {btnGuardar('Confirmar Apuesta')}
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#F59A23',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
    directo: {
        borderColor: '#000000',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 25,
        backgroundColor: 'black',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    cabecera: {
        borderColor: '#000000',
        borderWidth: 1,
        marginLeft: 25,
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 75,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },

});
