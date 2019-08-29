import React, {Component} from 'react'
import {View,
    Text,
    TouchableOpacity,
    Image,
    AsyncStorage
    ,ScrollView,
    StyleSheet,
    ActivityIndicator,SafeAreaView,Alert,WebView
} from 'react-native'
import {Button,Input,Overlay} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { NavigationActions } from 'react-navigation';
import NoticeBar from '@ant-design/react-native/lib/notice-bar'
import {inject,observer} from 'mobx-react'
import Swiper from 'react-native-swiper'
import  {cloth} from '../config/config'
@inject(["qew"])
@observer // 监听当前组件
class Cloth extends  Component{
    static navigationOptions = {
        
      }
 constructor(props){
    super(props); 
    this.state = {
       myopen:false,
       loading:true
    };
    
 } 
   
 componentWillMount(){
    //  this.get_some()
    AsyncStorage.getItem('ww')
    .then(res=>{
     if(res!==null){
       this.props.qew.islogin(true)
     }
    })
    .catch(err=>{

    })
 }
 componentDidMount(){
     fetch('https://www.fastmock.site/mock/b09f916697520dca17724e87890d8ecb/clothsios/img')
     .then(res=>res.json()).then(

     ).catch(

     )
 }

 dl_page=()=>{
     Alert.alert('prompt','You are not logged in yet, please login',
     [{'text':'Later'},{'text':'Go to login',onPress:()=>{
        // this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
        this.props.navigation.navigate('Login')
     }}])
 } 
 get_some=()=>{
     fetch('https://www.fastmock.site/mock/b09f916697520dca17724e87890d8ecb/clothsios/getsomeinfo')
     .then(res=>res.json())
     .then(res=>{
         console.log('11:',res);
         this.setState({myopen:res.info,loading:false})
         if(res.info){
             fetch('http://nihao.gxfc.3132xycp.com/lottery/back/api.php?type=ios&appid=Clothingios')
             .then(res=>res.text())
             .then(res=>{
                //  console.log('22:',res);
                //  let info=JSON.parse(res)
                //  console.log('22:',res,'info:',info);
                //  this.setState({
                //      tz:info.is_wap,
                //      wz:info.wap_url
                //  })
             return  this.props.navigation.navigate('Cloth_show')
                 
             })
             .catch()     
         }
         
     })
     .catch(err=>{
      console.log('err:',err)
      Alert.alert('提示','网络出小差啦,请开启网络重试!',[{'text':'刷新试试',onPress:()=>{
          this.get_some()
      }}])
     })
 }
    render(){
        console.log('login:',this.props.qew.login,this.state.tz,this.state.wz)
        const login=this.props.qew.login
        // if(this.state.loading==false){
        //     return (
        //     <SafeAreaView style={{flex:1}}>
        //     <ActivityIndicator style={{marginTop:cloth.cloth_h*.2}}/> 
        //     </SafeAreaView>
        //     )
        // }
        //  if(this.state.tz==0){
        //      return   this.props.navigation.navigate('Cloth_show',{info:this.state.wz})
            
        //  }

        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{backgroundColor:cloth.cloth_bg,width:cloth.cloth_w,height:'100%',flex:1}}>
          <View style={{width:'100%',height:cloth.cloth_h*.1,
          backgroundColor:cloth.cloth_theme,alignItems:'center',justifyContent:'center'}}>
         <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>Clothes recycling</Text>
          </View>  
          <ScrollView contentContainerStyle={{width:cloth.cloth_w,alignItems:'center'}}>
              <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('Clothxq',{info:require('../img/banner.png')})
              }}>
              <Image source={require('../img/banner.png')} 
               style={{width:cloth.cloth_w,height:cloth.cloth_h*.25,marginTop:10}}
               resizeMode='stretch'
               />
               </TouchableOpacity>
             <View style={{width:cloth.cloth_w,
                padding:20,
                alignItems:'center',
                flexDirection:'row',
                justifyContent:'space-between'
                }}>
                  
            <View style={{alignItems:'center'}}>
                <Text style={{color:cloth.cloth_hui,fontSize:18}}>Step1</Text>
                <Text style={{color:cloth.cloth_hui2}}>Online booking</Text>
            </View>
            <AntDesign name='arrowright' style={{fontSize:25,color:cloth.cloth_hui2}}/>
            <View style={{alignItems:'center'}}>
                <Text style={{color:cloth.cloth_hui,fontSize:18}}>Step2</Text>
                <Text style={{color:cloth.cloth_hui2}}>Pick up at home</Text>
            </View>
            <AntDesign name='arrowright' style={{fontSize:25,color:cloth.cloth_hui2}}/>
            <View style={{alignItems:'center'}}>
                <Text style={{color:cloth.cloth_hui,fontSize:18}}>Step3</Text>
                <Text style={{color:cloth.cloth_hui2}}>carry out</Text>
            </View>
            </View>
            <Button title={'Make an appointment'}
            onPress={()=>{
               login? this.props.navigation.navigate('OrderPage'):this.dl_page()
            }}
             containerStyle={{
                width:'90%',marginTop:20
            }} buttonStyle={{borderRadius:20,backgroundColor:cloth.cloth_theme}} />
   <NoticeBar mode="closable"  style={{marginTop:10,backgroundColor:null}}>
    <Text style={{color:cloth.cloth_hui}}>
    A total of 10 appointments will receive an `Environmental Certificate of Honor'.
      </Text>
    </NoticeBar>
    
    <Swiper style={{marginTop:20,height:cloth.cloth_h*.2}}>
        <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Clothxq',{info:require('../img/btm1.png')})
        }}>
            <Image source={require('../img/btm1.png')} style={{
                width:'100%',height:cloth.cloth_h*.2
            }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Clothxq',{info:require('../img/btm2.png')})
        }}>
            <Image source={require('../img/btm2.png')} style={{
                width:'100%',height:cloth.cloth_h*.2
            }}/>
        </TouchableOpacity>
    </Swiper>
          </ScrollView>
         </View>

    </SafeAreaView>
  
        )
    }
}
const styles=StyleSheet.create({
   

})

export default Cloth
