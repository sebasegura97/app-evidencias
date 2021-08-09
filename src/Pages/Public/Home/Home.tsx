import React, {useState} from 'react';
import {Box, Text, Stack, Heading, Input, Image} from 'native-base';
import {useHistory} from 'react-router-native';

import PrimaryButton from '../../../Shared/PrimaryButton';
import LinkButton from '../../../Shared/LinkButton';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    history.push('/sign-in');
  };

  const handleSignup = () => {
    history.push('/sign-up');
  };

  return (
    <Box alignItems="center" flex={1} marginTop="auto" marginBottom="auto">
      <Heading marginBottom={4}> Ingresar </Heading>
      <Text textAlign="center" marginBottom={5}>
        Bienvenido, por favor inicia sesión o registrate para comenzar.{' '}
      </Text>
      <Box position="relative" width="100%">
        <Image
          resizeMode="contain"
          alt="background"
          height={380}
          source={require('./assets/bg.png')}
        />
      </Box>
      <Box>
        <PrimaryButton
          buttonProps={{
            onPress: handleLogin,
          }}
          loading={loading}
          label="Iniciar sesión"
        />
        <Box marginTop={2}>
          <LinkButton
            onPress={handleSignup}
            loading={loading}
            label="Registrarme"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
