import React, {useEffect} from 'react';

import {useHistory, useLocation} from 'react-router-native';
import {Text, Box, Heading, Image, Button, View} from 'native-base';
import DocumentPicker from 'react-native-document-picker';

import PrimaryButton from '../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../Models/EvidenceModel';
import {Alert} from 'react-native';
import useUploadFile from '../../../../Shared/Hooks/useUploadFile';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const StepTwo = () => {
  const history = useHistory();
  const [response, setResponse] = React.useState<any>(null);
  const location = useLocation();
  const {uploadSingleFile, loadingStatus, loading} = useUploadFile();

  let model: EvidenceModel = location.state as EvidenceModel;

  useEffect(() => {
    if (response != null) {
      history.push({
        pathname: '/stepTwoValidation',
        state: model,
      });
    }
  });

  const handleSkipStep = () => {
    model.images = [];
    history.push({
      pathname: '/stepThree',
      state: model,
    });
  };

  async function handleSelectImage() {
    try {
      DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
        mode: 'import',
      }).then(response => {
        uploadSingleFile(response);
        // uploadMultipleFiles(response);
      });
    } catch (err) {
      Alert.alert('ERROR');
      setResponse([]);
    }
  }

  return (
    <View alignItems="center">
      <Heading>Paso 2</Heading>
      <Text textAlign="center">Aquí deberás seleccionar fotos</Text>
      <Box position="relative" width="180px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/stepTwo.png')}
        />
      </Box>
      <PrimaryButton
        label="Ver galeria"
        buttonProps={{onPress: handleSelectImage}}
      />
      <Button
        backgroundColor="transparent"
        onPress={handleSkipStep}
        isLoading={loading}>
        <Text fontSize="sm">Saltar paso</Text>
      </Button>
      {loading && <Text fontSize="sm"> {loadingStatus}</Text>}
    </View>
  );
};

export default StepTwo;
