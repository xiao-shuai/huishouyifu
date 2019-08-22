import React, {Component} from 'react'
import {View,
    Text,
    TouchableOpacity,
    Image,
    AsyncStorage
    ,ScrollView,
    StyleSheet,
    ActivityIndicator,SafeAreaView,ImageBackground,Alert
} from 'react-native'
import  {cloth} from '../config/config'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {inject,observer} from 'mobx-react'

@inject(["qew"])
@observer // 监听当前组件
class My extends  Component{
    static navigationOptions = {
        title: 'My',
      }
 constructor(props){
    super(props); 
    this.state = {
       
    };
    
 }
   
 componentWillMount(){
  
     
 }
 dl_page=()=>{
    Alert.alert('prompt','You are not logged in yet, please login',
    [{'text':'Later'},{'text':'Go to login',onPress:()=>{
       // this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
       this.props.navigation.navigate('Login')
    }}])
} 
    render(){
        const login=this.props.qew.login
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={{backgroundColor:cloth.cloth_bg,width:cloth.cloth_w,height:'100%',flex:1}}>
             <ImageBackground source={require('../img/bg.jpg')} style={{
                 width:cloth.cloth_w,height:cloth.cloth_h*.3,alignItems:'center',justifyContent:'center'
             }}>
               <Image source={require('../img/tx.png')} style={{
                   width:cloth.cloth_w*.24,height:cloth.cloth_w*.24
               }}/>
               {
                 login?
                 <View style={{alignItems:'center'}}>
                 <Text style={{fontSize:18,color:'white',marginTop:10}}>TOM</Text>
                 <Text style={{marginTop:10,color:'white'}}>He's lazy. He left nothing</Text>
                 </View>
                 :
                 <Text style={{marginTop:10,color:'white'}}>You are not logged in</Text>

               }

             </ImageBackground>
             <TouchableOpacity style={styles.aa} onPress={()=>{
                login? this.props.navigation.navigate('News'):this.dl_page()
             }}>
                 <Text style={{fontSize:16,color:'#717D7E'}}>My news</Text>
              <Ionicons name='ios-arrow-forward' size={25} style={{color:'#A6ACAF'}}/>
             </TouchableOpacity>
             <TouchableOpacity style={[styles.aa,{marginTop:1}]} onPress={()=>{
                login? this.props.navigation.navigate('My_zs'):this.dl_page()
             }}>
                 <Text style={{fontSize:16,color:'#717D7E'}}>My certificate</Text>
              <Ionicons name='ios-arrow-forward' size={25} style={{color:'#A6ACAF'}}/>
             </TouchableOpacity>
             <TouchableOpacity style={[styles.aa,{marginTop:1}]} onPress={()=>{
                login? this.props.navigation.navigate('My_advice'):this.dl_page()
             }}>
                 <Text style={{fontSize:16,color:'#717D7E'}}>My advice</Text>
              <Ionicons name='ios-arrow-forward' size={25} style={{color:'#A6ACAF'}}/>
             </TouchableOpacity>
             <TouchableOpacity style={[styles.aa,{marginTop:20,alignItems:'center',justifyContent:'center'}]} 
               onPress={()=>{
                   this.props.navigation.navigate('Login')
                   AsyncStorage.removeItem('ww')
                   this.props.qew.islogin(false)
               }}
             >
                 <Text style={{fontSize:18,color:'#EC7063'}}>{login?'sign out':'Go to login'}</Text>
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
