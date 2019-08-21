import React from 'react';
import { 
  createBottomTabNavigator, 
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator 
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Cloth from '../cloths/Cloth'
import Record from '../record/Record'
import My from '../my/My'
import {cloth} from '../config/config'
const CLOTH=createBottomTabNavigator(
    {
        // CLOTH: CLOTH,
        Cloth:Cloth,
        // Dt:Dt,
        // Find:Find,
        Record:Record,
        My:My
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
           
            let iconName;
            if (routeName === 'Cloth') {
              iconName = 'flower-poppy';
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
            //   IconComponent = HomeIconWithBadge; 
            } else if (routeName === 'Record') {
                 iconName = `flower`;
            } else if (routeName==='Find'){
                iconName=`flower-outline`
            }else if (routeName==`My`){
                iconName=`flower-tulip`
            }
    
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} style={{fontSize:25,color:focused?cloth.cloth_theme:cloth.cloth_hui2}}/>;
          },
        }),
        tabBarOptions: {
          activeTintColor: cloth.cloth_theme,
          inactiveTintColor: cloth.cloth_hui2,
        },
      }
  )
 const CLOTHSDAOHANG=createStackNavigator({
     CLOTH:{
        screen:CLOTH,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
     },
    
   

  
 })   
 export default createAppContainer(CLOTHSDAOHANG)