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

export default class HistorialApuestas extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.fondo}>
                    <View style={styles.logo}>
                        {imagen()}
                    </View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', bottom: 45 }}>INFORMES</Text>
                    <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', bottom:35 }} />
                    <View style={{marginTop:75}}>
                        {btnAjustes(text = "INFORME CUOTAS")}
                        {btnAjustes(text = "INFORME FECHAS")}
                        {btnAjustes(text = "INFORME MERCADOS")}
                    </View>
                </View>
            </ScrollView>

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
        backgroundColor: 'black',
        borderWidth: 1,
        borderBottomColor: 'white',
        color: 'black',
    },
});