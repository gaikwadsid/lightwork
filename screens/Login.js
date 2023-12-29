import React from 'react';
import { withExpoSnack, StyledComponent, styled } from 'nativewind';
import { Text, KeyboardAvoidingView, TextInput, Pressable, Dimensions } from 'react-native';

const StyledView = styled(KeyboardAvoidingView)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledPressable = styled(Pressable)

const Login = () => {
  const [username, onChangeUsername] = React.useState('Username');
  const [password, onChangePassword] = React.useState('Password');
  const windowHeight = Dimensions.get('window').height;


  return (
    <StyledView className="flex-1 items-center justify-center">
        <StyledView className='h-1/3 space-y-4'>
          <StyledText className="font-bold text-black text-4xl">
            Lightwork
          </StyledText>
          <StyledTextInput className="font-bold text-slate-800 bg-slate-200"
                          placeholder={username}
                          onChangeText={onChangeUsername}
                          />
          <StyledTextInput className="font-bold text-slate-800 bg-slate-200"
                          secureTextEntry={true}
                          placeholder={password}
                          onChangeText={onChangePassword}/>
          <StyledView className='items-center justify-center space-y-4'>
            <StyledPressable className = "rounded bg-blue-500">
              <StyledText className = 'text-white'>Login</StyledText>
            </StyledPressable>
            <StyledPressable>
              <StyledText className = 'text-blue-500'>Register</StyledText>
            </StyledPressable>
          </StyledView>
        </StyledView>
    </StyledView>
  );
}

export default withExpoSnack(Login);