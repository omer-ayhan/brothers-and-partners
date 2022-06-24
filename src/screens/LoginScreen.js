import React from 'react';
import {Button, Center, Image, Text, VStack} from 'native-base';
import CustomInput from '../components/CustomInput';

export default function LoginScreen() {
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
        />
        <CustomInput
          placeholder="Şifre"
          my={3}
          _focus={{
            bg: 'white',
          }}
        />
        <Button
          _pressed={{
            bg: 'orange.500',
          }}
          bg="primary_custom"
          w="100%"
          onPress={() => console.log('hello world')}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Giriş Yap
          </Text>
        </Button>
      </Center>
    </VStack>
  );
}
