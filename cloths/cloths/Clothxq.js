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
class Clothxq extends  Component{
    static navigationOptions = {
        title: 'Processing method',
      }
 constructor(props){
    super(props); 
    this.state = {
       
    };
    
 }
   
 componentWillMount(){
  fetch('https://www.fastmock.site/mock/b09f916697520dca17724e87890d8ecb/clothsios/xq')
  .then(res=>res.json()).then(res=>{

  }

  ).catch(err=>{

  })
     
 }

    render(){
        console.log('---!',this.props.navigation.getParam('info'))
        const info=this.props.navigation.getParam('info')
        return(
            
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{backgroundColor:cloth.cloth_bg,width:cloth.cloth_w,height:'100%',flex:1}}>
          
          <ScrollView contentContainerStyle={{width:cloth.cloth_w,alignItems:'center',padding:20}}>
              <Text style={{fontSize:18,fontWeight:'500',color:'#515A5A'}}>Regeneration processing</Text>
              <Text style={{fontSize:16,marginTop:20,color:cloth.cloth_hui,lineHeight:20,letterSpacing:1}}>
              1) The cotton wool, cotton fiber and polyester old clothes which can be used for recycling are crushed, washed and dried, and then processed by physical and chemical methods to be processed into agricultural thermal insulation materials.
              </Text>
               <Image source={info} style={{width:'100%',height:cloth.cloth_h*.25}} resizeMode='contain'/>
               <Text style={{fontSize:16,marginTop:20,color:cloth.cloth_hui,lineHeight:20,letterSpacing:1}}>
               2) For clothing that meets the standards (newer, better quality, clean) will be re-cleaned and donated to the children in need m...
               </Text>
               <Text style={{fontSize:16,marginTop:20,color:cloth.cloth_hui,lineHeight:20,letterSpacing:1}}>
               3) For better clothes, we will also use it for export, and after careful classification, we will export it to companies with legal processing capacity.
               </Text>
          </ScrollView>
         </View>

    </SafeAreaView>
  
        )
    }
}
const styles=StyleSheet.create({
   

})

export default Clothxq
