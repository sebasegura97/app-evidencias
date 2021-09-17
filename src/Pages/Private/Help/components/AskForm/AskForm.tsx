import {Box, FormControl, Input, Stack, Text, TextArea} from 'native-base';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';

interface FormData {
  reason: string;
  question: string;
}

const AskForm = () => {
  const {control} = useForm<FormData>();

  return (
    <Box>
      <Text fontSize="sm" textAlign="center">
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
    </Box>
  );
};

export default AskForm;
