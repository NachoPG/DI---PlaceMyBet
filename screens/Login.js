import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Image,Button,Divider} from 'react-native-elements';

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
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
  
  const btnLogin = () =>{
    return(
      <Button 
        title="Inciar Sesion"
        containerStyle={{width:200}}
        buttonStyle={{backgroundColor:'black'}}
        titleStyle={{color:'#F59A23',fontSize:20}}
      />
    )
  }

  const loginInput = () =>{
    return(
      <View style={styles.flexboxFila}>
        <Input style={styles.estiloInput}
        leftIcon={{ type: 'material-icons', name: 'mail' }}
        placeholder='Email'
        />
        <Input style={styles.estiloInput}
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        placeholder='Password'
        secureTextEntry={true}
        />
      </View>
    )
  }
  
export default class Login extends Component{
    render(){
        return(
          <ScrollView>
            <View style={{width:Dimensions.get("window").width, height:Dimensions.get("window").height}}>
              <View style={styles.fondo}>
                  {imagen()}
                  {loginInput()}
                  <View style={styles.btnRegistrar}>
                  {btnLogin()}
                  </View>
                  <Divider style={{ backgroundColor: 'black', height:2, justifyContent:'space-around',bottom:80}} />
                  <View style={styles.espaciado}>
                  {btnRegistrar()}
                  </View>
                </View>

            </View>
          </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  estiloInput:{
    backgroundColor:'black',
    borderBottomColor: 'white',
    color:'white',
    // marginTop:0,
    // marginLeft:0,
    // marginRight:0,
    // marginBottom:0,
  
  },
  espaciado:{
    borderColor:'white',
    borderWidth:1,
    borderRadius:5,
    alignSelf:'center',
    bottom:150,
    marginTop:10
  },
  btnRegistrar:{
    borderColor:'white',
    borderWidth:1,
    borderRadius:5,
    alignSelf:'center',
    bottom:20,
  },
  logo:{
    marginTop:20,
    marginBottom:15,
    alignItems:'center',

  },
  fondo:{
    backgroundColor: '#F59A23',
    justifyContent:'space-between',
    flex:1
  },
  flexbox:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  flexboxFila:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
  },
});