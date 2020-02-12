import React from 'react';
import { ThemedComponentProps, ThemeType, withStyles } from 'react-native-ui-kitten/theme';
import { Button, Text } from "react-native-ui-kitten/ui";
import { SignInForm2, LoginForm2Data } from "../../components/login";
import { ScrollableAvoidKeyboard, textStyle } from  "../../components/common";
import {ActivityIndicator, View, Dimensions } from "react-native";
import { connect, useDispatch } from "react-redux";

interface ComponentProps {
    onSignInPress : (formData : LoginForm2Data) => void;
    onSignUpPress : () => void;
    onForgotPasswordPress : () => void;
    loading : boolean
}

var window = Dimensions.get("window");

export type SignIn2Props = ThemedComponentProps & ComponentProps; 

interface State {
    formData : LoginForm2Data | undefined,
    loading:boolean,

};

class SignInComponent extends React.Component<SignIn2Props>{

    public state:State = {
        formData : undefined,
        loading : false,
    };

    private onSignInButtonPress = () =>{
        this.props.onSignInPress(this.state.formData);
    }

    private onSignUpButtonPress = () =>{
        this.props.onSignUpPress();
    };

    private onForgotPasswordButtonPress = () =>{
        this.props.onForgotPasswordPress();
    }

    private onFormDataChange = ( formData : LoginForm2Data) => {
        this.setState({formData});
    }

    public componentDidMount(){
        this.setState({loading : this.props.loading});
    }
    public render():React.ReactNode{
        const { themedStyle } = this.props;
        return (
            <ScrollableAvoidKeyboard>
                 {this.state.loading?
                     <View style={{...themedStyle.loadingView}}>
                        <ActivityIndicator size="large" color="#ff0000" />
                    </View>:
                    <View></View>
                }      
               
                <View style={ themedStyle.headerContainer}>
                    <Text style={themedStyle.helloLabel} category="h1">
                        Dry Clean
                    </Text>
                    <Text style={themedStyle.signInLabel} category="s1">
                        Sign in to your account
                    </Text>
                </View>
                <SignInForm2 
                    style={themedStyle.formContainer}
                    onForgotPasswordPress = {this.onForgotPasswordButtonPress}
                    onDataChange = {this.onFormDataChange}
                />
                <Button
                    style={themedStyle.signInButton }
                    textStyle={textStyle.button}
                    size ="giant"
                    disabled ={!this.state.formData}
                    onPress={this.onSignInButtonPress}>
                    SIGN IN
                </Button>
                <Button 
                    style={themedStyle.signUpButton}
                    textStyle={themedStyle.signUpText}
                    appearance="ghost"
                    activeOpacity={0.75}
                    onPress={this.onSignUpButtonPress}
                >
                Don't have an account? Create
                </Button>
            </ScrollableAvoidKeyboard>
          );
    }
}

export const LoginIn = withStyles(SignInComponent, (theme:ThemeType ) => {

    return ({
        container:{
            flex:1,
            backgroundColor:theme['background-basic-color-1'],
        },
        headerContainer:{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 216,
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
        loadingView:{
            position: "absolute",
            justifyContent:"center",
            width:"100%",
            height:"100%",
            backgroundColor:"#ffffffbb",
            zIndex:1000,
            display:"none",
            hidden:true
        }
    })
});



// const mapStateToProps = (state, ownProps) => {
//     return {
//        user : state.user,
//        cart : state.cart,
//        loading : state.loading
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         startLogin: () => {
//             return 1;
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginIn);


