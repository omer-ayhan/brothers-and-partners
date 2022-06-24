import React from 'react';
import {Box, Icon, Input, Text} from 'native-base';

export default function CustomInput({
  placeholder,
  inputLeft,
  required,
  title,
  ...props
}) {
  return (
    <Box>
      {title && (
        <Text fontSize="lg">
          {title}{' '}
          {required && (
            <Text fontSize="lg" color="red.400">
              *
            </Text>
          )}
        </Text>
      )}
      <Input
        placeholder={placeholder}
        w="100%"
        borderWidth={0}
        bg="white"
        p={3}
        fontSize={20}
        InputLeftElement={inputLeft}
        {...props}
      />
    </Box>
  );
}
