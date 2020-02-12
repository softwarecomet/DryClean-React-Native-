import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { SignUpFormData } from '../../components/signup';
import { SignUp } from './signup.component';

export class SignUpContainer extends React.Component<NavigationStackScreenProps> {

//   private navigationKey: string = 'SignUp2Container';

  private onSignUpPress = (data: SignUpFormData) => {
    this.props.navigation.goBack();
  };

  private onSignInPress = () => {
      this.props.navigation.navigate("Login");
    // this.props.navigation.navigate({
    // //   key: this.navigationKey,
    //   routeName: 'Sign In 2',
    // });
  };


  private onPhotoPress = () => {

  };

  public render(): React.ReactNode {
    return (
      <SignUp
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onPhotoPress={this.onPhotoPress}
      />
    );
  }
}
