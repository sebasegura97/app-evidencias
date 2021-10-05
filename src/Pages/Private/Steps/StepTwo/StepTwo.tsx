import React from 'react';
import { Text, Box, Heading, Image, Button, View, Center } from 'native-base';
import { useHistory, useLocation } from 'react-router-native';

import DocumentPicker from 'react-native-document-picker';

import PrimaryButton from '../../../../Shared/PrimaryButton';
import EvidenceModel from '../../../../Models/EvidenceModel';
import useUploadFile from '../../../../Shared/Hooks/useUploadFile';

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const StepTwo = () => {
  const history = useHistory();
  const [response, setResponse] = React.useState<any>(null);
  const location = useLocation();
  const { loadingStatus, loading } = useUploadFile();

  let model: EvidenceModel = location.state as EvidenceModel;

  const handleSkipStep = () => {
    model.images = [];
    history.push({
      pathname: '/stepThree',
      state: model,
    });
  };

  async function handleSelectImage() {
    try {
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        allowMultiSelection: true,
        copyTo: 'cachesDirectory',
      });
      setResponse(results);
    } catch (err) {
      setResponse(null);
    }
  }

  return (
    <View>
      <Center>
        <Heading>Paso 2</Heading>
        <Text textAlign="center">Aquí deberás seleccionar fotos</Text>
        <Box position="relative" width="180px">
          <Image
            resizeMode="contain"
            alt="background"
            // height={350}
            h={350}
            source={require('./assets/stepTwo.png')}
          />
        </Box>
        <PrimaryButton
          label="Ver galeria"
          buttonProps={{ onPress: handleSelectImage }}
        />
        <Button
          bgColor='transparent'
          onPress={handleSkipStep}
          isLoading={loading}>
          <Text fontSize="sm">Saltar paso</Text>
        </Button>
        {loading && <Text fontSize="sm"> {loadingStatus}</Text>}
      </Center>

    </View>
  );
};

export default StepTwo;
