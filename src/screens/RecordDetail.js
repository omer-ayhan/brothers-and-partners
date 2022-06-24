import React from 'react';
import {Box, VStack, Text, Button, HStack, Switch, FlatList} from 'native-base';
import CustomInput from '../components/CustomInput';
import {ScrollView} from 'react-native-gesture-handler';

export default function RecordDetail() {
  const button_list = [
    {id: 1, title: 'Şirket Bilgileri'},
    {id: 2, title: 'Kontrol Listesi'},
    {id: 3, title: 'Sosyal Yardımlar'},
  ];

  const renderButtons = ({item, index}) => (
    <Button
      colorScheme="primary"
      rounded={5}
      mx="1"
      py="1"
      bg={index == 0 ? 'primary_custom' : 'white'}
      _pressed={{
        backgroundColor: index === 0 ? 'orange.500' : 'orange.50',
      }}
      _text={{
        fontSize: 'lg',
        fontWeight: 'bold',
        color: index === 0 ? 'white' : 'dark',
      }}>
      {item.title}
    </Button>
  );

  return (
    <Box h="100%" p="5" bg="gray.50">
      <ScrollView>
        <VStack space={3}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={button_list}
            renderItem={renderButtons}
            keyExtractor={item => item.id.toString()}
            horizontal
          />
          <CustomInput
            py="2"
            title="Unvan"
            value="EFM TESİS YÖNETİMİ A.Ş."
            isDisabled={true}
            fontSize="lg"
            _disabled={{
              bg: 'gray.100',
              placeholderTextColor: 'dark',
            }}
            required
          />
          <CustomInput
            py="2"
            title="Adres"
            value="maslak mah maslak sokak"
            isDisabled={true}
            fontSize="lg"
            _disabled={{
              bg: 'gray.100',
              placeholderTextColor: 'dark',
            }}
            required
          />
          <CustomInput
            py="2"
            title="SGK Sicil No"
            value="12345"
            isDisabled={true}
            fontSize="lg"
            _disabled={{
              bg: 'gray.100',
              placeholderTextColor: 'dark',
            }}
            required
          />
          <CustomInput
            py="2"
            title="Vergi No"
            value="1234"
            isDisabled={true}
            fontSize="lg"
            _disabled={{
              bg: 'gray.100',
              placeholderTextColor: 'dark',
            }}
            required
          />
          <CustomInput
            py="2"
            title="Teflike Sınıfı"
            value="az"
            isDisabled={true}
            fontSize="lg"
            _disabled={{
              bg: 'gray.100',
              placeholderTextColor: 'dark',
            }}
            required
          />
          <CustomInput
            py="2"
            title="Şubeleri"
            value="1"
            isDisabled={true}
            fontSize="lg"
            _disabled={{
              bg: 'gray.100',
              placeholderTextColor: 'dark',
            }}
            required
          />
          <Box>
            <Text fontSize="lg">Tis Bilgileri(Sendika)</Text>
            <Button
              mt="1"
              w="1/2"
              bg="white"
              _text={{
                color: 'dark',
                fontWeight: 'bold',
                fontSize: 'md',
              }}
              _pressed={{
                bg: 'gray.100',
              }}>
              Sözleşme Tarihi
            </Button>
          </Box>
          <Box>
            <Text fontSize="lg">Çalışan Sayısı</Text>
            <Button
              mt="1"
              w="1/2"
              bg="white"
              _text={{
                color: 'dark',
                fontWeight: 'bold',
                fontSize: 'md',
              }}
              _pressed={{
                bg: 'gray.100',
              }}>
              Çalışan Listesi
            </Button>
          </Box>
          <Box>
            <Text fontSize="lg">Özlük Dosyası</Text>
            <Button
              mt="1"
              w="1/2"
              bg="white"
              _text={{
                color: 'dark',
                fontWeight: 'bold',
                fontSize: 'md',
              }}
              _pressed={{
                bg: 'gray.100',
              }}>
              Personal Listesi
            </Button>
          </Box>
          <Box>
            <Text fontSize="lg" textTransform="capitalize">
              Zorunlu çalıştırılması gereken personeller
            </Text>
            <Switch
              size="md"
              offTrackColor="red_custom"
              onTrackColor="green_custom"
            />
          </Box>
          <Box>
            <Text fontSize="lg">Sözleşme Türleri</Text>
            <Button
              mt="1"
              w="1/2"
              bg="white"
              _text={{
                color: 'dark',
                fontWeight: 'bold',
                fontSize: 'md',
              }}
              _pressed={{
                bg: 'gray.100',
              }}>
              Sözleşmeler
            </Button>
          </Box>
          <Box>
            <Text fontSize="lg">Mesai</Text>
            <HStack space={3}>
              <Button
                mt="1"
                w="1/2"
                bg="white"
                _text={{
                  color: 'dark',
                  fontWeight: 'bold',
                  fontSize: 'md',
                }}
                _pressed={{
                  bg: 'gray.100',
                }}>
                Çalışma Süreleri
              </Button>
              <Button
                mt="1"
                w="1/2"
                bg="white"
                _text={{
                  color: 'dark',
                  fontWeight: 'bold',
                  fontSize: 'md',
                }}
                _pressed={{
                  bg: 'gray.100',
                }}>
                Ara Dinlenme Süreleri
              </Button>
            </HStack>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
}
