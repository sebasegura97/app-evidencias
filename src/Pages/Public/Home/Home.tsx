import React from 'react';
import {Image, Box, Text, Stack, Heading} from 'native-base';
import PrimaryButton from '../../../Shared/PrimaryButton';

const Home = () => {
  return (
    <Stack alignItems="center">
      <Heading> Ingresar </Heading>
      <Text textAlign="center">
        Bienvenido, por favor inicia sesión o registrate para comenzar.{' '}
      </Text>
      <Box position="relative" width="100%">
        <Image
          resizeMode="contain"
          alt="background"
          height={420}
          source={require('./assets/bg.png')}
        />
      </Box>
      <PrimaryButton />
    </Stack>
  );
};

export default Home;
