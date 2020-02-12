import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Orders } from './order.component';
import {  TopNavigation } from 'react-native-ui-kitten/ui';
import {View} from "react-native";


export class OrdersContainer extends React.Component<NavigationStackScreenProps> {

//   private data: LayoutsContainerData[] = routes;
  private navigationKey: string = 'LayoutsContainer';

  private onItemSelect = (index: number) => {
    const { [index]: selectedItem } = this.data;

    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: selectedItem.route,
    });
  };

  public render(): React.ReactNode {
    return (
      <View style={{height:"100%"}}>
        <TopNavigation
          title="Home"
          alignment='center'
          style={{height:60}}
          titleStyle={{fontSize:18, fontWeight:"500"}}
        />
        <Orders

          data={this.data}
          onItemSelect={this.onItemSelect}
        />
      </View>
    );
  }
}
