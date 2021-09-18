import React, { useEffect, useState } from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';
import { useHistory, useLocation } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../../Models/EvidenceModel';
//@ts-ignore 1
import MediaMeta from 'react-native-media-meta';



const StepOneValidation = () => {

  const history = useHistory();
  const handleGoBack = () => history.goBack();
  const location = useLocation();
  const [metaData, setMetaData] = useState(null);
  let model:EvidenceModel = location.state as EvidenceModel;
  
  const fileSplit:[string] = model.screenCapture["result"]["outputURL"].toString().split("/");

  useEffect(() => {
  // MediaMeta.get(model.screenCapture["result"]["outputURL"].toString())
  // .then((metadata: any) => setMetaData(metadata))
  // .catch((err: any) => console.error(err));
  }, []);

  const handleContinueButton = () => {
    
    history.push({
      pathname:"/stepTwo",
      state:model,
    });
  }

  const getImage = () => {
    if(metaData != null){
      
      return <Image resizeMode="contain" alt = " " source={{ uri: 'data:image/png;base64,' + metaData["thumb"] }} />
    } else {
      return <Image size="150px" resizeMode="contain" alt = " " source={require('../assets/icon_video.png')} />
    }
  }
  
  return (
    <View alignItems="center">
      <Heading>Paso 1</Heading>
      <Text textAlign="center">
        Tus capturas de pantalla
      </Text>
      <Box height="20px" ></Box>
      <Box width="100%" maxHeight="300px" marginBottom="15px" marginTop="30px" alignItems="center">
        {getImage()}
      </Box>
      <Box alignItems="center" width="100%">
        <Text marginX="10px" fontSize="xs" textAlign="left">{fileSplit[fileSplit.length-1]}</Text>
      </Box>
      <Box height="30px"></Box>
      <Text>¿Está todo bien?</Text>
      <PrimaryButton label="Continuar" buttonProps={{onPress:handleContinueButton}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a grabar</Text>
      </Button>
    </View>
  );
};

export default StepOneValidation;


