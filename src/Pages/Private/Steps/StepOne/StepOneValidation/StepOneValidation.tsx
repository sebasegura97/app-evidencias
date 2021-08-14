import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';

import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';



const StepOneValidation = () => {

  const history = useHistory();

  return (
    <Stack alignItems="center">
      <Heading>Paso 1</Heading>
      <Text textAlign="center">
        Tus capturas de pantalla
      </Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box width="100%">
        <Text marginX="10px" fontSize="xs" textAlign="left">FileNameHere</Text>
      </Box>
      <Box height="50px"></Box>
      <Text>¿Está todo bien?</Text>
      <Box height="15px">  </Box>
      <PrimaryButton onPress={()=>{history.push("/stepTwo")}} />
      <Box height="10px">  </Box>
      <Button backgroundColor="transparent" onPress={()=>{history.push("/stepOne")}}>
        <Text fontSize="sm">Volver a grabar</Text>
      </Button>
      <Box height="30px"></Box>
    </Stack>
  );
};

export default StepOneValidation;


