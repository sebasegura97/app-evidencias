import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';



const StepOne = () => {

  const history = useHistory();

    function handleRecord(){
        RecordScreen.startRecording().catch((error) => console.error(error));
    }
    
    async function handleStop(){
        const res = await RecordScreen.stopRecording().catch((error) => Alert.alert(error));
        Alert.alert("Grabacion guardada en " + "+res.result.outputURL")
        if (res){
            const url = res.result.outputURL;
        }
        //alert(res)
        RecordScreen.clean();
    }

  return (
    <Stack alignItems="center">
      <Heading>Paso 1</Heading>
      <Text textAlign="center">
        Aquí deberás capturar tu pantalla
      </Text>
      <Box position="relative" width="250px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/stepOne.png')}
        />
      </Box>
      <PrimaryButton onPress={()=>{history.push("/stepTwo")}} />
    </Stack>
  );
};

export default StepOne;
