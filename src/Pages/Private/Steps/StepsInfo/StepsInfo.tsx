import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, Row, Column} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';

function infoRow(number:String, title:String, subtitle:String){
    return (
    <Row alignItems="center" justifyContent = "flex-start" width="250px" marginY="10px">
        <Box width = "50px" >
            <Text textAlign="center" color="white" fontSize="xl">{number}</Text>
        </Box>
        <Column>
            <Text fontSize="md">{title}</Text>
            <Text fontSize="xs">{subtitle}</Text>
        </Column>
    </Row>
    );
}

const StepsInfo = () => {

  const history = useHistory();

  return (
    <Stack alignItems="center">
      <Heading>Pasos</Heading>
      <Text textAlign="center">
        Aquí encontraras los pasos a seguir para cargar tu evidencia
      </Text>
      <Box height="30px"></Box>
      <Box position="relative" width="90%"  >
        {infoRow("1","Capturar pantalla","En este paso deberás capturar tu pantalla con la evidencia que consideres relevante")}
        {infoRow("2","Seleccionar fotos","En este paso deberás cargar todas las imágenes relacionadas con la evidencia que estas enviando (chats, fotos, etc.)")}
        {infoRow("3","Seleccionar videos","En este paso deberás cargar todos los videos relacionados con la evidencia que estas enviando")}
        {infoRow("4","Seleccionar audios","En este paso deberás cargar todos los audios relacionados con la evidencia que estas enviando")}
      </Box>
      <Box height="50px"></Box>
      <PrimaryButton onPress={()=>{history.push("/stepOne")}} />
      <Box height="30px"></Box>
    </Stack>
  );
};

export default StepsInfo;


