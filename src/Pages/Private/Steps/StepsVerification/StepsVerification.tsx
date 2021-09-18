import React, { useEffect } from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';
import { useHistory, useLocation } from 'react-router-native';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../Models/EvidenceModel';




const StepsVerification = () => {

  const history = useHistory();
  const location = useLocation();

  let model:EvidenceModel = location.state as EvidenceModel;

  const handleGoBack = () => {
    history.replace("/stepsInfo");
  }

  const handleContinue = () => {
    history.push({
      pathname:"/stepsFinish",
      state:model,
    });
  }

  useEffect(
    ()=>{
      model != null ? console.log(model) : console.log("Null model");
    },
    []
  );

  return (
    <View alignItems="center">
      <Heading>Verificación</Heading>
      <Text marginTop="10px" marginBottom="10px" textAlign="center">
        Podrás confirmar o volver a cargar archivos
      </Text>
      <Text marginTop="10px" marginBottom="10px">Grabación de pantalla</Text>
      <Box marginTop="10px" marginBottom="10px" height="350px" width="100%" backgroundColor="red"></Box>
      <Text marginTop="10px" marginBottom="10px">Fotos seleccionadas</Text>
      <Box marginTop="10px" marginBottom="10px" height="350px" width="100%" backgroundColor="red"></Box>
      <Text marginTop="10px" marginBottom="10px">Videos seleccionados</Text>
      <Box marginTop="10px" marginBottom="10px" height="350px" width="100%" backgroundColor="red"></Box>
      <Text marginTop="10px" marginBottom="10px">Audios seleccionados</Text>
      <Box marginTop="10px" marginBottom="10px" height="350px" width="100%" backgroundColor="red"></Box>
      <Text marginTop="10px" marginBottom="10px">¿Está todo bien?</Text>
      <PrimaryButton label="Confirmar" buttonProps={{onPress:handleContinue}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>

    </View>
  );
};

export default StepsVerification;


