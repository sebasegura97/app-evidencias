import {CheckIcon, FormControl, Input, Select, Stack, Text} from 'native-base';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import colors from '../../../../Constants/colors';
import {useOnboardingContext} from '../OnboardingContext';
import StepLayout from './StepLayout';

const Step2: FC = () => {
  const {form} = useOnboardingContext();

  if (form) {
    const {control} = form;

    return (
      <StepLayout>
        <FormControl>
          <Stack>
            <FormControl.Label>Fecha de nacimiento</FormControl.Label>
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
                  placeholder="DD-MM-YYYY"
                />
              )}
              name="birthDate"
              defaultValue=""
            />
          </Stack>
        </FormControl>

        <FormControl>
          <Stack>
            <FormControl.Label>Número de teléfono</FormControl.Label>
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
              name="phoneNumber"
              defaultValue=""
            />
          </Stack>
        </FormControl>

        <FormControl>
          <Stack>
            <FormControl.Label>Genero</FormControl.Label>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, value}}) => (
                <Select
                  _actionSheetContent={{
                    zIndex: 100,
                  }}
                  selectedValue={value}
                  onValueChange={itemValue => {
                    onChange(itemValue);
                  }}
                  _selectedItem={{
                    bg: colors.primaryMain,
                    endIcon: <CheckIcon size={5} />,
                  }}>
                  <Select.Item label="No binario" value="NB" />
                  <Select.Item label="Femenino" value="F" />
                  <Select.Item label="Masculino" value="M" />
                </Select>
              )}
              name="gender"
              defaultValue=""
            />
          </Stack>
        </FormControl>
      </StepLayout>
    );
  } else {
    return <Text>No hay form</Text>;
  }
};

export default Step2;
