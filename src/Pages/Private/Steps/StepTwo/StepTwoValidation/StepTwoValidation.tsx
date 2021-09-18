import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';
import { useHistory, useLocation } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../../Models/EvidenceModel';



const StepTwoValidation = () => {

  const history = useHistory();
  const location  = useLocation();

  let model:EvidenceModel = location.state as EvidenceModel;

  const handleContinue = () => {
    console.log(decodeURI(model.images[0]["uri"]));
    console.log(decodeURI(model.images[0]["fileCopyUri"]));
    
    
    // history.push({
    //   pathname:"/stepThree",
    //   state:model,
    // });
  }

  const handleGoBack = () => history.goBack();

  return (
    <View alignItems="center">
      <Heading>Paso 2</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar fotos
      </Text>
      <Box height="50px" ></Box>
      <Box position="relative" minHeight="230px">
        {/* XQ EFGYIQF NO SE MUESTRA LA IMAGEN????? */}
        <Image
          alt=" "
          maxHeight="200px"
          resizeMode="contain"
          source={{uri:(model.images[0]["fileCopyUri"]).toString()}}
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


