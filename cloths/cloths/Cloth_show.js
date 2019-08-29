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

class Cloth_show extends Component{
    static navigationOptions = {
        header: null,
      }
    constructor(props){
     super(props)
     this.state={

     }
    }

    render(){
        console.log('12',this.props.navigation.getParam('info'));
        const info=this.props.navigation.getParam('info')
        return(
            <SafeAreaView style={{flex:1}} >
              <WebView source={{uri:info}} 
              startInLoadingState={true} 
               
              />
              <Text>33</Text>
            </SafeAreaView>
        )
    }
}

export default Cloth_show