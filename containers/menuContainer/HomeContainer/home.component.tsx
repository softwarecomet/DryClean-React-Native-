import React from 'react';
import { ThemedComponentProps, ThemeType, withStyles } from 'react-native-ui-kitten/theme';
import { Button, Text, Drawer } from "react-native-ui-kitten/ui";
import { ScrollableAvoidKeyboard, textStyle } from  "../../../components/common";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { HeartIconFill, PhoneIconFill, QuestionCircleMark, RightIcon } from "../../../assets/icons";
import { logoImage } from "../../../assets/images";
interface ComponentProps {
    // onSignInPress : (formData : LoginForm2Data) => void;
    // onSignUpPress : () => void;
    // onForgotPasswordPress : () => void;
}


export type HomeProps = ThemedComponentProps & ComponentProps; 

interface State {
    // formData : LoginForm2Data | undefined
    formData:undefined
};

class HomeComponent extends React.Component<HomeProps>{

    public state:State = {
        formData : undefined
    };
    public homeData = [
      {
        title : "About Us",
        icon : HeartIconFill,
        accessory : RightIcon
      },
      {
        title: "Contact Us",
        icon : PhoneIconFill,
        accessory : RightIcon

      },
      {
        title : "FAQ",
        icon :QuestionCircleMark,
        accessory : RightIcon
      }
    ];
    public onSelect=(index:any)=>{
      console.warn(index);
    }
    public render():React.ReactNode{
        const { themedStyle } = this.props;
        return (
            <ScrollableAvoidKeyboard>
                <View style={ themedStyle.headerContainer}>
                    <Text style={themedStyle.helloLabel} category="h1">
                        DRY CLEAN DREAM
                    </Text>
                </View>
                <SafeAreaView>
                  <Drawer data={this.homeData} onSelect={this.onSelect} />
                </SafeAreaView>
                <View>
                  {/* <Image> */}
                  <Image style={themedStyle.logoImage} source={require("../../../assets/images/source/logo.png")}/>

                </View>
            </ScrollableAvoidKeyboard>
          );
    }
}

export const HomePage = withStyles(HomeComponent, (theme:ThemeType ) => {

    return ({
        container:{
            flex:1,
            backgroundColor:theme['background-basic-color-1'],
        },
        headerContainer:{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 180,
            backgroundColor:theme['color-primary-default']
        },
        formContainer:{
            flex:1,
            marginTop:32,
            paddingHorizontal : 16
        },

        helloLabel:{
            color : 'white',
            ...textStyle.headline,
        },
        signInLabel: {
            marginTop: 16,
            color: 'white',
            ...textStyle.subtitle,
        },
        signInButton: {
            marginHorizontal: 16,
        },
        signUpButton: {
            marginVertical: 12,
        },
        signUpText: {
            color: theme['text-hint-color'],
            ...textStyle.subtitle,
        },
        logoImage:{
          position:"absolute", 
          width:250, 
          height:100, 
          left:40,
          textAlign:"center", 
          paddingVertical:100,
          opacity:0.5
        }
    })
})

