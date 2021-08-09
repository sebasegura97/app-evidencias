import React, {useState} from 'react';
import {View, Box, Input, Heading, FormControl, Stack, Text} from 'native-base';
import {useHistory} from 'react-router-native';
import auth from '@react-native-firebase/auth';
import {Controller, useForm} from 'react-hook-form';

import PrimaryButton from '../../../Shared/PrimaryButton';
import LinkButton from '../../../Shared/LinkButton';
import colors from '../../../Constants/colors';

type FormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | undefined | string>(null);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = handleSubmit(async ({email, password}) => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setLoading(false);
      if (error.code === 'auth/user-not-found') {
        setError('Usuario no encontrado.');
      }
      if (error.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta.');
      }
      if (error.code === 'auth/invalid-email') {
        setError('Ingrese una direccion de mail valida.');
      }
      console.error('error', error.code);
    }
  });

  const handleSignup = () => {
    history.push('/sign-up');
  };

  return (
    <View alignItems="center">
      <Heading marginTop={12} marginBottom={16}>
        {' '}
        Iniciar sesión{' '}
      </Heading>
      <Box position="relative" width="100%">
        <FormControl>
          <Stack>
            <FormControl.Label>Email</FormControl.Label>
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
                  marginBottom={4}
                  isFullWidth
                  placeholder="ejemplo@hotmail.com"
                />
              )}
              name="email"
              defaultValue=""
            />
            {errors.email && (
              <FormControl.ErrorMessage>
                Ingrese un email valido.
              </FormControl.ErrorMessage>
            )}
          </Stack>
        </FormControl>

        <FormControl>
          <Stack>
            <FormControl.Label>Contraseña</FormControl.Label>
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
                  marginBottom={4}
                  isFullWidth
                  placeholder="********"
                  type="password"
                />
              )}
              name="password"
              defaultValue=""
            />
            {errors.email && (
              <FormControl.ErrorMessage>
                Ingrese una contraseña valida.
              </FormControl.ErrorMessage>
            )}
          </Stack>
        </FormControl>
      </Box>
      {typeof error === 'string' && <Text color={colors.error}>{error}</Text>}
      <Box marginTop={12}>
        <PrimaryButton
          buttonProps={{
            onPress: onSubmit,
          }}
          loading={loading}
          label="Continuar"
        />
        <Box marginTop={2}>
          <LinkButton
            onPress={handleSignup}
            loading={loading}
            label="Registrarme"
          />
        </Box>
      </Box>
    </View>
  );
};

export default SignIn;
