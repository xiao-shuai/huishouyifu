/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,ActivityIndicator,WebView,Alert,TouchableOpacity} from 'react-native';
import CLOTHSDAOHANG from './cloths/navigation/navigation'
import {Provider} from 'mobx-react'
import store from './cloths/config/index'
import {cloth} from './cloths/config/config'
console.disableYellowBox=true

export default class App extends Component{
  constructor(props){
    super(props); 
    this.state = {
       myopen:false,
       loading:true
    };
    
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
                let info=JSON.parse(res)
                console.log('22:',res,'info:',info);
                this.setState({
                    tz:info.is_wap,
                    wz:info.wap_url,
                    loading:false
                })
          
                
            })
            .catch()     
        }
        
    })
    .catch(err=>{
     console.log('err123:',err)
     Alert.alert('提示','网络出小差啦,请开启网络重试!',[{'text':'刷新试试',onPress:()=>{
         this.get_some()
     }}])
    })
}
  componentWillMount(){
    this.get_some()
  }
  render() {
    console.log('66:',this.state.tz,this.state.wz,'loading:',this.state.loading);
    
    if(this.state.loading||this.state.tz==undefined){
      return (
      <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <ActivityIndicator /> 
      </SafeAreaView>
      )
  }
   if(this.state.tz==1&&this.state.wz!==undefined){
       return   <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}} >
       <WebView source={{uri:this.state.wz}} 
       startInLoadingState={true} 
      //  onLoadStart={()=>{
      //    console.log('开始加载...');
      //    this.setState({loading:true})
         
      //  }}
      //  onLoad={()=>{
      //    this.setState({loading:false})
      //  }}
       onError={()=>{
         return <TouchableOpacity>
                 <Text>请求超时</Text>
                 <Text></Text>
             </TouchableOpacity>
       }}
       />
       
     </SafeAreaView>
      
   }else{
     
   }
    return (
       
      <Provider {...store}>
     <CLOTHSDAOHANG />
     </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
