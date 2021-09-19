import React from 'react';
import {
  View,
  Text,
  Box,
  Heading,
  Image,
  Stack,
  Button,
  Row,
  Column,
} from 'native-base';
import {useHistory, useLocation} from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../../Models/EvidenceModel';

const StepOneValidation = () => {
  const history = useHistory();
  const handleGoBack = () => history.goBack();
  const location = useLocation();

  let model: EvidenceModel = location.state as EvidenceModel;

  console.log(model);

  const handleContinueButton = () => {
    history.push({
      pathname: '/stepTwo',
      state: model,
    });
  };

  return (
    <View alignItems="center">
      <Heading>Paso 1</Heading>
      <Text textAlign="center">Tus capturas de pantalla</Text>
      <Box height="20px" />
      <Box height="350px" width="100%" backgroundColor="red" />
      <Box width="100%">
        <Text marginX="10px" fontSize="xs" textAlign="left">
          {model.screenCapture?.result?.outputUrl}
        </Text>
      </Box>
      <Box height="30px" />
      <Text>¿Está todo bien?</Text>
      <PrimaryButton
        label="Continuar"
        buttonProps={{onPress: handleContinueButton}}
      />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a grabar</Text>
      </Button>
    </View>
  );
};

export default StepOneValidation;
