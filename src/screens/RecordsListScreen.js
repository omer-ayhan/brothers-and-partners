import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Button, Center, HStack, Text} from 'native-base';

export default function RecordsListScreen() {
  return (
    <TouchableOpacity>
      <Box bg="gray.50" flex={1} py="4" px="4">
        <HStack
          w="100%"
          h="64px"
          bg="white"
          p="2"
          space={8}
          flexDirection="row"
          borderRadius={5}>
          <Box flexDirection="column">
            <Text fontSize="md" fontWeight="medium">
              EFM TESİS YÖNETİMİ A.Ş.
            </Text>
            <Text fontSize="sm" color="green_custom">
              Özkan Zık
            </Text>
          </Box>
          <Box flexDirection="row">
            <Text fontSize="sm" color="gray.200">
              08/06/2020
            </Text>
            <Text ml="2">Icon</Text>
          </Box>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
}
