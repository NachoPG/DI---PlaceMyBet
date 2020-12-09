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

export default class ConfiguracionUsuario extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.fondo}>
                    <View style={styles.logo}>
                        {imagen()}
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Modificar Perfil</Text>
                        <Input style={styles.estiloInput}
                            placeholder='Email'
                        />
                        <Input style={styles.estiloInput}
                            placeholder='Password'
                            secureTextEntry={true}
                        />
                        {btnGuardar('Guardar')}
                        <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', marginTop: 20 }} />
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Actualizar Tarjeta</Text>
                        <Input style={styles.estiloInput}
                            placeholder='Nombre del Titular'
                        />
                        <Input style={styles.estiloInput}
                            placeholder='Numero Tarjeta'
                        />
                        {btnGuardar('Guardar')}
                        <Divider style={{ backgroundColor: 'black', height: 2, justifyContent: 'space-around', marginTop: 20 }} />
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Ingresar/Retirar dinero</Text>
                        <Input style={styles.estiloInput}
                            placeholder='Nombre del Titular'
                        />
                        <Input style={styles.estiloInput}
                            placeholder='Entidad Bancaria (IBAN)'
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        {btnGuardar('Retirar')}
                        {btnGuardar('Ingresar')}
                    </View>
                </View>
            </ScrollView>
        )
    }
}




const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#F59A23',
        flex: 1,
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