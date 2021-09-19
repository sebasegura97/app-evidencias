import React from 'react';
import {
  View,
  Text,
  Box,
  Heading,
  Image,
  Stack,
  Button,
  ScrollView,
} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import {Alert} from 'react-native';
import {useHistory, useLocation} from 'react-router-native';
import DocumentPicker from 'react-native-document-picker';
import {useEffect} from 'react';
import EvidenceModel from '../../../../Models/EvidenceModel';

const StepThree = () => {
  const history = useHistory();
  const [response, setResponse] = React.useState<any>(null);
  const location = useLocation();

  let model: EvidenceModel = location.state as EvidenceModel;

  useEffect(() => {
    if (response != null) {
      model.videos = response;
      history.push({
        pathname: '/stepThreeValidation',
        state: model,
      });
    }
  });

  async function handleSelectVideo() {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.video],
        mode: 'open',
      });
      setResponse(results);
    } catch (err) {
      // if (DocumentPicker.isCancel(err)) {
      //   // User cancelled the picker, exit any dialogs or menus and move on
      // } else {
      //   Alert.alert(err);
      // }
      Alert.alert('ERROR');
      setResponse(null);
    }
  }
  const handleSkipStep = () => {
    model.videos = [];
    history.push({
      pathname: '/stepFour',
      state: model,
    });
  };

  return (
    <View alignItems="center">
      <Heading>Paso 3</Heading>
      <Text textAlign="center">Aquí deberás seleccionar videos</Text>
      <Box position="relative" width="200px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/stepThree.png')}
        />
      </Box>
      <PrimaryButton
        label="Ver videos"
        buttonProps={{onPress: handleSelectVideo}}
      />
      <Button backgroundColor="transparent" onPress={handleSkipStep}>
        <Text fontSize="sm">Saltar paso</Text>
      </Button>
    </View>
  );
};

export default StepThree;
