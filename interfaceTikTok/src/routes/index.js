import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../pages/Home'
import Search from '../pages/Search'
import Inbox from '../pages/Inbox'
import New from '../pages/New'
import Profile from '../pages/Profile'
import ButtonNew from '../components/ButtonNew'

import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
  return(
   <Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle:{ // cor da tabBar
      backgroundColor: "#000",
      borderTopWidth: 0,
    },

    tabBarActiveTintColor:"#FFF" // cor dos icons na tabBar quando clicar neles
   }}>
    <Tab.Screen 
     name="Home"
     component={Home}
     options={{
      tabBarIcon: ({focused, color, size})=>{
        if(focused){
          return <Ionicons name="home" color={color} size={size}/>
        }
        return <Ionicons name="home-outline" color={color} size={size}/>
      }
     }}
    />

    <Tab.Screen 
     name="Search"
     component={Search}
     options={{
      tabBarIcon: ({focused, color, size})=>{
        if(focused){
          return <Ionicons name="search" color={color} size={size}/>
        }
        return <Ionicons name="search-outline" color={color} size={size}/>
      }
     }}

    />

    <Tab.Screen 
     name="New"
     component={New}
     options={{
      tabBarIcon:({size}) => {
        return <ButtonNew size={size}/>
      }
     }}
     
    />


    <Tab.Screen 
     name="Inbox"
     component={Inbox}
     options={{
      tabBarIcon: ({focused, color, size})=>{
        if(focused){
          return <Ionicons name="chatbox-ellipses" color={color} size={size}/>
        }
        return <Ionicons name="chatbox-ellipses-outline" color={color} size={size}/>
      }
     }}
    />

   

    <Tab.Screen 
     name="Profile"
     component={Profile}
     options={{
      tabBarIcon: ({focused, color, size})=>{
        if(focused){
          return <Ionicons name="person" color={color} size={size}/>
        }
        return <Ionicons name="person-outline" color={color} size={size}/>
      }
     }}
    />

  

   </Tab.Navigator>
 )
}
