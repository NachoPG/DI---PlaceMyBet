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
    <View style={styles.flexbox}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://i.postimg.cc/JnWFwm7H/PLACE-MYBET.png', }}
        style={{ width: 250, height: 250, marginTop: 20 }}
      />
    </View>
  )

}

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.fondo}>
        {imagen()}
        <View style={styles.btnRegistrar}>
          {btnLogin()}
          <Divider style={{ backgroundColor: 'black', height:2, justifyContent:'space-around',bottom:125,top:30}} />
          {btnRegistrar()}
        </View>
      </View>
    )
  }
}

const btnRegistrar = () => {
  return (
    <Button
      title="Registrarse"
      containerStyle={{ width: 200, marginTop: 50 }}
      buttonStyle={{ backgroundColor: 'black', width: 200, height: 80 }}
      titleStyle={{ color: '#F59A23', fontSize: 20, textAlign: "center" }}
    />
  )
}

const btnLogin = () => {
  return (
    <Button
      title="Inciar Sesion"
      containerStyle={{ width: 200, marginTop: 70 }}
      buttonStyle={{ backgroundColor: 'black', width: 200, height: 80 }}
      titleStyle={{ color: '#F59A23', fontSize: 20 }}
    />
  )
}

const styles = StyleSheet.create({
  btnRegistrar: {
    borderRadius: 5,
    alignSelf: 'center',
  },
  logo: {
    marginTop: 20,
    marginBottom: 15,
    alignItems: 'center',

  },
  fondo: {
    backgroundColor: '#F59A23',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
    flexDirection: "column"
  },
  flexbox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

});