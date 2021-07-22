import React from 'react';
import {View, Text, Box, Heading, Image, Stack, Button, ScrollView} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import RecordScreen from 'react-native-record-screen';
import { Alert } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { useHistory } from 'react-router-native';


interface Action {
  title: string;
  type:'library';
  options: ImagePicker.ImageLibraryOptions;
}

const action: Action = 
  {
    title: 'Select Video',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'video',
    },
  };

  const StepThree = () => {
  const history = useHistory();

  const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = React.useCallback((options) => {
    ImagePicker.launchImageLibrary(options, setResponse);
  }, []);

  return (
    <Stack alignItems="center">
      <Heading>Paso 3</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar videos
      </Text>
      <Box position="relative" width="200px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/stepThree.png')}
        />
      </Box>
      <PrimaryButton onPress={() => onButtonPress(action.options)} />
      <Button onPress={()=>{history.push("/stepFour")}}>Saltar</Button>
    </Stack>
  );
};

export default StepThree;

