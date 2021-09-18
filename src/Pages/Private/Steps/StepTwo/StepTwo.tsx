import React from 'react';
import {Text, Box, Heading, Image, Stack, Button, View} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import { useHistory, useLocation } from 'react-router-native';
import DocumentPicker from 'react-native-document-picker'
import { Alert } from 'react-native';
import { useEffect } from 'react';
import EvidenceModel from '../../../../Models/EvidenceModel';




const StepTwo = () => {
  
  const history = useHistory();
  const [response, setResponse] = React.useState<any>(null);
  const location = useLocation();
  
  let model:EvidenceModel = location.state as EvidenceModel;

  console.log(model);
  
  useEffect(
    ()=>{
      if (response!=null){
        console.log(response.toString());
        model.images = response;
        history.push({
          pathname:"/stepTwoValidation",
          state:model,
        });
      }
    }
    );

  const handleSkipStep = () => {
    model.images = [];
    history.push({
      pathname:"/stepThree",
      state:model,
    });
  }

  async function handleSelectImage() {
    
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      })
      setResponse(results);
      
    } catch (err) {
      // if (DocumentPicker.isCancel(err)) {
      //   // User cancelled the picker, exit any dialogs or menus and move on
      // } else {
      //   Alert.alert(err);      
      // }
      
      Alert.alert("ERROR");      
      setResponse([]);
    }
  }

  return (
    <View alignItems="center">
      <Heading>Paso 2</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar fotos
      </Text>
      <Box position="relative" width="180px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/stepTwo.png')}
        />
      </Box>
      <PrimaryButton label="Ver galeria" buttonProps={{onPress:handleSelectImage}} />
      <Button backgroundColor="transparent" onPress={handleSkipStep}>
        <Text fontSize="sm">Saltar paso</Text>
      </Button>
    </View>
  );
};

export default StepTwo;

