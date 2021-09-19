import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  Box,
  Heading,
  Image,
  Stack,
  Button,
  Row,
  Column,
  ScrollView,
} from 'native-base';
import {useHistory, useLocation} from 'react-router-native';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../Models/EvidenceModel';
import {utils} from '@react-native-firebase/app';

const StepsVerification = () => {
  const history = useHistory();
  const location = useLocation();

  let model: EvidenceModel = location.state as EvidenceModel;
  const fileSplit: [string] = model.screenCapture?.result?.outputUrl
    ?.toString()
    .split('/');

  const handleGoBack = () => {
    history.replace('/stepsInfo');
  };

  const handleContinue = () => {
    history.push({
      pathname: '/stepsFinish',
      state: model,
    });
  };

  const generateVideoChildren = () => {
    let array: any[] = [];
    model.videos.forEach(element => {
      array.push(
        videoBox(element.fileCopyUri, element.name, element.fileCopyUri),
      );
    });
    return array;
  };

  const generateImageChildren = () => {
    let array: any[] = [];
    model.images.forEach(element => {
      array.push(
        imageBox(element.fileCopyUri, element.name, element.fileCopyUri),
      );
    });
    return array;
  };

  const generateAudioChildren = () => {
    let array: any[] = [];
    model.audios.forEach(element => {
      array.push(audioBox(element.name, element.fileCopyUri));
    });
    return array;
  };

  const audioBox = (fileName: string, key: string) => {
    return (
      <Box
        key={key}
        marginTop="5px"
        marginBottom="5px"
        width="100%"
        backgroundColor="#010121"
        style={{flexDirection: 'row', borderRadius: 15}}>
        <Box
          style={{flex: 0, borderRadius: 15}}
          height="80px"
          width="100px"
          justifyContent="center"
          alignItems="center">
          <Image
            alt=" "
            resizeMode="contain"
            source={require('./assets/icon_audio.png')}
          />
        </Box>
        <Box
          paddingLeft="0"
          paddingRight="5"
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          <Text fontSize="sm">{fileName}</Text>
        </Box>
      </Box>
    );
  };

  const imageBox = (path: string, name: string, key: string) => {
    const fileSplit: string[] = path.split('/');
    const fileName: string =
      fileSplit[fileSplit.length - 2] + '/' + fileSplit[fileSplit.length - 1];
    console.log('file://' + utils.FilePath.CACHES_DIRECTORY + '/' + fileName);
    return (
      <Box
        key={key}
        alignItems="center"
        marginTop="15px"
        marginBottom="15px"
        justifyContent="flex-start"
        marginLeft="10px"
        marginRight="10px"
        position="relative"
        maxWidth="150px"
        maxHeight="250">
        <Image
          alt="Couldn't find file "
          source={{
            uri: 'file://' + utils.FilePath.CACHES_DIRECTORY + '/' + fileName,
          }}
          size="150px"
          //source={require('./assets/icon_image.png')}
        />
        <Text fontSize="xs" marginTop="10px">
          {name}
        </Text>
      </Box>
    );
  };

  const videoBox = (path: string, name: string, key: string) => {
    return (
      <Box
        key={key}
        alignItems="center"
        marginTop="15px"
        marginBottom="15px"
        justifyContent="flex-start"
        marginLeft="10px"
        marginRight="10px"
        position="relative"
        maxWidth="150px"
        maxHeight="250">
        <Image
          alt=" "
          //source={{uri:path}}
          source={require('./assets/icon_video.png')}
        />
        <Text fontSize="xs" marginTop="10px">
          {name}
        </Text>
      </Box>
    );
  };

  return (
    <View alignItems="center">
      <Heading>Verificación</Heading>
      <Text marginTop="10px" marginBottom="10px" textAlign="center">
        Podrás confirmar o volver a cargar archivos
      </Text>
      <Text marginTop="10px" marginBottom="10px">
        Grabación de pantalla
      </Text>
      <Image
        size="150px"
        resizeMode="contain"
        alt=" "
        source={require('./assets/icon_video.png')}
      />
      <Box
        width="100%"
        marginBottom="15px"
        marginTop="10px"
        alignItems="center">
        <Text marginX="10px" fontSize="xs" textAlign="left">
          {fileSplit[fileSplit.length - 1]}
        </Text>
      </Box>
      <Text marginTop="10px" marginBottom="10px">
        Fotos seleccionadas
      </Text>
      <ScrollView horizontal={true} children={generateImageChildren()} />
      <Text marginTop="10px" marginBottom="10px">
        Videos seleccionados
      </Text>
      <ScrollView horizontal={true} children={generateVideoChildren()} />
      <Text marginTop="15px" marginBottom="10px">
        Audios seleccionados
      </Text>
      <ScrollView width="100%" children={generateAudioChildren()} />
      <Text marginTop="10px" marginBottom="10px">
        ¿Está todo bien?
      </Text>
      <PrimaryButton
        label="Confirmar"
        buttonProps={{onPress: handleContinue}}
      />
      <Button
        marginBottom="10px"
        backgroundColor="transparent"
        onPress={handleGoBack}>
        <Text fontSize="sm">Volver a elegir</Text>
      </Button>
    </View>
  );
};

export default StepsVerification;
