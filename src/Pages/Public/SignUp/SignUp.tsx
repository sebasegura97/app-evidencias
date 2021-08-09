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

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | undefined | string>(null);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({mode: 'onSubmit'});

  const history = useHistory();

  const onSubmit = handleSubmit(async ({email, password}) => {
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setLoading(false);
      if (error.code === 'auth/email-already-in-use') {
        setError('El email ingresado ya se encuentra en uso.');
      }
      console.error(error);
    }
  });

  const handleLogin = () => {
    history.push('/sign-in');
  };

  return (
    <View alignItems="center">
      <Heading marginTop={12} marginBottom={16}>
        {' '}
        Registro{' '}
      </Heading>
      <Box position="relative" width="100%">
        <FormControl>
          <Stack>
            <FormControl.Label>Email</FormControl.Label>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Ingrese una dirección de email',
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
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
            {errors.email?.message && (
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
                minLength: 6,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  type="password"
                  size="sm"
                  marginBottom={4}
                  isFullWidth
                  placeholder="********"
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
            onPress={handleLogin}
            loading={loading}
            label="Iniciar sesión"
          />
        </Box>
      </Box>
    </View>
  );
};

export default Signup;
