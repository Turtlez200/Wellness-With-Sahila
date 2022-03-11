import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, StatusBar, Dimensions, Linking } from 'react-native';
import React from "react"
import { Link } from '@react-navigation/native';

const width_proportion = Dimensions.get('window').width
export default function Books({navigation}) {

    let containerStyle = function(options) {
        return {
          flex: 1,
          backgroundColor: '#fff',
          flexDirection: 'column',
          marginTop: StatusBar.currentHeight
        }
    }

    return (
        <View style={containerStyle()}>
              <View style = {styles.banner}> 
                  <TouchableOpacity onPress={() => {navigation.navigate('Videos')}}><Text style = {styles.button}>Videos</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => {navigation.navigate('Podcasts')}}><Text style={styles.button}>Podcasts</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => {navigation.navigate('Books')}}><Text style={styles.button}>Books</Text></TouchableOpacity>        
              </View>
              <View style={styles.content}>
                <ScrollView>
                  <View>
                      <View style={styles.book1View}>
                            <Image source={require('../assets/Amazon_Cover_jpg.jpg')} style={styles.coverImage}/>
                            <View style={styles.descView}>
                              <View style={styles.descTextView}>
                                <Text>This is one of the first books written on yoga chakras by a
                                doctor trained in USA. The goal is to 
                                explain the mind body relationships in the causation
                                  of illnesses starting from Covid to Cancer . </Text>
                              </View>
                              <TouchableOpacity onPress={() => {
                                Linking.openURL("https://www.amazon.com/CHAKRA-HANDBOOK-doctors-contemporary-healing-ebook/dp/B09PLHC6WD/ref=sr_1_4?crid=25QWYFX1DLBNK&keywords=chakra+handbook&qid=1641691250&sprefix=chakra+handbook%2Caps%2C73&sr=8-4")
                              }}>
                                <View style={styles.button2}>
                                  <Text>Buy Now</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                      </View>
                  </View>
                </ScrollView>
              </View>
              <View style = {styles.bottom}>
                  <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Home')}}><Text style = {styles.label}>Wellness With Sahila</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('Login')}}><Text style = {{marginLeft: 10}}>Logout</Text></TouchableOpacity>
                  </View>
                  <Image source = {require("../assets/logo.png")} style = {styles.pic}/>
              </View>
          </View>
    )
}

const styles = StyleSheet.create({
    book1View: {
      flexDirection: 'row',
      flex: 1,
      width: width_proportion* 0.85,
      height: 285,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'tomato',
      borderRadius: 4
    },

    button2: {
      backgroundColor: 'orange',
      marginTop: 10,
      padding: 10,
      borderRadius: 10
    },

    descView: {
      flex: 0.55,
      margin: 10,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    descTextView: {
      backgroundColor: 'white',
      borderRadius: 4,
      padding: 10
    },
    coverImage: {
      flex: 0.45,
      width: (width_proportion * 0.9) * 0.45,
      height: 270,
      borderRadius: 4,
      padding: 5,
      marginLeft: 10
    },  
    banner: {
      flex: 0.1,
      backgroundColor: '#E94747',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    button: {
      fontSize: 25,
      fontFamily: 'normal'
    },
    label: {
      fontSize: 20,
      marginLeft: 10
    },
    bottom: {
      flex: 0.1,
      backgroundColor: '#E94747',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    content: {
      padding: 25,
      flex: 0.8,
      backgroundColor: 'white',
      alignItems: 'center'
  
    },
    pic: {
      width: 100,
      height: 100
    },
  });
  