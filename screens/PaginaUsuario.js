import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input,Image,Button,Header,Divider} from 'react-native-elements';

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Tarjeta} from '../components/Tarjeta';

export default class PaginaUsuario extends Component{
    render(){
        return(
            <View style={styles.backgroudColor}>
                <ScrollView>
                    <Header
                        backgroundColor='#000000'
                        leftComponent={{ icon: 'arrow-left', color: '#F59A23' }}
                        centerComponent={{ text: 'Eventos Principales', style: { color: '#F59A23' } }}
                        rightComponent={{icon:'home', color:'#F59A23'}}></Header>
                    <View style={styles.wallet}>
                        <Icon name='wallet'
                              size={25}
                              style={styles.icon}
                        />
                        <Text style={{fontWeight:'bold', textAlign:'right'}}>Balance: 150€</Text>
                    </View>
                        <View>
                        <Text style={{fontWeight: 'bold', fontSize:20,marginLeft:10,marginTop:10}}>Eventos Destacados</Text>
                        </View>
                    <Tarjeta eLocal='Valencia C.F' eVisitant='Real Madrid C.F' fecha='25/02/2021' hora='21:00' cuotaLocal='3.2' cuotaVisitante='1.5' dineroLocal='+3.9' dineroVisitante='+4.2'></Tarjeta>
                    <Tarjeta eLocal='Barcelona F.C' eVisitant='Madrid C.F' fecha='15/01/2021' hora='21:00' cuotaLocal='3.2' cuotaVisitante='1.5' dineroLocal='+3.9' dineroVisitante='+4.2'></Tarjeta>
                    <Divider style={{ backgroundColor: 'black', height:2, justifyContent:'space-around',marginTop:12 }} />
                        <View>
                        <Text style={{fontWeight: 'bold', fontSize:20,marginLeft:10,marginTop:10}}>Eventos en Directo</Text>
                        </View>
                    <Tarjeta eLocal='Valencia C.F' eVisitant='Real Madrid C.F' cuotaLocal='3.2' cuotaVisitante='1.5' rLocal='0' rVisitant='2' dineroLocal='+3.9' dineroVisitante='+4.2'></Tarjeta>
                    <Tarjeta eLocal='Valencia C.F' eVisitant='Real Madrid C.F' cuotaLocal='3.2' cuotaVisitante='1.5' rLocal='0' rVisitant='2' dineroLocal='+3.9' dineroVisitante='+4.2'></Tarjeta>
                    <Tarjeta eLocal='Valencia C.F' eVisitant='Real Madrid C.F' cuotaLocal='3.2' cuotaVisitante='1.5' rLocal='0' rVisitant='2' dineroLocal='+3.9' dineroVisitante='+4.2'></Tarjeta>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    colorHeader:{
        color:'#000000',
    },
    backgroudColor:{
        backgroundColor:'#F59A23',
    },

    wallet:{
    marginTop: 20,
    marginLeft: 25,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#000000',
    backgroundColor: '#ebdb93',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width:180,
    alignSelf:'center',
    // shadowColor: '#000000',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
    },
    icon:{
        textAlign:'left'
    }

});