import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { enableScreens } from 'react-native-screens';
import Screen1 from "./myComponents/Screen1_Task41";
import Screen2 from "./myComponents/Screen2_Task41";
import Screen3 from "./myComponents/Screen3_Task41";
import Screen4 from "./myComponents/Screen4_Task41";


const Tab = createBottomTabNavigator(); 
enableScreens();
function Task41() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="screen1" component={Screen1}/>
                <Tab.Screen name="screen2" component={Screen2}/>
                <Tab.Screen name="screen3" component={Screen3}/>
                <Tab.Screen name="screen4" component={Screen4}/>
            </Tab.Navigator>
        </NavigationContainer>
    ); 
}

export default Task41;