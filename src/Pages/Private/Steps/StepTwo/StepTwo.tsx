import React from 'react';
import {Text, Box, Heading, Image, Stack, Button} from 'native-base';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import * as ImagePicker from 'react-native-image-picker';
import { useHistory } from 'react-router-native';


interface Action {
  title: string;
  type:'library';
  options: ImagePicker.ImageLibraryOptions;
}

const action: Action = 
  {
    title: 'Selecciona imagenes',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    },
  };


const StepTwo = () => {

  const history = useHistory();
  const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = React.useCallback((options) => {
    ImagePicker.launchImageLibrary(options, setResponse);
  }, []);

  return (
    <Stack alignItems="center">
      <Heading>Paso 2</Heading>
      <Text textAlign="center">
        Aquí deberás seleccionar fotos
      </Text>
      <Box position="relative" width="180px">
        <Image
          resizeMode="contain"
          alt="background"
          height={350}
          source={require('./assets/stepTwo.png')}
        />
      </Box>
      <PrimaryButton onPress={() => onButtonPress(action.options)} />
      <Button onPress={()=>{history.push("/stepThree")}}>Saltar</Button>
    </Stack>
  );
};

export default StepTwo;

