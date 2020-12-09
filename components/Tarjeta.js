import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Header, Button} from 'react-native-elements';

export class Tarjeta extends Component {
  render() {
    return (
      <>
        <View style={{padding: 10}}>
          <View style={styles.directo}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight:'bold',color:'white'}}>{this.props.eLocal}</Text>
              <Text style={{color:'white'}}>{this.props.rLocal}</Text>
            </View>
            <View style={{alignSelf: 'flex-start'}}>
              <Text style={{color:'white'}}>+Apuestas</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight:'bold', color:'white'}}>{this.props.eVisitant}</Text>
              <Text style={{color:'white'}}>{this.props.rVisitant}</Text>
            </View>
          </View>
          <View style={styles.cabecera}>
            <View>
              <Text>{this.props.cuotaLocal}</Text>
              <Text style={{color: 'green', fontWeight: 'bold'}}>{this.props.dineroLocal}</Text>
            </View>
            <View>
            <Text style={{textAlign:'center', fontWeight:'bold'}}>{this.props.fecha}</Text>
            <Text style={{textAlign:'center', fontWeight:'bold'}}>{this.props.hora}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>{this.props.cuotaVisitante}</Text>
              <Text style={{color: 'green', fontWeight: 'bold'}}>{this.props.dineroVisitante}</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  directo: {
    borderColor:'#000000',
    borderWidth:1,
    marginTop: 20,
    marginLeft: 25,
    backgroundColor: 'black',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  cabecera: {
    borderColor:'#000000',
    borderWidth:1,
    marginLeft: 25,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 75,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});