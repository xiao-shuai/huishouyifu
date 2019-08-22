import React, {Component} from 'react'
import {View,
    Text,
    TouchableOpacity,
    Image,
    AsyncStorage
    ,ScrollView,Alert,
    StyleSheet,
    ActivityIndicator,SafeAreaView,ImageBackground
} from 'react-native'
import  {cloth} from '../config/config'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Input,Button} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
class Login2 extends  Component{
    static navigationOptions = {
        title: 'Register an account',
      }
 constructor(props){
    super(props); 
    this.state = {
       
    };
    
 }
   
 componentWillMount(){
  
     
 }
REG=()=>{
    if(this.state.name==undefined){
        Alert.alert('Please input Username','',[{'text':'ok'},])
    }else if(this.state.pw==undefined){
        Alert.alert('Please input password','',[{'text':'ok'},])
    }else if(this.state.pw!==this.state.pw2){
        Alert.alert('Different passwords ！','',[{'text':'ok'},])
    } else{
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'CLOTH' })], 0)
        AsyncStorage.setItem('ww','ok')
        
        fetch('https://www.fastmock.site/mock/b09f916697520dca17724e87890d8ecb/clothsios/DegLU',{method:'POST'}).then(res=>res.json()).then().catch()
    }
}
    render(){
        console.log('this.state.data---!',this.state.data)
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={{backgroundColor:cloth.cloth_bg,
                width:cloth.cloth_w,height:'100%',flex:1,
                alignItems:'center'
                }}>
                 <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>
               <Image source={require('../img/logo.png')} style={{
                   width:cloth.cloth_w*.3,height:cloth.cloth_w*.3,
                   borderRadius:cloth.cloth_w*.15,marginTop:cloth.cloth_h*.06
                   
               }}/>
               <Input placeholder='Please input Username' 
                containerStyle={{width:cloth.cloth_w*.9,marginTop:20}}
                onChangeText={(name)=>{
                    this.setState({name})
                }}
               />
               <Input placeholder='Please enter your password' 
               onChangeText={(pw)=>{
                  this.setState({pw})
               }}
               secureTextEntry={true}
                containerStyle={{width:cloth.cloth_w*.9,marginTop:20}}
               />
               <Input placeholder='confirm password'
               onChangeText={(pw2)=>{
                   this.setState({pw2})
               }} 
               secureTextEntry={true}
                containerStyle={{width:cloth.cloth_w*.9,marginTop:20}}
               />
              
               <Button title='registered' buttonStyle={{width:cloth.cloth_w*.9,marginTop:20,backgroundColor:cloth.cloth_theme}} 
                onPress={()=>{
                   this.REG()
                }}
               />

               
               </KeyboardAwareScrollView>
            </View>
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
  

})

export default Login2
