import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from "@/src/pages/home/index3"
import { Passwords } from "@/src/pages/passwords/index4"

const Tab = createBottomTabNavigator();

export function Routes(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="Passwords" component={Passwords} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}