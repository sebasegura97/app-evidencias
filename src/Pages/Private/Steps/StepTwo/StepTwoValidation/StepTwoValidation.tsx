import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';

import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';



const StepTwoValidation = () => {

  const history = useHistory();
  const handleContinue = () => history.push("/stepThree");
  const handleGoBack = () => history.goBack();

  return (
    <View alignItems="center">
      <Heading>Paso 2</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar fotos
      </Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box height="30px"></Box>
      <Text>¿Listo?</Text>
      <PrimaryButton label="Continuar" buttonProps={{onPress:handleContinue}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>
   
    </View>
  );
};

export default StepTwoValidation;


