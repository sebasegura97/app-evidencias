import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column, ScrollView} from 'native-base';
import { useHistory, useLocation } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../../Models/EvidenceModel';



const StepThreeValidation = () => {

  const history = useHistory();
  const location = useLocation();

  let model:EvidenceModel = location.state as EvidenceModel;

  const handleContinue = () => history.push({
    pathname:"/stepFour",
    state:model,
  });

  const handleGoBack = () => history.goBack();

  const generateChildren = () => {
    let array:any[] = [];
    model.videos.forEach(element => {
      array.push(imageBox(element["fileCopyUri"],element["name"],element["fileCopyUri"]));
    });
    return array;
  }

  const imageBox = (path:string,name:string, key:string) => {
    return (
      <Box key={key} justifyContent="flex-start" alignItems="center" marginLeft="5px" marginRight="5px" position="relative" maxWidth="150px" minHeight="230px">
        {/* XQ EFGYIQF NO SE MUESTRA LA IMAGEN????? */}
        <Image
          alt=" "
          maxHeight="200px"
          resizeMode="contain"
          size="150px"
          source={require('../assets/icon_video.png')}
          //source={{uri:path}}
        />
        <Text>{name}</Text>
      </Box>
    );
  }

  return (
    <View alignItems="center">
      <Heading>Paso 3</Heading>
      <Text textAlign="center" marginBottom="30px">
        Aquí deberás seleccionar videos
      </Text>
      <ScrollView horizontal={true} marginBottom="20px" marginTop="20px" children={generateChildren()} />
      <Text marginTop="40px">Cargar videos?</Text>
      <PrimaryButton label="Continuar" buttonProps={{onPress:handleContinue}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>
    </View>
  );
}

export default StepThreeValidation;


