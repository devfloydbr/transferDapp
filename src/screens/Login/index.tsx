import React, { useEffect } from 'react'

import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'

import {
  NavigationProp
} from '@react-navigation/native';

import {
  View,
  Title,
  Subtitle,
  Header,
  ImageContainer,
  LoginContainer,
  ButtonsContainer,
  BackgroundLogin
} from './styles'

interface Props {
  navigation: NavigationProp<any, any>
}

export function Login({ navigation }: Props) { 
  const { connect, signUp, wallet } = useAuth()

  async function handleSignUp() {    
    await signUp()  
  }

  return (
    <View>
      <Header>
        <Title>transfer</Title>
        <Subtitle>DeFi para todos</Subtitle>
      </Header>
      <ImageContainer>
        <BackgroundLogin 
          source={require('../../../assets/background-login.png')}
          resizeMode="cover"
        >
          
          <LoginContainer>
            <ButtonsContainer>  
              {                
                <Button                 
                  title="Nova carteira"
                  onPress={handleSignUp}
                />
              }
            </ButtonsContainer>
          </LoginContainer>
        </BackgroundLogin>
      </ImageContainer>      
    </View>
  );
}

