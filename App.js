/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Image,Button} from 'react-native-elements';

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const nom = () => {
  return (
      <Text>PlaceMyBet</Text>
  )
}

const estil = 'florida';
const aplicarEstilo = (param) =>{
  return(
    param == 'florida'?styles.florida:styles.upv

  )
  
}
const aplicarColorLetra = (param2) =>{
  return(
    param2 == 'florida'?Input.placeholderTextColor=='white':Input.placeholderTextColor=='orange'
  )
  
}

const imagen=()=>{
  return(
    <View>
      <Image
      style={styles.logo}
      source={{uri: 'https://i.postimg.cc/JnWFwm7H/PLACE-MYBET.png',}}
      style={{ width: 200, height: 200 }}
      /> 
  </View>
  )
  
}

const registro = () =>{
  return(
    <View>
      <Input style={styles.estiloinput}
      leftIcon={{ type: 'font-awesome', name: 'user' }}
      placeholder='Nombre Completo'
      />
      <Input style={styles.estiloinput}
      leftIcon={{ type: 'font-awesome', name: 'calendar' }}
      placeholder='Fecha de nacimiento'
      />
      <Input style={styles.estiloinput}
      leftIcon={{ type: 'material-icons', name: 'mail' }}
      placeholder='Email'
      />
      <Input style={styles.estiloinput}
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      placeholder='Password'
      secureTextEntry={true}
      />
      <Text style={styles.texto}>Datos Bancarios</Text>
      <Input style={styles.estiloinput}
      leftIcon={{ type: 'material-icons', name: 'mail' }}
      placeholder='Nombre del Titular'
      />
      <Input style={styles.estiloinput}
      leftIcon={{ type: 'material-icons', name: 'mail' }}
      placeholder='Número Tarjeta'
      />
    </View>
    
  )
}

const btnRegistrar = () =>{
  return(
    <Button style={styles.btnRegistrar}
      title="Registrarse"
    />
  )
}

const Separator = () => (
  <View style={styles.separator} />
);



class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.fondo}>
          <View style={styles.flexbox}>
          {imagen()}
          </View>
          <View style={styles.flexboxFila}>
          {registro()}
          </View>
          <View>
            {btnRegistrar()}
          </View>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  btnRegistrar:{
    borderColor:'white',
    borderBottomWidth : 3,
    width:'10em',
  },
  texto:{
    fontFamily:'sans-serif',
    fontSize:20,
    marginLeft:5,
    marginBottom:10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container:{
    // flex:1,
  },
  flexboxFila:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
  },
  flexbox:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  logo:{
    marginTop:20,
    marginBottom:15,
    alignItems:'center',

  },
  fondo:{
    backgroundColor: '#F59A23',
    justifyContent:'space-between'
  },
  estiloInput:{
    backgroundColor:'black',
    borderBottomWidth : 3,
    borderBottomColor: 'white',
    borderStyle: 'solid',
    color:'white',
    // marginTop:0,
    // marginLeft:0,
    // marginRight:0,
    // marginBottom:0,
    width:500
  
  },
  upv:{
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
    },
    florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
