import React from 'react';
import { 
  createBottomTabNavigator, 
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator 
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Cloth from '../cloths/Cloth'
import Record from '../record/Record'
import My from '../my/My'
import {cloth} from '../config/config'
import OrderPage from '../cloths/OrderPage'
import Clothxq from '../cloths/Clothxq'
import News from '../my/News'
import My_feed from '../my/My_feed'
import My_zs from '../my/My_zs'
import My_advice from  '../my/My_advice'
import Login from '../log/Login'
import Login2 from '../log/Login2'
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
              iconName = 'skin';
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
            //   IconComponent = HomeIconWithBadge; 
            } else if (routeName === 'Record') {
                 iconName = `book`;
            } else if (routeName==='Find'){
                iconName=`flower-outline`
            }else if (routeName==`My`){
                iconName=`bulb1`
            }
    
            // You can return any component that you like here!
            return <AntDesign name={iconName} style={{fontSize:25,color:focused?cloth.cloth_theme:cloth.cloth_hui2}}/>;
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
    OrderPage:{screen:OrderPage},
    Clothxq:{screen:Clothxq},
    My_feed:{screen:My_feed},
    News:{screen:News},
    My_zs:{screen:My_zs},
    My_advice:{screen:My_advice},
    Login:{screen:Login},
    Login2:{screen:Login2}
   

  
 })   
 export default createAppContainer(CLOTHSDAOHANG)