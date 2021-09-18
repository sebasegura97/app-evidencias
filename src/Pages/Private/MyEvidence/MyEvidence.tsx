import React from 'react';
import {View, Text, Box, Stack, FormControl, Row, Image, Button, Column} from 'native-base';
import {useState} from 'react';
import { useHistory } from 'react-router-native';

const MyEvidence = () => {

  const history = useHistory();
  
  const handleEvidenceTap = () => {
    console.log("HELLOOO");
    history.push({
      pathname:"/myEvidenceDetail",
    });
  }


  const evidenceBox = (name:String, sendDate:String, state:String, onPress:()=>void) =>
{    return(
      <Box onTouchStart={onPress} marginTop="10px" marginBottom="10px" width="100%" backgroundColor="#010121" style={{flexDirection:"row", borderRadius:15}}>
        <Box style={{flex:0, borderRadius:15}} height="100px" width="100px" backgroundColor="red" />
        <Box paddingLeft="5" paddingRight="5" style={{flex:1, flexDirection:"column", justifyContent:"space-evenly"}}  >
          <Text>{name}</Text>
          <Text fontSize="xs">{sendDate}</Text>
          <Text fontSize="xs">{state}</Text>
        </Box>
    </Box>
    );}
  

  return (
    <View>
      <Text fontSize="xl" textAlign="center">Mi Evidencia</Text>
      <Box height="20px"></Box>
      <Box justifyContent="center" width="100%" alignItems="center"  marginTop="25px">
        {evidenceBox("Name","sendDate","state",handleEvidenceTap)}
      </Box>
      <Box height="20px"></Box>

    </View>
  );
};

export default MyEvidence;
