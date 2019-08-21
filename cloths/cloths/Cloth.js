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
import {Button,Input,Overlay} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { NavigationActions } from 'react-navigation';
import NoticeBar from '@ant-design/react-native/lib/notice-bar'
import {inject,observer} from 'mobx-react'
import Swiper from 'react-native-swiper'
import  {cloth} from '../config/config'
// @inject(["mbx"])
// @observer // 监听当前组件
class Cloth extends  Component{
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
          <View style={{width:'100%',height:cloth.cloth_h*.1,
          backgroundColor:cloth.cloth_theme,alignItems:'center',justifyContent:'center'}}>
         <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>Clothes recycling</Text>
          </View>  
          <ScrollView contentContainerStyle={{width:cloth.cloth_w,alignItems:'center'}}>
              <Image source={require('../img/banner.png')} 
               style={{width:cloth.cloth_w,height:cloth.cloth_h*.25,marginTop:10}}
               resizeMode='stretch'
               />
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
            <Button title={'Make an appointment'} containerStyle={{
                width:'90%',marginTop:20
            }} buttonStyle={{borderRadius:20,backgroundColor:cloth.cloth_theme}} />
   <NoticeBar mode="closable"  style={{marginTop:10,backgroundColor:null}}>
    <Text style={{color:cloth.cloth_hui}}>
      Notice: The arrival time of incomes and transfers of Yu 'E Bao will be
      delayed during National Day.
      </Text>
    </NoticeBar>
    
    <Swiper style={{marginTop:20,height:cloth.cloth_h*.2}}>
        <TouchableOpacity>
            <Image source={require('../img/btm1.png')} style={{
                width:'100%',height:cloth.cloth_h*.2
            }}/>
        </TouchableOpacity>
        <TouchableOpacity>
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
