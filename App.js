import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { firebaseApp } from './components/firebase';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.getDb = firebaseApp.database().ref('HeartBeat/Hb').on("value", function(snapshot) {
      document.getElementById('HbVal').innerHTML = snapshot.val() //This function cause bug in real devices
     }, function (error) {
      console.log("Error: " + error.code);
     });
  }
  render() {
    return (

      <View style={styles.main}>
      <View style = {styles.container}>
        <View style = {styles.row1}>
            <View style ={styles.NowHeartBeat} >
              <Text style = {styles.fontStyle}> Nhịp tim hiện tại</Text>
              <Text nativeID='HbVal' style = {{color: 'orange', fontSize: 90, textAlign: 'center'}}>80</Text>
            </View>
            <View style={{flex: 0.1,}}></View>
            <View style ={styles.SetHeartBeat} >
              <Text style = {styles.fontStyle} >Báo thức khi</Text>
              <Text style = {{color: 'orange', fontSize: 90, textAlign: 'center'}}>72</Text>
            </View>
        </View>
        <View style = {styles.row2}>
            <View style={styles.Counter}>
              <Text style = {styles.fontStyle} >Thời gian</Text>
            </View>
            <View style={styles.Start}>
              <AntDesign style = {{fontSize: 80,}} name="playcircleo" size={24} color="orange" />
            </View>
        </View>
        <View style = {styles.row3}>
          <View style = {styles.settingZone}>
            <Text style = {{textAlign: 'center', fontSize: 20, fontWeight: 'bold',}}>Cài đặt</Text>
            <Text> </Text>
            <Text style = {{ fontSize: 18, fontWeight: '200',}}>Lặp lại hằng ngày
            </Text>
            <Text> </Text>
            <Text style = {{ fontSize: 18, fontWeight: '200',}}>Chuông báo thức
            </Text>
            <Text> </Text>
            <Text style = {{ fontSize: 18, fontWeight: '200',}}>Âm lượng báo thức
            </Text>
            <Text> </Text>
            <Text style = {{ fontSize: 18, fontWeight: '200',}}>Rung
            </Text>
            <Text> </Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>

    );
}
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    marginTop: 80,
    height:'80%',
    width: '100%',
  }, 
  container: {
    padding: 4,
    flexDirection: 'column',
    justifyContent:'space-around',
    width: '100%',
    height: 700,
  },
  row1: {
    flex:0.8,
    flexDirection: 'row',
  },
  row2: {
    marginTop: 10,
    flex:0.75,
    flexDirection: 'row',
  },
  row3: {
    flex:1,
    paddingTop: 10,
  },
  NowHeartBeat: {
    flex:1,
    padding: 10,
    fontFamily: 'Nunito',
    borderRadius:10,
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 10,
    backgroundColor : '#fff9c4',
  },
  SetHeartBeat: {
    flex:1,
    padding: 10,
    borderRadius:10,
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 10,
    backgroundColor : '#fff9c4',
  },
  Counter: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    borderRadius:10,
    shadowColor: 'black',
    elevation: 10,
    backgroundColor : '#a3e9a4'
  },
  Start: {
    flex: 0.5,
    padding: 8,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingZone: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
    backgroundColor : '#80d8ff'
  }
});
