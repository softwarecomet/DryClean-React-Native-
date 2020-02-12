import React from "react";
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { LoginForm2Data } from "../../components/login";
import { LoginIn }  from "./login.component";
import { client } from "../../axios/";

interface State {
    loading : boolean
}
export default class LoginContainer extends React.Component<NavigationStackScreenProps>{
    private navigationKey: string = "SignIn2Container";
    public state:State = {
        loading:false
    }
    componentDidMount(){
    }
    private onSignInPress = ( data : LoginForm2Data)=>{
        client.get("/user", {
            params:{
                email : data.email,
                password : data.password
            }
        }).then(response=>{
            this.props.navigation.navigate("MainScreen"); 
        })
        .catch(function(error){
        })
    };

    private onSignUpPress = () => {
        this.props.navigation.navigate("Signup");
    };

    private onForgotPasswordPress = () => {
        this.props.navigation.navigate("ForgotPassword");
    };
    public render():React.ReactNode{
        return (
        <LoginIn
            onSignInPress = {this.onSignInPress }
            onSignUpPress = { this.onSignUpPress }
            onForgotPasswordPress = { this.onForgotPasswordPress}
            loading = {this.state.loading} 
        />
        );
    }
}   
