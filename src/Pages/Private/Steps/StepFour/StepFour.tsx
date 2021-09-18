import React, { useState } from 'react';
import {Text, Box, Heading, Image, View, Button} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import { useHistory, useLocation } from 'react-router-native';
import { Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker'
import { useEffect } from 'react';
import EvidenceModel from '../../../../Models/EvidenceModel';

const StepFour = () => {
  
  const history = useHistory();
  const [response, setResponse] = React.useState<any>();
  const location = useLocation();

  let model:EvidenceModel = location.state as EvidenceModel;
  
  useEffect(
    ()=>{
      if (response!=null){
        model.audios = response;
        history.push({
          pathname:"/stepFourValidation",
          state:model,
        });
      }
    },
    [response]
  );

  const handleSkipStep = () => {
    model.audios = [];
    history.push({
      pathname:"/stepsVerification",
      state:model,
    });
  }

  async function handleSelectAudio() {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.audio],
      })
      setResponse(results);
    } catch (err) {
      // if (DocumentPicker.isCancel(err)) {
      //   // User cancelled the picker, exit any dialogs or menus and move on
      // } else {
      //   Alert.alert("Error");      
      // }
      //Alert.alert("Error");      
      setResponse(null);
    }
  }


  return (
    <View alignItems="center">
      <Heading>Paso 4</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar audios
      </Text>
      <Box position="relative" width="250px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/stepFour.png')}
        />
      </Box>
      <Box height="30px"></Box>
      <Text>¿Seleccionar audios?</Text>
      <PrimaryButton label="Ver audios" buttonProps={{onPress:handleSelectAudio}} />
      <Button backgroundColor="transparent" onPress={handleSkipStep}>
        <Text fontSize="sm">Saltar paso</Text>
      </Button>
    </View>
  );
};

export default StepFour;

