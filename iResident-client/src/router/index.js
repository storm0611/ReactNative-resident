import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./routes";
import IntroScreen from "../screens/auth/intro";
import SplashScreen from "../screens/auth/splash";
import LoginRegisterScreen from "../screens/auth/loginregister";
import OtpVerifyScreen from "../screens/auth/otpverify";
import DashboardScreen from "../screens/dashboard";
import MyGuestsScreen from "../screens/myguests";
import AddGuestScreen from "../screens/myguests/addguest";
import ProfileScreen from "../screens/dashboard/profile";
import GuestAccessScreen from "../screens/dashboard/guestaccess";
import CheckCodeScreen from "../screens/dashboard/checkcode";
import GuestCodeScreen from "../screens/myguests/guestcode";
import DashboardGuideScreen from "../screens/dashboard/dashboardguide";

import ProofScreen from "../screens/send";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={Routes.Proof}
          component={ProofScreen}
        />
        {/* <Stack.Screen name={Routes.Splash} component={SplashScreen} /> */}
        {/* <Stack.Screen name={Routes.Intro} component={IntroScreen} />
        <Stack.Screen
          name={Routes.LoginRegister}
          component={LoginRegisterScreen}
        />
        <Stack.Screen name={Routes.OtpVerify} component={OtpVerifyScreen} />
        <Stack.Screen name={Routes.Dashboard} component={DashboardScreen} />
        <Stack.Screen name={Routes.MyGuests} component={MyGuestsScreen} />
        <Stack.Screen name={Routes.AddGuest} component={AddGuestScreen} />
        <Stack.Screen name={Routes.Profile} component={ProfileScreen} />
        <Stack.Screen name={Routes.GuestAccess} component={GuestAccessScreen} />
        <Stack.Screen name={Routes.CheckCode} component={CheckCodeScreen} />
        <Stack.Screen name={Routes.GuestCode} component={GuestCodeScreen} />
        <Stack.Screen
          name={Routes.DashboardGuide}
          component={DashboardGuideScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
