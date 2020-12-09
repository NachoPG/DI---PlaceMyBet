import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Image, Button, Divider } from 'react-native-elements';
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
            containerStyle={{ width: 150, marginTop: 30, marginBottom: 10, bottom: 25 }}
            buttonStyle={{ backgroundColor: 'black', width: 100, height: 30, marginLeft: 10, borderRadius: 5 }}
            titleStyle={{ color: 'white', fontSize: 17, textAlign: "left" }}
        />
    )
}

export default class Eventos extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <ScrollView>
                    <View style={styles.logo}>
                        {imagen()}
                    </View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', bottom: 45, fontFamily: "sans-serif" }}>EVENTOS</Text>
                    <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', bottom: 35 }} />
                    <View>
                        {btnAjustes('Categorías')}
                    </View>
                    <View style={{ bottom: 30 }}>
                        <Tarjeta eLocal='Valencia C.F' eVisitant='Real Madrid C.F' cuotaLocal='3.2' cuotaVisitante='1.5' rLocal='0' rVisitant='2' dineroLocal='+3.9' dineroVisitante='+4.2'></Tarjeta>
                        <Tarjeta eLocal='Valencia C.F' eVisitant='Real Madrid C.F' fecha='25/02/2021' hora='21:00' cuotaLocal='3.2' cuotaVisitante='1.5' dineroLocal='+3.9' dineroVisitante='+4.2'></Tarjeta>
                        <Tarjeta eLocal='Valencia C.F' eVisitant='Real Madrid C.F' cuotaLocal='3.2' cuotaVisitante='1.5' rLocal='0' rVisitant='2' dineroLocal='+3.9' dineroVisitante='+4.2'></Tarjeta>
                        <Tarjeta eLocal='Valencia C.F' eVisitant='Real Madrid C.F' cuotaLocal='3.2' cuotaVisitante='1.5' dineroLocal='+3.9' dineroVisitante='+4.2' fecha='22/02/2021' hora='22:00'></Tarjeta>
                        <Tarjeta eLocal='Valencia C.F' eVisitant='Real Madrid C.F' cuotaLocal='3.2' cuotaVisitante='1.5' rLocal='0' rVisitant='2' dineroLocal='+3.9' dineroVisitante='+4.2'></Tarjeta>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#F59A23',
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