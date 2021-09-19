import React from 'react';
import {View, Text, Heading, Box, Image, Center} from 'native-base';
import useMe from '../../../Shared/Hooks/useMe';
import {useHistory} from 'react-router-native';
import PrimaryButton from '../../../Shared/PrimaryButton';

const Home = () => {
  const {user} = useMe();
  const history = useHistory();
  const handleStartButton = () => history.push('/stepsInfo');

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
            marginRight="auto"
            marginLeft="auto"
            marginTop={4}
            marginBottom={4}
            source={require('./assets/bg.png')}
          />
        </Box>
        <PrimaryButton
          label="Empezar"
          buttonProps={{onPress: handleStartButton}}
        />
      </View>
    );
  }
  return null;
};

export default Home;
