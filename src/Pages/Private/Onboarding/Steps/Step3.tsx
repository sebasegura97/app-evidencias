import {FormControl, Input, Stack} from 'native-base';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {useOnboardingContext} from '../OnboardingContext';
import StepLayout from './StepLayout';

const Step3: FC = () => {
  const {form} = useOnboardingContext();

  if (form) {
    const {control} = form;

    return (
      <StepLayout>
        <FormControl>
          <Stack>
            <FormControl.Label>Provincia</FormControl.Label>
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
              name="province"
              defaultValue=""
            />
          </Stack>
        </FormControl>

        <FormControl>
          <Stack>
            <FormControl.Label>Departamento</FormControl.Label>
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
              name="department"
              defaultValue=""
            />
          </Stack>
        </FormControl>

        <FormControl>
          <Stack>
            <FormControl.Label>Barrio</FormControl.Label>
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
              name="district"
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

export default Step3;
