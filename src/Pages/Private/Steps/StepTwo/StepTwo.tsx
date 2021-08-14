import React from 'react';
import {Text, Box, Heading, Image, Stack, Button, View} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import { useHistory } from 'react-router-native';
import DocumentPicker from 'react-native-document-picker'
import { Alert } from 'react-native';
import { useEffect } from 'react';




const StepTwo = () => {

  useEffect(
    ()=>{
      if (response!=null){
        console.log(response.toString());
        history.push("/stepTwoValidation");
      }
    }
    );

  async function handleSelectImage() {
    
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
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
      history.push("/stepTwoValidation");
    }
    
  }

  const history = useHistory();
  const [response, setResponse] = React.useState<any>(null);
  const handleSkipStep = () => history.push("/stepThree");

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
      <PrimaryButton label="Seleccionar" buttonProps={{onPress:handleSelectImage}} />
      <Button backgroundColor="transparent" onPress={handleSkipStep}>
        <Text fontSize="sm">Saltar paso</Text>
      </Button>
    </View>
  );
};

export default StepTwo;

