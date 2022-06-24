import React from 'react';
import {Box, Icon, Input, Text} from 'native-base';

export default function CustomInput({placeholder, ...props}) {
  return (
    <Box alignItems="center">
      <Input
        placeholder={placeholder}
        w="100%"
        borderWidth={0}
        bg="white"
        p={3}
        fontSize={20}
        // InputLeftElement={ }
        {...props}
      />
    </Box>
  );
}
