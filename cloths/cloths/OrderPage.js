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
import {Button,Input,Overlay} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { NavigationActions } from 'react-navigation';
import NoticeBar from '@ant-design/react-native/lib/notice-bar'
import {inject,observer} from 'mobx-react'
import Swiper from 'react-native-swiper'
import  {cloth} from '../config/config'
import DatePicker from 'react-native-datepicker'
class OrderPage extends  Component{
    static navigationOptions = {
        title: 'reservation',
      }
 constructor(props){
    super(props); 
    this.state = {
       
    };
    
 }
   
 componentWillMount(){
  
     
 }
 onChange = (value) => {
    this.setState({ value });
  }
SubMit=()=>{
  if(this.state.name==undefined){
    Alert.alert('Please input Username','',[{'text':'ok'},])
  } else if (this.state.address==undefined){
    Alert.alert('Please input address','',[{'text':'ok'},])
  }else if(this.state.phone==undefined){
    Alert.alert('Please input phone','',[{'text':'ok'},])
  }else {
    Alert.alert('Successful appointment!','',[{'text':'ok'},])
    fetch('https://www.fastmock.site/mock/b09f916697520dca17724e87890d8ecb/clothsios/yuyue',{method:'POST'})
    .then(res=>res.json())
    .then().catch()
  }

}
    render(){
        console.log('this.state.data---!',this.state.data)
        const data=[
            {
                img:require('../img/t1.png'),
                tit:'clothes'
            },
            {
                img:require('../img/t2.png'),
                tit:'backpack'
            },
            {
                img:require('../img/t3.png'),
                tit:'hat'
            },
            {
                img:require('../img/t4.png'),
                tit:'Shoes'
            },
           
        ]
        return(
            
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{backgroundColor:cloth.cloth_bg,width:cloth.cloth_w,height:'100%',flex:1}}>
  
          <ScrollView contentContainerStyle={{width:cloth.cloth_w,alignItems:'center'}}>
           <View style={{width:'100%',padding:20}}>
           <Text style={{fontSize:18,fontWeight:'500'}}>Recycling category</Text>
           </View>
            <View style={{flexDirection:'row',width:cloth.cloth_w,padding:20,justifyContent:'space-between'}}>
                {
                    data.map((i,k)=>{
                        return (
                        <View key={k} style={{alignItems:'center'}}>
                      <Image source={i.img} style={{width:50,height:50}}/>
                      <Text style={{color:cloth.cloth_hui,marginTop:6}}>{i.tit}</Text>
                        </View>)
                    })
                }
            </View>
            <View style={{width:'100%',padding:20}}>
           <Text style={{fontSize:18,fontWeight:'500'}}>Fill in the information</Text>
           </View>
           <View style={{width:'100%',padding:20,backgroundColor:'white'}}>
            <Text style={{fontSize:18,color:cloth.cloth_hui2}}>Appointment</Text>
           <DatePicker
        style={{marginTop:20,width:cloth.cloth_w*.8}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2019-10-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        
        showIcon={false}
        customStyles={{
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
           </View>
           <View style={{width:'100%',padding:20,backgroundColor:'white',marginTop:10}}>
           <Text style={{fontSize:18,color:cloth.cloth_hui2}}>Pickup information</Text>
           <Input label='Name' containerStyle={{marginTop:10}} 
           onChangeText={(name)=>{
              this.setState({name})
           }}/>
           <Input label='address' containerStyle={{marginTop:10}} 
           onChangeText={(address)=>{
              this.setState({address})
           }}/>
           <Input label='phone' containerStyle={{marginTop:10}} 
           onChangeText={(phone)=>{
              this.setState({phone})
           }}/>
           </View>
           <Button title='Fill it out and submit' buttonStyle={{marginTop:20,
            backgroundColor:cloth.cloth_theme,marginBottom:20}} onPress={()=>{
            this.SubMit()
            }} />
          </ScrollView>
         </View>

    </SafeAreaView>
  
        )
    }
}
const styles=StyleSheet.create({
   

})

export default OrderPage
