import React, {Component} from 'react'
import {View,
    Text,
    TouchableOpacity,
    Image,
    AsyncStorage
    ,ScrollView,
    StyleSheet,
    ActivityIndicator,SafeAreaView,Alert
} from 'react-native'
import  {cloth} from '../config/config'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import {inject,observer} from 'mobx-react'

@inject(["qew"])
@observer // 监听当前组件
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
   fetch('https://www.fastmock.site/mock/b09f916697520dca17724e87890d8ecb/clothsios/jilv')
   .then(res=>res.json())
   .then()
   .catch()
     
 }
 dl_page=()=>{
    Alert.alert('prompt','You are not logged in yet, please login',
    [{'text':'Later'},{'text':'Go to login',onPress:()=>{
       // this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
       this.props.navigation.navigate('Login')
    }}])
} 
 componentDidMount(){
    const login=this.props.qew.login
    login?null:this.dl_page()
       
}

    render(){
        const login=this.props.qew.login
        
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={{backgroundColor:cloth.cloth_bg,width:cloth.cloth_w,height:'100%',flex:1}}>
            <View style={{width:'100%',height:cloth.cloth_h*.1,
          backgroundColor:cloth.cloth_theme,alignItems:'center',justifyContent:'center'}}>
         <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>Track record</Text>
          </View>  
          {/*  */}
          <ScrollableTabView
    style={{marginTop: 20, }}
    initialPage={1}
    tabBarActiveTextColor={cloth.cloth_theme}
    tabBarUnderlineStyle={{backgroundColor:cloth.cloth_theme}}
    renderTabBar={() => <DefaultTabBar />}
  >
      <View tabLabel='All the records' style={{alignItems:'center'}}>
         <Text style={{marginTop:30,color:cloth.cloth_hui2}}>
         No records yet
         </Text>
         <TouchableOpacity style={{marginTop:20}} onPress={()=>{
           login?   this.props.navigation.navigate('OrderPage'):this.dl_page()
         }}>
             <Text style={{fontSize:18,color:'#E74C3C'}}>Reservation Now</Text>
         </TouchableOpacity>
      </View>
      <View tabLabel='Wait to finish' style={{alignItems:'center'}}>
         <Text style={{marginTop:30,color:cloth.cloth_hui2}}>
         No records yet
         </Text>
         <TouchableOpacity style={{marginTop:20}} onPress={()=>{
           login?this.props.navigation.navigate('OrderPage'):this.dl_page()
         }}>
             <Text style={{fontSize:18,color:'#E74C3C'}}>Reservation Now</Text>
         </TouchableOpacity>
      </View>
      <View tabLabel='completed' style={{alignItems:'center'}}>
      <Text style={{marginTop:30,color:cloth.cloth_hui2}}>
         No records yet
         </Text>
         <TouchableOpacity style={{marginTop:20}} onPress={()=>{
            login? this.props.navigation.navigate('OrderPage'):this.dl_page()
         }}>
             <Text style={{fontSize:18,color:'#E74C3C'}}>Reservation Now</Text>
         </TouchableOpacity>
      </View>
  </ScrollableTabView>
            </View>
            

            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
   

})

export default Record
