import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';
import { useHistory } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';



const StepThreeValidation = () => {

  const history = useHistory();
  const handleContinue = () => history.push("/stepFour");
  const handleGoBack = () => history.goBack();
  return (
    <View alignItems="center">
      <Heading>Paso 3</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar videos
      </Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box height="30px"></Box>
      <Text>¿Cargar videos?</Text>
      <PrimaryButton label="Continuar" buttonProps={{onPress:handleContinue}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>
    </View>
  );
}

export default StepThreeValidation;


