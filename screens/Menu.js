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

const btnAjustes = (text) => {
    return (
        <Button
            title={text}
            containerStyle={{ width: 375, marginTop: 30, marginBottom: 10 }}
            buttonStyle={{ backgroundColor: 'black', width: 375, height: 50, marginLeft: 10 }}
            titleStyle={{ color: 'white', fontSize: 17, textAlign: "left" }}
        />
    )
}

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.fondo}>
                <View style={styles.logo}>
                    {imagen()}
                </View>
                {btnAjustes(text = "Ajustes de Usuario")}
                <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', marginTop: 20 }} />
                {btnAjustes(text = "Historial de Apuestas")}
                <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', marginTop: 20 }} />
                {btnAjustes(text = "Informes")}
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
});