import React from 'react';
import { Alert } from 'react-native';
import { NavigationParams } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationTabScreenProps } from 'react-navigation-tabs';
// import { EcommerceHeader } from '../components/ecommerce';
// import { MenuContainer } from '@src/containers/menu';
import  MenuContainer  from '../../containers/menuContainer/menu.container';
import { ArrowIosBackFill } from '../../assets/icons';
import { TopNavigationBar } from './components/topNavigationBar.component';
import {
  getCurrentRouteState,
  isRootRoute,
  getCurrentRouteIndex,
  RouteState,
} from './util';
import { KEY_NAVIGATION_BACK } from './constants';

export type TopNavigationElement = React.ReactElement<any>;
export type BottomNavigationElement = React.ReactElement<any>;

export interface TopNavigationParams extends NavigationParams {
  header: (props) => TopNavigationElement | null;
}

export interface BottomNavigationParams extends NavigationParams {
  bottomNavigation: (props: NavigationTabScreenProps) => BottomNavigationElement | null;
}

const MenuTopNavigationParams: TopNavigationParams = {
  header: (props): TopNavigationElement => {
    // @ts-ignore (private API)
    const { routeName } = getCurrentRouteState(props.navigation);
    const index: number = getCurrentRouteIndex(props.navigation);

    return (
      <TopNavigationBar
        {...props}
        title={routeName}
        backIcon={isRootRoute(index) && ArrowIosBackFill}
        onBackPress={() => {
          props.navigation.goBack(KEY_NAVIGATION_BACK);
        }}
      />
    );
  },
};
const MenuBottomNavigationParams: BottomNavigationParams = {
  bottomNavigation: (props: NavigationTabScreenProps): BottomNavigationElement => {
    return (
      <MenuContainer {...props} />
    );
  },
};

export const MenuNavigationOptions: NavigationParams = {
  ...MenuTopNavigationParams,
  ...MenuBottomNavigationParams,
};

export const SocialNavigationOptions: NavigationParams = MenuTopNavigationParams;

export const ArticlesNavigationOptions: NavigationParams = MenuTopNavigationParams;

export const DashboardNavigationOptions: NavigationParams = MenuTopNavigationParams;

export const EcommerceNavigationOptions: NavigationParams = EcommerceMenuTopNavigationParams;
