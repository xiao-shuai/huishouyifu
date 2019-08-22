import React, {Component} from 'react'
import {View,
    Text,
    TouchableOpacity,
    Image,
    AsyncStorage
    ,ScrollView,Alert,
    StyleSheet,
    ActivityIndicator,SafeAreaView,ImageBackground,TextInput
} from 'react-native'
import  {cloth} from '../config/config'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button}  from 'react-native-elements'
class My_advice extends  Component{
    static navigationOptions = {
        title: 'Suggest',
      }
 constructor(props){
    super(props); 
    this.state = {
       
    };
    
 }
   
 componentWillMount(){
  
     
 }
 sug=()=>{
     if(this.state.val==undefined){
         Alert.alert('Please enter feedback...','',
         [{'text':'ok'}])
     }else{
        Alert.alert('Thank you for your feedback, we will verify the processing','',
        [{'text':'ok'}])

        fetch('https://www.fastmock.site/mock/b09f916697520dca17724e87890d8ecb/clothsios/fak').
        then(res=>res.json())
        .then().catch()
     }
 }
    render(){
        console.log('this.state.data---!',this.state.data)
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={{backgroundColor:cloth.cloth_bg,
                width:cloth.cloth_w,height:'100%',flex:1,
                alignItems:'center',padding:20
                }}>

            <View style={{width:'95%',backgroundColor:'white',padding:10}}>
                <TextInput style={{width:'100%',height:cloth.cloth_h*.2}}
                 multiline={true}
                 onChangeText={(val)=>{
                    this.setState({val})
                 }}
                />
            </View>
   
          <Button  title='submit' buttonStyle={{marginTop:20,width:'100%',backgroundColor:cloth.cloth_theme}}
            onPress={()=>{
              this.sug()
            }}
          />
            </View>
            </SafeAreaView>
        )
    }
}
const styles=StyleSheet.create({
  

})

export default My_advice
