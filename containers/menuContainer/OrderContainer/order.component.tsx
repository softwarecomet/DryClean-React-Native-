import React, { useState } from 'react';
import { withStyles,ThemeType,ThemedComponentProps } from 'react-native-ui-kitten/theme';
// import { LayoutsList } from '../../../components/menu';
// import { LayoutsData } from './type';
import { View , ScrollView, Image } from "react-native";
import { Layout, Tab, TabView, Text, Button} from  "react-native-ui-kitten/ui";
import { dryIcon, clearIronIcon, ironIcon } from "../../../assets/images";
import { RightIcon } from "../../../assets/icons";
import {
  Icon,
  IconElement,
} from 'react-native-ui-kitten/ui';
interface ComponentProps {
  // data: LayoutsData[];
//   data:string;
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

interface State {
  selectedIndex:number,
  products:ObjectArray,
  loading : boolean,
}

class OrdersComponent extends React.Component<Props> {

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };
  
  public state:State = {
    selectedIndex: 0,
    products: [],
    loading: true
  }

  async componentDidMount(){
    try{
      const getproductscall = await fetch('http://192.168.1.111/api/product/',{method:"GET"});
      const products = await getproductscall.json();
      this.setState({
        products:products.products,
        loading:false
      });
    }catch(err){
      console.warn("Error:", err);
    }
  }
  public setSelectedIndex = (index:number)=>{
    this.setState({selectedIndex:index});
  }
  public renderItemHeader(category:string):React.ReactNode {
    const { themedStyle } = this.props;
    return (
      <View style={themedStyle.itemHeaderRow}>
        <View style={{...themedStyle.itemContentFirst,paddingTop:10}}><Text style={{fontWeight:"700"}}>{category}</Text></View>
        <View style={{...themedStyle.itemContent,...themedStyle.alignItemCenter}}><Image source={dryIcon.imageSource} style={themedStyle.topImage}/></View>
        <View style={{...themedStyle.itemContent,...themedStyle.alignItemCenter}}><Image source={clearIronIcon.imageSource} style={themedStyle.topImage}/></View>
        <View style={{...themedStyle.itemContent,...themedStyle.alignItemCenter}}><Image source={ironIcon.imageSource} style={themedStyle.topImage}/></View>
        <View style={{...themedStyle.itemContentLast}}></View>
      </View>
    )
  }
  public renderItem(product):React.ReactNode {
    // if(product)
    const { themedStyle } = this.props;
    // product = JSON.parse(product);
    return (
      <View style={themedStyle.itemContainer} key={product.id}>
        <View style={themedStyle.itemContentFirst}><Text>{product.product_name}</Text></View>
        <View style={themedStyle.itemContent}><Text style={themedStyle.textAlignCenter}>{product.dry_clean}</Text></View>
        <View style={themedStyle.itemContent}><Text style={themedStyle.textAlignCenter}>{product.clean_iron}</Text></View>
        <View style={themedStyle.itemContent}><Text style={themedStyle.textAlignCenter}>{product.iron}</Text></View>
        <View style={themedStyle.itemContentLast}></View>
      </View>
    )
  }
  public render(): React.ReactNode {
    const { themedStyle } = this.props;
   return (
    <TabView
      selectedIndex={this.state.selectedIndex}
      onSelect={this.setSelectedIndex}
      style={themedStyle.container}
    >
      <Tab title="Traditional">
        <ScrollView style={themedStyle.contentContainer}>
          { this.renderItemHeader("Traditional") }
          <View style={{marginTop:20}}></View>
          {this.state.products.map(product=>{
            if(product.category == 1){
              return this.renderItem(product); 
            }
          })}
          {/* <Button style={themedStyle.proceedButton }>Proceed to Checkout</Button> */}
        </ScrollView>
      </Tab>
      <Tab title="Tops">
         <ScrollView style={themedStyle.contentContainer}>
          { this.renderItemHeader("Top") }
          <View style={{marginTop:20}}></View>
          {this.state.products.map(product=>{
            if(product.category == 2){
              return this.renderItem(product); 
            }
          })}
          {/* <Button style={themedStyle.proceedButton }>Proceed to Checkout</Button> */}
        </ScrollView>
      </Tab>
      <Tab title="Bottoms">
        <ScrollView style={themedStyle.contentContainer}>
          { this.renderItemHeader("Bottoms") }
          <View style={{marginTop:20}}></View>
          {this.state.products.map(product=>{
            if(product.category == 3){
              return this.renderItem(product); 
            }
          })}
          {/* <Button style={themedStyle.proceedButton }>Proceed to Checkout</Button> */}
        </ScrollView>
      </Tab>
      <Tab title="Suits">
        <ScrollView style={themedStyle.contentContainer}>
          { this.renderItemHeader("Suits") }
          <View style={{marginTop:20}}></View>
          {this.state.products.map(product=>{
            if(product.category == 4){
              return this.renderItem(product); 
            }
          })}
          {/* <Button style={themedStyle.proceedButton }>Proceed to Checkout</Button> */}
        </ScrollView>
      </Tab>
      <Tab title="Dresses">
        <ScrollView style={themedStyle.contentContainer}>
          { this.renderItemHeader("Dresses") }
          <View style={{marginTop:20}}></View>
          {this.state.products.map(product=>{
            if(product.category == 5){
              return this.renderItem(product); 
            }
          })}
          {/* <Button style={themedStyle.proceedButton }>Proceed to Checkout</Button> */}
        </ScrollView>
      </Tab>
    </TabView>
   )
  }
}

export const Orders = withStyles(OrdersComponent, (theme: ThemeType) => ({
  container: {
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 200,
    height:"100%",
  },
  item: {
    flex: 1,
    height: 160,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  topImage:{
    width:50,
    height:50
  },
  itemContainer:{
    paddingVertical:5, 
    flex:1, 
    alignSelf:'stretch', 
    flexDirection:"row", 
    borderBottomColor:"#eeeeee", 
    borderBottomWidth:3
  },
  itemHeaderRow:{
    flex:1, 
    alignSelf:'stretch', 
    flexDirection:"row", 
  },
  itemContentFirst:{
    flex:2, 
    alignSelf:"stretch"
  },
  itemContent:{
    flex:1,
    alignSelf:"stretch"
  },
  itemContentLast:{
    flex:.1,
    alignSelf:"stretch"
  },
  alignItemCenter:{
    alignItems: 'center',
  },
  textAlignCenter:{
    textAlign:"center"
  }
}));
