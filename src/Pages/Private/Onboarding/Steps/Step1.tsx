import {FormControl, Input, Stack} from 'native-base';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {useOnboardingContext} from '../OnboardingContext';
import StepLayout from './StepLayout';

const Step1: FC = () => {
  const {form} = useOnboardingContext();

  if (form) {
    const {control, formState} = form;
    const {errors} = formState;

    return (
      <StepLayout>
        <FormControl>
          <Stack>
            <FormControl.Label>Nombre</FormControl.Label>
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
                  autoCompleteType="name"
                />
              )}
              name="name"
              defaultValue=""
            />
            {errors.name && (
              <FormControl.ErrorMessage>
                Ingrese un nombre valido.
              </FormControl.ErrorMessage>
            )}
          </Stack>
        </FormControl>

        <FormControl>
          <Stack>
            <FormControl.Label>Apellido</FormControl.Label>
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
                  autoCompleteType="name"
                />
              )}
              name="lastname"
              defaultValue=""
            />
            {errors.lastname && (
              <FormControl.ErrorMessage>
                Ingrese un apellido valido.
              </FormControl.ErrorMessage>
            )}
          </Stack>
        </FormControl>

        <FormControl>
          <Stack>
            <FormControl.Label>DNI</FormControl.Label>
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
                  keyboardType="number-pad"
                />
              )}
              name="dni"
              defaultValue=""
            />
            {errors.lastname && (
              <FormControl.ErrorMessage>
                Ingrese un dni valido.
              </FormControl.ErrorMessage>
            )}
          </Stack>
        </FormControl>
      </StepLayout>
    );
  } else {
    return null;
  }
};

export default Step1;
