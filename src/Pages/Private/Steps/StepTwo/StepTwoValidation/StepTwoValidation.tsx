import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';

import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';



const StepTwoValidation = () => {

  const history = useHistory();

  return (
    <Stack alignItems="center">
      <Heading>Paso 2</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar fotos
      </Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box height="50px"></Box>
      <Text>¿Listo?</Text>
      <Box height="15px">  </Box>
      <PrimaryButton onPress={()=>{history.push("/stepThree")}} />
      <Box height="10px">  </Box>
      <Button backgroundColor="transparent" onPress={()=>{history.push("/stepTwo")}}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>
      <Box height="30px"></Box>
    </Stack>
  );
};

export default StepTwoValidation;

