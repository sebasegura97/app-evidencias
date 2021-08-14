import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';
import { useHistory } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';



const StepOneValidation = () => {

  const history = useHistory();
  const handleContinueButton = () => history.push("/stepTwo");
  const handleGoBack = () => history.goBack();

  return (
    <View alignItems="center">
      <Heading>Paso 1</Heading>
      <Text textAlign="center">
        Tus capturas de pantalla
      </Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box width="100%">
        <Text marginX="10px" fontSize="xs" textAlign="left">FileNameHere</Text>
      </Box>
      <Box height="30px"></Box>
      <Text>¿Está todo bien?</Text>
      <PrimaryButton label="Continuar" buttonProps={{onPress:handleContinueButton}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a grabar</Text>
      </Button>
    </View>
  );
};

export default StepOneValidation;


