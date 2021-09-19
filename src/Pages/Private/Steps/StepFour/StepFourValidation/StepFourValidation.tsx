import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column, ScrollView} from 'native-base';
import { useHistory, useLocation } from 'react-router-native';
import PrimaryButton from '../../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../../Models/EvidenceModel';

const StepFourValidation = () => {

  const history = useHistory();
  const location = useLocation();

  let model:EvidenceModel = location.state as EvidenceModel;

  const handleGoBack = () => history.goBack();
  const handleContinue = () => history.push({
    pathname:"/stepsVerification",
    state:model,
  });

  const generateChildren = () => {
    let array:any[] = [];
    model.audios.forEach(element => {
      array.push(audioBox(element["name"],element["fileCopyUri"]));
    });
    return array;
  }

  // const generateTestChildren = () => {
  //   let array:any[] = [];
  //   for (let i:number = 0; i<10;i++){
  //     array.push(audioBox(i.toString() + " NAME", i.toString()));
  //   }
  //   return array;
  // }

  const audioBox = (fileName:string, key:string) => {
    return (
      <Box key={key} marginTop="5px" marginBottom="5px" width="100%" backgroundColor="#010121" style={{flexDirection:"row", borderRadius:15}}>
        <Box style={{flex:0, borderRadius:15}} height="80px" width="100px"  justifyContent="center" alignItems="center">
          <Image alt=" " resizeMode="contain" size="20" source={require('../assets/icon_audio.png')}></Image>
        </Box>
        <Box paddingLeft="0" paddingRight="5" style={{flex:1, flexDirection:"column", justifyContent:"space-evenly"}}  >
          <Text fontSize="sm">{fileName}</Text>
        </Box>
    </Box>
    );
  }

  return (
    <View alignItems="center">
      <Heading>Paso 4</Heading>
      <Text textAlign="center" marginBottom="30px">
        Aquí deberás seleccionar audios
      </Text>
      <ScrollView horizontal={false} marginBottom="20px" marginTop="20px" width="100%" children={generateChildren()} />
      <Text marginTop="20px">Cargar audios?</Text>
      <PrimaryButton label="Confirmar" buttonProps={{onPress:handleContinue}} />
      <Button backgroundColor="transparent" onPress={handleGoBack}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>
    </View>
  );
};

export default StepFourValidation;


