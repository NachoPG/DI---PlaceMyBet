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

const DisplayAnImage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://i.postimg.cc/MKGZHsrH/Tabla-cuota.png'}}
            />
        </View>
    )
}

export default class Cuota extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <View style={styles.logo}>
                    {imagen()}
                </View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', bottom: 45 }}>INFORME CUOTA</Text>
                <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', bottom: 35 }} />
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