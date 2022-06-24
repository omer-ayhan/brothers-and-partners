import React from 'react';
import {Button, Center, Image, Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
// import IconFeather from 'react-native-vector-icons/Feather';

import CustomInput from '../components/CustomInput';
import Screens from '../constants/routes';

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate(Screens.RecordsContainer);
  };

  return (
    <VStack
      justifyContent="center"
      flex={1}
      p={2}
      px={4}
      bg="gray.50"
      space={4}>
      <Center>
        <Image
          source={require('../assets/logo.png')}
          alt="Brothers&Partners"
          size="xl"
        />
        <Text fontSize="4xl" fontWeight="medium" color="primary_custom">
          Hoşgeldiniz
        </Text>
      </Center>
      <Center>
        <CustomInput
          placeholder="Kullanıcı Adı"
          _focus={{
            bg: 'white',
          }}
          // inputLeft={<IconFeather name="user" size={20} color="gray.200" />}
        />
        <CustomInput
          placeholder="Şifre"
          my={3}
          _focus={{
            bg: 'white',
          }}
          // inputLeft={<IconFeather name="lock" size={20} color="gray.200" />}
        />
        <Button
          _pressed={{
            bg: 'orange.500',
          }}
          bg="primary_custom"
          w="100%"
          onPress={handleLogin}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Giriş Yap
          </Text>
        </Button>
      </Center>
    </VStack>
  );
}
