import {FormControl, Input, Stack} from 'native-base';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {useOnboardingContext} from '../OnboardingContext';
import StepLayout from './StepLayout';

const Step4: FC = () => {
  const {form} = useOnboardingContext();

  if (form) {
    const {control} = form;

    return (
      <StepLayout>
        <FormControl>
          <Stack>
            <FormControl.Label>Calle</FormControl.Label>
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
                />
              )}
              name="street"
              defaultValue=""
            />
          </Stack>
        </FormControl>

        <FormControl>
          <Stack>
            <FormControl.Label>Número</FormControl.Label>
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
              name="streetNumber"
              defaultValue=""
            />
          </Stack>
        </FormControl>

        <FormControl>
          <Stack>
            <FormControl.Label>Piso / depto</FormControl.Label>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  size="sm"
                  marginBottom={4}
                  isFullWidth
                />
              )}
              name="flat"
              defaultValue=""
            />
          </Stack>
        </FormControl>
      </StepLayout>
    );
  } else {
    return null;
  }
};

export default Step4;
