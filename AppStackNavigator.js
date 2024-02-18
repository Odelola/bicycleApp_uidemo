import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { About, Home } from "./screens"

const AppStackNavigator = () => {

    const AppStack = createNativeStackNavigator();

    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="About" component={About} />
            <AppStack.Screen name="Home" component={Home} />
        </AppStack.Navigator>
    )
}

export default AppStackNavigator