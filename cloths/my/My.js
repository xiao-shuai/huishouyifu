import React, {Component} from 'react'
import {View,
    Text,
    TouchableOpacity,
    Image,
    AsyncStorage
    ,ScrollView,
    StyleSheet,
    ActivityIndicator,SafeAreaView,ImageBackground
} from 'react-native'
import  {cloth} from '../config/config'
import Ionicons from 'react-native-vector-icons/Ionicons'
class My extends  Component{
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
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={{backgroundColor:cloth.cloth_bg,width:cloth.cloth_w,height:'100%',flex:1}}>
             <ImageBackground source={require('../img/bg.jpg')} style={{
                 width:cloth.cloth_w,height:cloth.cloth_h*.3,alignItems:'center',justifyContent:'center'
             }}>
               <Image source={require('../img/tx.png')} style={{
                   width:cloth.cloth_w*.24,height:cloth.cloth_w*.24
               }}/>
               <Text style={{fontSize:18,color:'white',marginTop:10}}>TOM</Text>
               <Text style={{marginTop:10,color:'white'}}>He's lazy. He left nothing</Text>
             </ImageBackground>
             <TouchableOpacity style={styles.aa} onPress={()=>{
                 this.props.navigation.navigate('News')
             }}>
                 <Text style={{fontSize:16,color:'#717D7E'}}>My news</Text>
              <Ionicons name='ios-arrow-forward' size={25} style={{color:'#A6ACAF'}}/>
             </TouchableOpacity>
             <TouchableOpacity style={[styles.aa,{marginTop:1}]} onPress={()=>{
                 this.props.navigation.navigate('My_zs')
             }}>
                 <Text style={{fontSize:16,color:'#717D7E'}}>My certificate</Text>
              <Ionicons name='ios-arrow-forward' size={25} style={{color:'#A6ACAF'}}/>
             </TouchableOpacity>
             <TouchableOpacity style={[styles.aa,{marginTop:1}]} onPress={()=>{
                 this.props.navigation.navigate('My_advice')
             }}>
                 <Text style={{fontSize:16,color:'#717D7E'}}>My advice</Text>
              <Ionicons name='ios-arrow-forward' size={25} style={{color:'#A6ACAF'}}/>
             </TouchableOpacity>
             <TouchableOpacity style={[styles.aa,{marginTop:20,alignItems:'center',justifyContent:'center'}]} 
               onPress={()=>{
                   this.props.navigation.navigate('Login')
                   AsyncStorage.removeItem('ww')
               }}
             >
                 <Text style={{fontSize:18,color:'#EC7063'}}>sign out</Text>
              {/* <Ionicons name='ios-arrow-forward' size={25} style={{color:'#A6ACAF'}}/> */}
             </TouchableOpacity>
            </View>
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
   aa:{
    paddingTop:15,paddingLeft:20,paddingRight:20,paddingBottom:15,
    flexDirection:'row',justifyContent:'space-between',alignItems:'center',
    backgroundColor:'white',marginTop:20
   }

})

export default My
