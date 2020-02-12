import React from "react";
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { HomePage } from "./home.component";


export class HomeContainer extends React.Component<NavigationStackScreenProps>{

    private navigationKey: string = "SignIn2Container";

    // private onSignInPress = ( data : LoginForm2Data)=>{
    //     var url = "http://192.168.1.111/api/user?email=" + encodeURIComponent(data.email) + "&password="+encodeURIComponent(data.password);
    //     fetch(url,{
    //         method:"GET",
    //         headers:{
    //             Accept:"application/json",
    //             'Content-Type':"application/json"
    //         }
    //     }).then((response)=>{console.warn(response.json())})
    //     .catch((error)=>{
    //         console.error(error);
    //     });
    //     this.props.navigation.navigate("MainScreen");
    // };

    // private onSignUpPress = () => {
    //     // this.props.navigation.navigate({
    //     //     key:this.navigationKey,
    //     //     routeName : "Sign Up 2",
    //     // });
    //     this.props.navigation.navigate("Signup");
    // };

    // private onForgotPasswordPress = () =>{
    //     // this.props.navigation.navigate({
    //     //     key:this.navigationKey,
    //     //     routeName : "Forgot Password",
    //     // });
    //     this.props.navigation.navigate("ForgotPassword");
    // };

    public render():React.ReactNode{
        return (
            <HomePage
                // onSignInPress = {this.onSignInPress }
                // onSignUpPress = { this.onSignUpPress }
                // onForgotPasswordPress = { this.onForgotPasswordPress}  
            />
        );
    }


}   