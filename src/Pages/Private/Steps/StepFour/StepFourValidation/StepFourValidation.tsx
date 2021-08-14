import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';
import { useHistory } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';

const StepFourValidation = () => {

  const history = useHistory();
  const handleGoBack = () => history.goBack();
  const handleContinue = () => history.push("/stepsVerification")

  return (
    <View alignItems="center">
      <Heading>Paso 4</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar audios
      </Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box height="30px"></Box>
      <Text>¿Cargar audios?</Text>
      <PrimaryButton label="Confirmar" buttonProps={{onPress:handleContinue}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>
    </View>
  );
};

export default StepFourValidation;


