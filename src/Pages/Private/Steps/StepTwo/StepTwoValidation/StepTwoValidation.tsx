import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Column, ScrollView, Row} from 'native-base';
import { useHistory, useLocation } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../../Models/EvidenceModel';
import { anyTypeAnnotation } from '@babel/types';
import { utils } from '@react-native-firebase/app';



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
      array.push(imageBox(element["fileCopyUri"],element["name"],element["fileCopyUri"]));
    });
    return array;
  }

  const imageBox = (path:string, name:string,key:string) => {
    const fileSplit:string[] = path.split("/");
    const fileName:string = fileSplit[fileSplit.length-2]+"/"+fileSplit[fileSplit.length-1];
    return (
      <Box alignItems="center" justifyContent="flex-start" key={key}  marginLeft="5px" marginRight="5px" position="relative" maxWidth="150px" maxHeight="230px">
          <Row>
            <Image
              alt=" "
              maxHeight="200px"
              resizeMode="contain"
              //source={require('../assets/icon_image.png')}
              size="150px"
              source={{uri:"file://"+ utils.FilePath.CACHES_DIRECTORY+"/"+fileName}}
            />
          </Row>
          <Row>
          <Text fontSize="xs" marginTop="10px">{name}</Text>
          </Row>
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


