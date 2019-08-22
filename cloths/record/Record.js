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
import  {cloth} from '../config/config'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
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
             this.props.navigation.navigate('OrderPage')
         }}>
             <Text style={{fontSize:18,color:'#E74C3C'}}>Reservation Now</Text>
         </TouchableOpacity>
      </View>
      <View tabLabel='Wait to finish' style={{alignItems:'center'}}>
         <Text style={{marginTop:30,color:cloth.cloth_hui2}}>
         No records yet
         </Text>
         <TouchableOpacity style={{marginTop:20}} onPress={()=>{
             this.props.navigation.navigate('OrderPage')
         }}>
             <Text style={{fontSize:18,color:'#E74C3C'}}>Reservation Now</Text>
         </TouchableOpacity>
      </View>
      <View tabLabel='completed' style={{alignItems:'center'}}>
      <Text style={{marginTop:30,color:cloth.cloth_hui2}}>
         No records yet
         </Text>
         <TouchableOpacity style={{marginTop:20}} onPress={()=>{
             this.props.navigation.navigate('OrderPage')
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
