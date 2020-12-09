import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Image, Button, Divider } from 'react-native-elements';
import Table from '@material-ui/core/Table';

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
            containerStyle={{ width: 200, alignSelf: 'center' }}
            buttonStyle={{ backgroundColor: 'black', borderBottomColor: 'white', borderWidth: 1 }}
            titleStyle={{ color: '#F59A23', fontSize: 20 }}
        />
    )
}

const DisplayAnImage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://i.postimg.cc/qByB3Vjm/Tabla-Historial-Apuestas.png'}}
            />
        </View>
    )
}

export default class HistorialApuestas extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <View style={styles.logo}>
                    {imagen()}
                </View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', bottom: 45 }}>HISTORIAL APUESTAS</Text>
                <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', bottom: 35 }} />
                <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, marginLeft: 10 }}>Fecha Inicio</Text>
                    <Text style={{ fontSize: 20, marginRight: 10, left: 120 }}>Fecha Fin</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Input style={styles.estiloInput}
                        placeholder='Fecha Inicio'
                        containerStyle={{ width: 150 }}
                    />
                    <Input style={styles.estiloInput}
                        placeholder='Fecha Fin'
                        containerStyle={{
                            maxWidth: 150, flex: 2,
                            alignSelf: 'flex-end', left: 70
                        }}
                    />
                </View>
                <View>
                    {btnGuardar('Filtrar')}
                </View>
                <View style={{alignSelf:'center'}}>
                    {DisplayAnImage()}
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
        flex: 1,
    },
    logo: {
        marginTop: 20,
        marginBottom: 15,
        alignItems: "flex-end",

    },
    estiloInput: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderBottomColor: 'black',
        color: 'black',
    },
    container: {
        paddingTop: 50,
        marginLeft:30
    },
    tinyLogo: {
        width: 300,
        height: 300,
        alignSelf:'center',
        alignContent:'center',
    }
});


