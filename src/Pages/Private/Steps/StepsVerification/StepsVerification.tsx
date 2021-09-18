import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';

import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import { useHistory, useLocation } from 'react-router-native';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../Models/EvidenceModel';




const StepsVerification = () => {

  const history = useHistory();
  const location = useLocation();

  let model:EvidenceModel = location.state as EvidenceModel;

  console.log(model);

  const handleGoBack = () => {
    history.replace("/stepsInfo");
  }

  const handleContinue = () => {
    history.push({
      pathname:"/stepsFinish",
      state:model,
    });
  }

  return (
    <View alignItems="center">
      <Heading>Verificación</Heading>
      <Text textAlign="center">
        Podrás confirmar o volver a cargar archivos
      </Text>
      <Box height="20px"></Box>
      <Text>Grabación de pantalla</Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box height="20px"></Box>
      <Text>Fotos seleccionadas</Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box height="20px"></Box>
      <Text>Videos seleccionados</Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box height="20px"></Box>
      <Text>Audios seleccionados</Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box height="30px"></Box>
      <Text>¿Está todo bien?</Text>
      <PrimaryButton label="Confirmar" buttonProps={{onPress:handleContinue}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>

    </View>
  );
};

export default StepsVerification;


