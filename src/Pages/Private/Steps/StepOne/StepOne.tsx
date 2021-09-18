import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import { useHistory, useLocation } from 'react-router-native';
import { useEffect } from 'react';
import EvidenceModel from '../../../../Models/EvidenceModel';

// @ts-ignore 1
import { showFloatingBubble, hideFloatingBubble, requestPermission, initialize } from 'react-native-floating-bubble'
import { DeviceEventEmitter } from 'react-native';



const StepOne = () => {
  
  const location = useLocation();  
  const history = useHistory();
  const [response, setResponse] = React.useState<any>(null);
  const [buttonIsEnabled, setButtonIsEnabled] = React.useState<any>(false);

  let model:EvidenceModel = location.state as EvidenceModel;

  useEffect(
    ()=>{
      if (response!=null){
        console.log(response.toString());
        model.screenCapture = response;
        history.push({
          pathname: "/stepOneValidation",
          state: model,
        });
      }
    });

    DeviceEventEmitter.addListener("floating-bubble-press", () => {
      // What to do when user press the bubble
      handleStop();
      
    });
   

    function handleRecord(){
      requestPermission()
      .then(() => console.log("Permission Granted"))
      .catch(() => {
        console.log("Permission is not granted");
        return;
      })
      
      console.log("RECORD!");
      setButtonIsEnabled(true);
      RecordScreen.startRecording().then(()=>{
        initialize()
        .then(() => console.log("Initialized the bubble mange"));
        showFloatingBubble().then(()=>{console.log("Showing bubble")});
      })
      .catch((error:any) => {console.error(error); setButtonIsEnabled(false)});
    }
    
    async function handleStop(){
        hideFloatingBubble();
        const res = await RecordScreen.stopRecording().catch((error:any) => Alert.alert(error));
        Alert.alert("Grabacion guardada en " + "+res.result.outputURL")
        if (res){
            const url = res.result.outputURL;
        }
        //alert(res)
        RecordScreen.clean();
        setResponse(res);

    }

  return (
    <View alignItems="center">
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
      <Text>¿Comenzar captura?</Text>
      <PrimaryButton label="Capturar" buttonProps={{onPress:handleRecord}} />
      <Button disabled={!buttonIsEnabled} backgroundColor="transparent" onPress={()=>handleStop()}>
        <Text fontSize="sm" color={buttonIsEnabled ? "white" : "transparent"}>STOP</Text>
      </Button>
    </View>
  );
};

export default StepOne;
