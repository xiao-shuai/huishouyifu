import React, {Component} from 'react'
import {View,
    Text,
    TouchableOpacity,
    Image,
    AsyncStorage
    ,ScrollView,
    StyleSheet,
    ActivityIndicator,SafeAreaView
} from 'react-native'

class Record extends  Component{
    static navigationOptions = {
        tabBarLabel: 'Find',
      }
 constructor(props){
    super(props); 
    this.state = {
       
    };
    
 }
   
 componentWillMount(){
  
     
 }

    render(){
        console.log('this.state.data---!',this.state.data)
        return(
            <SafeAreaView>
            
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
   

})

export default Record
