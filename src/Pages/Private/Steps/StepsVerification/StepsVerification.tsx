import React, { useEffect } from 'react';
import {View, Text, Box, Heading, Stack ,Button, Row, Column, ScrollView} from 'native-base';
import { useHistory, useLocation } from 'react-router-native';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../Models/EvidenceModel';
import { Image, Image as nativeImage } from 'react-native';





const StepsVerification = () => {

  const history = useHistory();
  const location = useLocation();

  let model:EvidenceModel = location.state as EvidenceModel;

  const handleGoBack = () => {
    history.replace("/stepsInfo");
  }

  const handleContinue = () => {
    history.push({
      pathname:"/stepsFinish",
      state:model,
    });
  }

  useEffect(
    ()=>{
      model != null ? console.log(model) : console.log("Null model");
    },
    []
  );

  const generateVideoChildren = () => {
    let array:any[] = [];
    model.videos.forEach(element => {
      array.push(imageBox(element["fileCopyUri"],element["fileCopyUri"]));
    });
    return array;
  }

  const generateImageChildren = () => {
    let array:any[] = [];
    model.images.forEach(element => {
      array.push(imageBox(element["fileCopyUri"],element["fileCopyUri"]));
    });
    return array;
  }

  const generateAudioChildren = () => {
    let array:any[] = [];
    model.audios.forEach(element => {
      array.push(audioBox(element["name"],element["fileCopyUri"]));
    });
    return array;
  }

  const audioBox = (fileName:string, key:string) => {
    return (
      <Box key={key} marginTop="5px" marginBottom="5px" width="100%" backgroundColor="#010121" style={{flexDirection:"row", borderRadius:15}}>
        <Box style={{flex:0, borderRadius:15}} height="80px" width="100px"  justifyContent="center" alignItems="center">
          <Image  resizeMode="contain"  source={require('./assets/icon_audio.png')}></Image>
        </Box>
        <Box paddingLeft="0" paddingRight="5" style={{flex:1, flexDirection:"column", justifyContent:"space-evenly"}}  >
          <Text fontSize="sm">{fileName}</Text>
        </Box>
    </Box>
    );
  }

  const imageBox = (path:string, key:string) => {
    return (
      <Box key={key} backgroundColor="red" marginLeft="5px" marginRight="5px" position="relative" width="150px" maxWidth="150px" minHeight="230px">
        {/* XQ MIER NO SE MUESTRA LA IMAGEN????? */}
        <Image
          //source={{uri:path}}
          source={{uri:path}}
        />
      </Box>
    );
  }

  return (
    <View alignItems="center">
      <Heading>Verificación</Heading>
      <Text marginTop="10px" marginBottom="10px" textAlign="center">
        Podrás confirmar o volver a cargar archivos
      </Text>
      <Text marginTop="10px" marginBottom="10px">Grabación de pantalla</Text>
      <Box marginTop="10px" marginBottom="10px" height="350px" width="100%" backgroundColor="red"></Box>
      <Text marginTop="10px" marginBottom="10px">Fotos seleccionadas</Text>
      <ScrollView horizontal={true} children={generateImageChildren()}/>
      <Text marginTop="10px" marginBottom="10px">Videos seleccionados</Text>
      <ScrollView horizontal={true} children={generateVideoChildren()}/>
      <Text marginTop="10px" marginBottom="10px">Audios seleccionados</Text>
      <ScrollView width="100%" children={generateAudioChildren()}/>
      <Text marginTop="10px" marginBottom="10px">¿Está todo bien?</Text>
      <PrimaryButton label="Confirmar" buttonProps={{onPress:handleContinue}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>

    </View>
  );
};

export default StepsVerification;


