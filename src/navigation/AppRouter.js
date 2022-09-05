import CreateStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import HomePage from "../features/Home/HomePage";
import LoginPage from "../features/Login/LoginPage";
import PinPage from "../features/Pin/PinPage";
import WelcomePage from "../features/Welcome/WelcomePage";
import { ROUTE } from "../shared/hook/constant";
import { Entypo } from '@expo/vector-icons';
import { theme } from "../shared/Theme";
import MainPage from "../features/Home/Main/MainPage";

const Stack = CreateStackNavigator();

const AppRouter = () => {
    return(
        <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
            <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.HOME} component={HomePage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.PIN} component={PinPage} options={{headerTitle:'', headerBackImage: ()=> <Entypo name="back" size={24} color={theme.color.foreground} />}}/>
        </Stack.Navigator>
    )
}

export default AppRouter;