import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Router() {
return (
<Tab.Navigator
screenOptions={({ route }) => ({
tabBarIcon: ({ color,size }) => {

let iconName;

if(route.name==="Home"){
iconName="home";
}
else if(route.name==="Category"){
iconName="grid";
}
else if(route.name==="Detail"){
iconName="barbell";
}
else if(route.name==="Profile"){
iconName="person";
}

return(
<Ionicons
name={iconName}
size={size}
color={color}
/>
);
},
tabBarActiveTintColor:"#4CAF50",
tabBarInactiveTintColor:"gray"
})}
>

<Tab.Screen
name="Home"
component={HomeScreen}
/>

<Tab.Screen
name="Category"
component={CategoryScreen}
/>

<Tab.Screen
name="Detail"
component={DetailScreen}
/>

<Tab.Screen
name="Profile"
component={ProfileScreen}
/>

</Tab.Navigator>
);
}