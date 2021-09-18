import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column, ScrollView} from 'native-base';
import { useHistory, useLocation } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../../Models/EvidenceModel';
import { anyTypeAnnotation } from '@babel/types';



const StepTwoValidation = () => {

  const history = useHistory();
  const location  = useLocation();

  let model:EvidenceModel = location.state as EvidenceModel;

  const handleContinue = () => {
    history.push({
      pathname:"/stepThree",
      state:model,
    });
  }

  const handleGoBack = () => history.goBack();

  const generateChildren = () => {
    let array:any[] = [];
    model.images.forEach(element => {
      array.push(imageBox(element["fileCopyUri"],element["fileCopyUri"]));
    });
    return array;
  }

  const imageBox = (path:string, key:string) => {
    return (
      <Box key={key} backgroundColor="red" marginLeft="5px" marginRight="5px" position="relative" width="150px" maxWidth="150px" minHeight="230px">
        {/* XQ EFGYIQF NO SE MUESTRA LA IMAGEN????? */}
        <Image
          alt=" "
          maxHeight="200px"
          resizeMode="contain"
          source={{uri:path}}
        />
      </Box>
    );
  }



  return (
    <View alignItems="center">
      <Heading>Paso 2</Heading>
      <Text textAlign="center" marginBottom="30px">
        Aquí deberás seleccionar fotos
      </Text>
      
      <ScrollView horizontal={true} marginBottom="20px" marginTop="20px" children={generateChildren()} />
      <Text marginTop="40px">¿Listo?</Text>
      <PrimaryButton label="Continuar" buttonProps={{onPress:handleContinue}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>
   
    </View>
  );
};

export default StepTwoValidation;


