import {createDrawerNavigator} from "@react-navigation/drawer"
import HomeScreen from "../DemoDrawer/screens/HomeScreen.js"
import CustomDrawerNavigation from "../DemoDrawer/component/CustomDrawerNavigation.js";

const Drawer = createDrawerNavigator()
const MyDrawer = ()=>{
  return(
    <Drawer.Navigator
      drawerContent={(props)=> <CustomDrawerNavigation {...props}/>}
      >
        <Drawer.Screen name="Home" component={HomeScreen}/>
      </Drawer.Navigator>
  )
}

export default MyDrawer
