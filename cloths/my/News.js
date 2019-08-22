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
class News extends  Component{
    static navigationOptions = {
        title: 'News',
      }
 constructor(props){
    super(props); 
    this.state = {
       
    };
    
 }
   
 componentWillMount(){
    fetch('https://www.fastmock.site/mock/b09f916697520dca17724e87890d8ecb/clothsios/zhengshu')
    .then(res=>res.json())
    .then(res=>{})
    .catch()
     
 }

    render(){
        console.log('this.state.data---!',this.state.data)
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={{backgroundColor:cloth.cloth_bg,
                width:cloth.cloth_w,height:'100%',flex:1,
                alignItems:'center'
                }}>
             <Image source={require('../img/nodata.png')} style={{
                 width:cloth.cloth_w*.3,
                 height:cloth.cloth_w*.3,marginTop:100
             }} resizeMode={'contain'}/>
          <Text style={{color:cloth.cloth_hui2}}>Temporarily no data</Text>
            </View>
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
  

})

export default News
