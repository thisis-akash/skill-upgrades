import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import SingleDonationItem from "../screens/SingleDonationItem/SingleDonationItem";
import Payment from "../screens/Payment/Payment";

const Stack = createStackNavigator();

export const NonAuthenticated = () => {

    return (
        <Stack.Navigator initialRouteName={Routes.Login} screenOptions={{ headerShown: false }}>

            <Stack.Screen name={Routes.Registration} component={Registration} />
            <Stack.Screen name={Routes.Login} component={Login} />

        </Stack.Navigator>
    );

}

export const Authenticated = () => {

    return (
        <Stack.Navigator initialRouteName={Routes.Home} screenOptions={{ headerShown: false }}>

            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem} />
            <Stack.Screen name={Routes.Payment} component={Payment} />

        </Stack.Navigator>
    );

};