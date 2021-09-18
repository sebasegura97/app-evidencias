import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';

import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import { useHistory, useLocation } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../../Models/EvidenceModel';



const StepTwoValidation = () => {

  const history = useHistory();
  const location  = useLocation();

  let model:EvidenceModel = location.state as EvidenceModel;

  console.log(model);

  const handleContinue = () => {
    history.push({
      pathname:"/stepThree",
      state:model,
    });
  }

  const handleGoBack = () => history.goBack();

  return (
    <View alignItems="center">
      <Heading>Paso 2</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar fotos
      </Text>
      <Box height="20px" ></Box>
      <Box position="relative" width="180px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={(model.images[0].uri.toString())}
        />
      </Box>
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


