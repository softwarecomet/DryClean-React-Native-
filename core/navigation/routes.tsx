import React from 'react';
import { useScreens } from 'react-native-screens';
import {
  createAppContainer,
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginContainer from "../../containers/loginContainer/login.container";
import { SignUpContainer } from "../../containers/signUpContainer/signup.container";
import { ForgotPasswordContainer } from "../../containers/forgotPassowordContainer/forgotpassword.container";
import MenuContainer from "../../containers/menuContainer/menu.container";
import { HomeContainer } from "../../containers/menuContainer/HomeContainer/home.container";
import { OrdersContainer } from "../../containers/menuContainer/OrderContainer/order.container";
const AuthNavigationMap: NavigationRouteConfigMap<any, NavigationStackProp> = {
  ['Login ']: LoginContainer,
  ['Signup'] : SignUpContainer
  
  // ['Sign Up 1']: SignUp1Container,
  
  // ['Forgot Password']: ForgotPasswordContainer,
};

const MenuNavigator = createBottomTabNavigator({
  // ['Layouts']: LayoutsNavigator,
  // ['Components']: ComponentsNavigator,
  // ['Themes']: ThemesNavigator,
  // ['Login ']: LoginContainer,
  ['Home'] : HomeContainer,
  ['ForgotPassword'] : OrdersContainer
}, {
  tabBarComponent: MenuContainer,
});
const AppNavigator: NavigationContainer = createStackNavigator({
  Login : {
    screen : LoginContainer
  },
  Signup : {
    screen : SignUpContainer
  },
  ForgotPassword : {
     screen : ForgotPasswordContainer
  },
  MainScreen : MenuNavigator,

}, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    header: null,
  },
});

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
  useScreens();
  return createAppContainer(container);
};


export const Router: NavigationContainer = createAppRouter(AppNavigator);
