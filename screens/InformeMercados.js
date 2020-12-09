import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Image, Button, Divider } from 'react-native-elements';

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

const btnGuardar = (text) => {
    return (
        <Button
            title={text}
            containerStyle={{ width: 200, alignSelf: 'center', bottom: 15 }}
            buttonStyle={{ backgroundColor: 'black', borderBottomColor: 'white', borderWidth: 1 }}
            titleStyle={{ color: '#F59A23', fontSize: 20 }}
        />
    )
}

export default class InformeMercados extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <View style={styles.logo}>
                    {imagen()}
                </View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', bottom: 45, fontFamily: "sans-serif" }}>INFORME MERCADOS</Text>
                <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', bottom: 35 }} />
                <View style={{ marginTop: 100 }}>
                    <View>
                        <Input style={styles.estiloInput}
                            placeholder='Tipo Mercado'
                        />
                    </View>
                    {btnGuardar('Filtrar')}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#F59A23',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
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