import React from 'react';
import {View, Text, Box, Stack, FormControl, Row, Image, Button, Column} from 'native-base';


const MyEvidenceDetail = () => {
return (
    <View>
      <Text marginTop="10px" fontSize="xl" textAlign="center">Evidencia Cargada</Text>
      <Box justifyContent="center" width="100%" alignItems="center"  marginTop="25px">
        <Text marginBottom="10px" marginTop="10px">Grabación de pantalla</Text>
        <Box marginBottom="10px" marginTop="10px" height="350px" width="100%" backgroundColor="red"></Box>
        <Text marginBottom="10px" marginTop="10px">Fotos seleccionadas</Text>
        <Box marginBottom="10px" marginTop="10px" height="350px" width="100%" backgroundColor="red"></Box>
        <Text marginBottom="10px" marginTop="10px">Videos seleccionados</Text>
        <Box marginBottom="10px" marginTop="10px" height="350px" width="100%" backgroundColor="red"></Box>
        <Text marginBottom="10px" marginTop="10px">Audios seleccionados</Text>
        <Box marginBottom="10px" marginTop="10px" height="350px" width="100%" backgroundColor="red"></Box>
      </Box>
    </View>
  );
};

export default MyEvidenceDetail;
