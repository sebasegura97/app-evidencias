import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';

import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import PrimaryButton from '../../../../Shared/PrimaryButton';




const StepsVerification = () => {

  const history = useHistory();

  return (
    <Stack alignItems="center">
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
      <Box height="20px"></Box>
    
      <Box height="50px"></Box>
      <Text>¿Está todo bien?</Text>
      <Box height="15px">  </Box>
      <PrimaryButton onPress={()=>{history.push("/stepsFinish")}} />
      <Box height="10px">  </Box>
      <Button backgroundColor="transparent" onPress={()=>{history.push("/stepsInfo")}}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>
      <Box height="30px"></Box>
    </Stack>
  );
};

export default StepsVerification;


