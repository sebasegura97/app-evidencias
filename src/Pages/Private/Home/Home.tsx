import React from 'react';
import {View, Text, Heading, Box, Image} from 'native-base';
import useMe from '../../../Shared/Hooks/useMe';
import { useHistory } from 'react-router-native';
import PrimaryButton from '../../../Shared/PrimaryButton';

const Home = () => {
  const {user} = useMe();
  const history = useHistory();
  const handleStartButton = () => history.push("/stepsInfo");

  if (user) {
    return (
      <View>
        <Heading textAlign="center" marginBottom={4}>
          {' '}
          Bienvenido {user?.displayName}{' '}
        </Heading>
        <Text textAlign="center" marginBottom={5}>
          Para empezar un proceso de recolección de evidencias presione iniciar.
        </Text>
        <Box position="relative" width="100%">
          <Image
            resizeMode="contain"
            alt="background"
            height={380}
            source={require('./assets/bg.png')}
          />
        </Box>
        <PrimaryButton label="Empezar" buttonProps={{onPress:handleStartButton}}></PrimaryButton>
      </View>
    );
  }
  return null;
};

export default Home;
