import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Image,Button} from 'react-native-elements';

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';

const imagen=()=>{
    return(
      <View style={styles.flexbox}>
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
      <View style={styles.flexboxFila}>
        <Input style={styles.estiloInput}
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        placeholder='Nombre Completo'
        />
        <Input style={styles.estiloInput}
        leftIcon={{ type: 'font-awesome', name: 'calendar' }}
        placeholder='Fecha de nacimiento'
        />
        <Input style={styles.estiloInput}
        leftIcon={{ type: 'material-icons', name: 'mail' }}
        placeholder='Email'
        />
        <Input style={styles.estiloInput}
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        placeholder='Password'
        secureTextEntry={true}
        />
        <Text style={styles.texto}>Datos Bancarios</Text>
        <Input style={styles.estiloInput}
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        placeholder='Nombre del Titular'
        />
        <Input style={styles.estiloInput}
        leftIcon={{ type: 'font-awesome', name: 'credit-card' }}
        placeholder='Número Tarjeta'
        />
      </View>
    )
  }
  
  const btnRegistrar = () =>{
    return(
      <Button 
        title="Registrarse"
        containerStyle={{width:200}}
        buttonStyle={{backgroundColor:'black'}}
        titleStyle={{color:'#F59A23',fontSize:20}}
      />
    )
  }

export class Registro extends Component{

    render(){
        return(
            <ScrollView>
            <SafeAreaView style={styles.container}>
            <View style={styles.fondo}>
            {imagen()}
            {registro()}
            <View style={styles.btnRegistrar}>
              {btnRegistrar()}
            </View>
            </View>
            </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    btnRegistrar:{
      borderColor:'white',
      borderWidth:1,
      borderRadius:5,
      alignSelf:'center',
    },
    texto:{
      fontFamily:'sans-serif',
      fontWeight:'bold',
      fontSize:20,
      marginLeft:5,
      marginBottom:10,
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
      borderBottomColor: 'white',
      color:'white',
      // marginTop:0,
      // marginLeft:0,
      // marginRight:0,
      // marginBottom:0,
    
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