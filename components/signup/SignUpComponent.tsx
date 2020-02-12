import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten/theme';
import { CheckBox } from 'react-native-ui-kitten/ui';
import {
  textStyle,
  ValidationInput,
} from '../common';
import {
  EmailIconFill,
  EyeOffIconFill,
  PersonIconFill,
  PhoneIconFill
} from '../../assets/icons';
import {
  EmailValidator,
  NameValidator,
  PasswordValidator,
  PhoneNumberValidator
} from '../../core/validators';
import { SignUpFormData } from './type';


interface ComponentProps {
    /**
     * Will emit changes depending on validation:
     * Will be called with form value if it is valid, otherwise will be called with undefined
     */
    onDataChange: (value: SignUpFormData | undefined) => void;
  }
  
  export type SignUpFormProps = ThemedComponentProps & ViewProps & ComponentProps;
  
  interface State {
    first_name: string | undefined;
    last_name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    mobile_number: string;
  }
  
  class SignUpFormComponent extends React.Component<SignUpFormProps, State> {
  
    public state: State = {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      password: undefined,
      mobile_number: undefined
    };
  
    public componentDidUpdate(prevProps: SignUpFormProps, prevState: State) {
  
      if (!this.props.onDataChange) {
        return;
      }
  
      const oldFormValid: boolean = this.isValid(prevState);
      const newFormValid: boolean = this.isValid(this.state);
  
      const isStateChanged: boolean = this.state !== prevState;
      const becomeValid: boolean = !oldFormValid && newFormValid;
      const becomeInvalid: boolean = oldFormValid && !newFormValid;
      const remainValid: boolean = oldFormValid && newFormValid;
  
      if (becomeValid) {
        this.props.onDataChange(this.state);
      } else if (becomeInvalid) {
        this.props.onDataChange(undefined);
      } else if (isStateChanged && remainValid) {
        this.props.onDataChange(this.state);
      }
    }
  
    // private onTermsValueChange = (termsAccepted: boolean) => {
    //   this.setState({ termsAccepted });
    // };
  
    private onFirstnameInputTextChange = (first_name: string) => {
      this.setState({ first_name });
    };
    private onLastnameInputTextChange = (last_name: string) => {
        this.setState({ last_name });
      };
  
    private onEmailInputTextChange = (email: string) => {
      this.setState({ email });
    };
  
    private onPasswordInputValidationResult = (password: string) => {
      this.setState({ password });
    };
    private onMobileNumberInputChange = (mobile_number : string ) =>{
        this.setState({ mobile_number});
    }
  
    private isValid = (value: SignUpFormData): boolean => {
      const { first_name,last_name,  password, email, mobile_number } = value;
  
      return first_name !== undefined
        && password !== undefined
        && email !== undefined
        && last_name !== undefined
        && mobile_number !== undefined;
    };
  
    public render(): React.ReactNode {
      const { style, themedStyle, ...restProps } = this.props;
  
      return (
        <View
          style={[themedStyle.container, style]}
          {...restProps}>
          <View style={themedStyle.formContainer}>
            <ValidationInput
              style={themedStyle.usernameInput}
              textStyle={textStyle.paragraph}
              autoCapitalize='none'
              placeholder='First Name'
              icon={PersonIconFill}
              validator={NameValidator}
              onChangeText={this.onFirstnameInputTextChange}
            />
            <ValidationInput
              style={themedStyle.usernameInput}
              textStyle={textStyle.paragraph}
              autoCapitalize='none'
              placeholder='Last Name'
              icon={PersonIconFill}
              validator={NameValidator}
              onChangeText={this.onLastnameInputTextChange}
            />
            <ValidationInput
              style={themedStyle.emailInput}
              textStyle={textStyle.paragraph}
              autoCapitalize='none'
              placeholder='Email'
              icon={EmailIconFill}
              validator={EmailValidator}
              onChangeText={this.onEmailInputTextChange}
            />
            <ValidationInput
              style={themedStyle.passwordInput}
              textStyle={textStyle.paragraph}
              autoCapitalize='none'
              placeholder='Mobile Number'
              icon={PhoneIconFill}
              validator={PhoneNumberValidator}
              onChangeText={this.onPasswordInputValidationResult}
            />
            <ValidationInput
              style={themedStyle.usernameInput}
              textStyle={textStyle.paragraph}
              autoCapitalize='none'
              secureTextEntry={true}
              placeholder='Password'
              icon={EyeOffIconFill}
              validator={PasswordValidator}
              onChangeText={this.onMobileNumberInputChange}
            />
            
            {/* <CheckBox
              style={themedStyle.termsCheckBox}
              textStyle={themedStyle.termsCheckBoxText}
              checked={this.state.termsAccepted}
              onChange={this.onTermsValueChange}
              text='I read and agree to Terms & Conditions'
            /> */}
          </View>
        </View>
      );
    }
  }
  
  export const SignUpForm = withStyles(SignUpFormComponent, (theme: ThemeType) => ({
    container: {},
    forgotPasswordContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    usernameInput: {},
    emailInput: {
    //   marginTop: 16,
    },
    passwordInput: {
    //   marginTop: 16,
    },
    termsCheckBox: {
      marginTop: 24,
    },
    termsCheckBoxText: {
      color: theme['text-hint-color'],
      ...textStyle.subtitle,
    },
  }));
  