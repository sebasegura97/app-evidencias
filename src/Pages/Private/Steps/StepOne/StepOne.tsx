import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import { useEffect } from 'react';



const StepOne = () => {

  useEffect(
    ()=>{
      if (response!=null){
        console.log(response.toString());
        history.push("/stepOneValidation");
      }
    }
    );

  const history = useHistory();
  const [response, setResponse] = React.useState<any>(null);
  const [buttonIsEnabled, setButtonIsEnabled] = React.useState<any>(false);

    function handleRecord(){
      console.log("RECORD!");
      setButtonIsEnabled(true);
      RecordScreen.startRecording().catch((error) => {console.error(error); setButtonIsEnabled(false)});
      
    }
    
    async function handleStop(){
        const res = await RecordScreen.stopRecording().catch((error) => Alert.alert(error));
        Alert.alert("Grabacion guardada en " + "+res.result.outputURL")
        if (res){
            const url = res.result.outputURL;
        }
        //alert(res)
        RecordScreen.clean();
        setResponse(res);
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
      <Box height="50px"></Box>
      <Text>¿Comenzar captura?</Text>
      <Box height="10px"></Box>
      <PrimaryButton onPress={()=>handleRecord()} />
      <Button disabled={!buttonIsEnabled} backgroundColor="transparent" onPress={()=>handleStop()}>
        <Text fontSize="sm" color={buttonIsEnabled ? "white" : "transparent"}>STOP</Text>
      </Button>
    </Stack>
  );
};

export default StepOne;
