import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, ScrollView} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { useHistory } from 'react-router-native';
import DocumentPicker from 'react-native-document-picker'
import { useEffect } from 'react';



  const StepThree = () => {

    useEffect(
      ()=>{
        if (response!=null){
          console.log(response.toString());
          history.push("/stepThreeValidation");
        }
      }
      );

    async function handleSelectVideo() {
      try {
        const results = await DocumentPicker.pickMultiple({
          type: [DocumentPicker.types.video],
          
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
        history.push("/stepThreeValidation");
      }
      
    }
  const history = useHistory();

  const [response, setResponse] = React.useState<any>(null);

  return (
    <Stack alignItems="center">
      <Heading>Paso 3</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar videos
      </Text>
      <Box position="relative" width="200px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/stepThree.png')}
        />
      </Box>
      <PrimaryButton onPress={() => handleSelectVideo()} />
      <Button backgroundColor="transparent" onPress={()=>{history.push("/stepFour")}}>
        <Text fontSize="sm">Saltar paso</Text>
      </Button>
    </Stack>
  );
};

export default StepThree;
