import React, { useState } from 'react';
import {Text, Box, Heading, Image, Stack, Button} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import { useHistory } from 'react-router-native';
import { Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker'
import { useEffect } from 'react';



//TODO: Buscar una libreria para seleccionar audios

const StepFour = () => {

  useEffect(
    ()=>{
      if (response!=null){
        console.log(response.toString());
        history.push("/stepFourValidation");
      }
    }
    );

  async function handleSelectAudio() {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.audio],
        
      })
      setResponse(results);
      Alert.alert(results[0].toString());
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        )
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        Alert.alert(err);      }
      setResponse(null);
    }
  
    if (response!=null){
      history.push("/stepFourValidation");
    }
    
  }

  const history = useHistory();
  const [response, setResponse] = React.useState<any>(null);

  return (
    <Stack alignItems="center">
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
      <Box height="50px"></Box>
      <Text>¿Seleccionar audios?</Text>
      <Box height="15px"></Box>
      <PrimaryButton onPress={() =>handleSelectAudio()} />
      <Box height="10px"></Box>
      <Button backgroundColor="transparent" onPress={()=>console.log("Go to steps preview")}>
        <Text fontSize="sm">Saltar paso</Text>
      </Button>
    </Stack>
  );
};

export default StepFour;

