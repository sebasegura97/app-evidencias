import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';
import { useHistory } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';



const StepThreeValidation = () => {

  const history = useHistory();

  return (
    <Stack alignItems="center">
      <Heading>Paso 3</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar videos
      </Text>
      <Box height="20px" ></Box>
      <Box height="350px" width="100%" backgroundColor="red"></Box>
      <Box height="50px"></Box>
      <Text>¿Cargar videos?</Text>
      <Box height="15px">  </Box>
      <PrimaryButton onPress={()=>{history.push("/stepFour")}} />
      <Box height="10px">  </Box>
      <Button backgroundColor="transparent" onPress={()=>{history.push("/stepThree")}}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>
      <Box height="30px"></Box>
    </Stack>
  );
}

export default StepThreeValidation;


