import React from 'react';
import {
  ButtonProps,
  ImageProps,
  View,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten/theme';
import { Button } from 'react-native-ui-kitten/ui';
import {
  SignUpForm,
  SignUpFormData,
} from '../../components/signup';
import { ProfilePhoto } from '../../components/social';
import {
  ScrollableAvoidKeyboard,
  textStyle,
} from '../../components/common';
import { PlusIconFill } from '../../assets/icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface ComponentProps {
  onSignUpPress: (formData: SignUpFormData) => void;
  onSignInPress: () => void;
  onPhotoPress: () => void;
}

export type SignUpProps = ThemedComponentProps & ComponentProps;

interface State {
  formData: SignUpFormData;
}

class SignUpComponent extends React.Component<SignUpProps, State> {

  public state: State = {
    formData: undefined,
  };

  private onFormDataChange = (formData: SignUpFormData) => {
    this.setState({ formData });
  };

  private onPhotoButtonPress = () => {
    this.props.onPhotoPress();
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress();
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress(this.state.formData);
  };

  private renderPhotoButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return PlusIconFill({ ...style, ...themedStyle.photoButtonIcon });
  };

  private renderPhotoButton = (): React.ReactElement<ButtonProps> => {
    const { themedStyle } = this.props;

    return (
      <Button
        style={themedStyle.photoButton}
        activeOpacity={0.95}
        icon={this.renderPhotoButtonIcon}
        onPress={this.onPhotoButtonPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ScrollableAvoidKeyboard style={themedStyle.container}>
        <View style={themedStyle.headerContainer}>
          <ProfilePhoto
            style={themedStyle.photo}
            resizeMode='center'
            source={require('../../assets/icons/icon-person.png')}
            button={this.renderPhotoButton}
          />
        </View>
        <SignUpForm
          style={themedStyle.formContainer}
          onDataChange={this.onFormDataChange}
        />
        <Button
          style={themedStyle.signUpButton}
          textStyle={textStyle.button}
          size='giant'
          disabled={!this.state.formData}
          onPress={this.onSignUpButtonPress}>
          SIGN UP
        </Button>
        <Button
          style={themedStyle.signInButton}
          textStyle={themedStyle.signInText}
          appearance='ghost'
          activeOpacity={0.75}
          onPress={this.onSignInButtonPress}>
          Already have an account? Sign In
        </Button>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignUp = withStyles(SignUpComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: ['background-basic-color-1'],
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: theme['color-primary-default'],
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  photo: {
    width: 116,
    height: 116,
    borderRadius: 58,
    alignSelf: 'center',
    backgroundColor: theme['background-basic-color-1'],
    tintColor: theme['color-primary-default'],
  },
  photoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    transform: [{ translateY: 80 }],
    borderColor: theme['border-basic-color-2'],
    backgroundColor: theme['background-basic-color-2'],
  },
  photoButtonIcon: {
    width: 24,
    height: 24,
    tintColor: theme['color-primary-default'],
  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
  },
  signInText: {
    color: theme['text-hint-color'],
    ...textStyle.subtitle,
  },
}));

