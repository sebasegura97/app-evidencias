import React, {useState} from 'react';

import firestore from '@react-native-firebase/firestore';
import {
  Box,
  FormControl,
  Image,
  Input,
  Stack,
  Text,
  TextArea,
} from 'native-base';

import colors from '../../../../../Constants/colors';
import {Controller, useForm} from 'react-hook-form';
import AlternativeButton from '../../../../../Shared/AlternativeButton';

interface FormData {
  reason: string;
  question: string;
}

const AskForm = () => {
  const {control, getValues} = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [hasMadeQuestion, setHasMadeQuestion] = useState(false);

  const handleSubmit = async () => {
    if (!loading) {
      setLoading(true);
      const data = getValues();
      await firestore().collection('Questions').add(data);
    }
    setLoading(false);
    setHasMadeQuestion(true);
  };

  if (hasMadeQuestion) {
    return (
      <Box
        position="relative"
        width="100%"
        padding={12}
        borderRadius={8}
        backgroundColor={colors.bgPrimaryDark}>
        <Image
          resizeMode="contain"
          alt="background"
          margin="auto"
          height={180}
          source={require('./assets/success-question.png')}
        />
        <Text fontSize="lg" textAlign="center" marginTop={4} marginBottom={4}>
          Enviado
        </Text>
        <Text fontSize="sm" textAlign="center">
          Pronto nos pondremos en contacto contigo para resolver tus
          inquietudes.
        </Text>
      </Box>
    );
  }

  return (
    <Box>
      <Text fontSize="sm" textAlign="center" marginBottom={4}>
        Completa este formulario y te responderemos a la brevedad, o desliza
        para ver las preguntas mas frecuentes
      </Text>
      <FormControl>
        <Stack>
          <FormControl.Label>Motivo</FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                size="sm"
                marginBottom={2}
                isFullWidth
              />
            )}
            name="reason"
            defaultValue=""
          />
        </Stack>
      </FormControl>
      <FormControl>
        <Stack>
          <FormControl.Label>Pregunta</FormControl.Label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextArea
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                size="sm"
                marginBottom={4}
                h="140px"
                numberOfLines={4}
                isFullWidth
              />
            )}
            name="question"
            defaultValue=""
          />
        </Stack>
      </FormControl>
      <Box marginLeft="auto">
        <AlternativeButton
          label="Enviar"
          buttonProps={{
            disabled: loading,
            onPress: handleSubmit,
          }}
        />
      </Box>
    </Box>
  );
};

export default AskForm;
