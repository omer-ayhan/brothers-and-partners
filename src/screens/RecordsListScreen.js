import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, FlatList, HStack, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import mockData from '../constants/__mock__.json';
import Screens from '../constants/routes';

export default function RecordsListScreen() {
  const {recordList} = mockData;
  const navigation = useNavigation();

  const navigateToDetail = () => {
    navigation.navigate(Screens.RecordDetail);
  };

  const renderRecords = ({item}) => {
    return (
      <TouchableOpacity onPress={navigateToDetail}>
        <HStack
          w="100%"
          h="64px"
          bg="white"
          p="2"
          my="1"
          space={8}
          flexDirection="row"
          borderRadius={5}>
          <Box flexDirection="column">
            <Text fontSize="md" fontWeight="medium">
              {item.name}
            </Text>
            <Text fontSize="sm" color="green_custom">
              {item.owner}
            </Text>
          </Box>
          <Box flexDirection="row">
            <Text fontSize="sm" color="gray.200">
              {item.date}
            </Text>
          </Box>
        </HStack>
      </TouchableOpacity>
    );
  };

  return (
    <Box bg="gray.50" py="4" px="4">
      <FlatList
        height="100%"
        data={recordList}
        renderItem={renderRecords}
        keyExtractor={item => item.id}
      />
    </Box>
  );
}
