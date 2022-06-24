import React from 'react';
import {Box, VStack, Text, Button, HStack, Switch} from 'native-base';
import CustomInput from '../components/CustomInput';
import {ScrollView} from 'react-native-gesture-handler';

export default function RecordDetail() {
  return (
    <Box h="100%" p="5">
      <ScrollView>
        <VStack space={3}>
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
                bg: 'gray.50',
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
                bg: 'gray.50',
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
                bg: 'gray.50',
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
                bg: 'gray.50',
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
                  bg: 'gray.50',
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
                  bg: 'gray.50',
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
