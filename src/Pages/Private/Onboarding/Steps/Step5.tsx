import {Box, Checkbox, Divider, ScrollView, Text} from 'native-base';
import React, {FC, useEffect, useState} from 'react';
import {Controller} from 'react-hook-form';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import colors from '../../../../Constants/colors';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import {TYC} from '../constants';
import {useOnboardingContext} from '../OnboardingContext';
import StepLayout from './StepLayout';
import useMe from '../../../../Shared/Hooks/useMe';

const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeSyntheticEvent<NativeScrollEvent>['nativeEvent']) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const Step5: FC = () => {
  const {user} = useMe();
  const {form} = useOnboardingContext();
  const watchScroll = form?.watch('hasReachTycEnd');

  const [hasReadedTyc, setHasReadedTyc] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isCloseToBottom(event.nativeEvent)) {
      form?.setValue('hasReachTycEnd', true);
    }
  };

  const handleCompleteOnboarding = async () => {
    setLoading(true);
    if (form && user) {
      try {
        await firestore()
          .collection('Users')
          .doc(user.uid)
          .set(form?.getValues());
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (watchScroll === true) {
      setHasReadedTyc(true);
    }
  }, [watchScroll]);

  if (form) {
    const {control} = form;

    return (
      <StepLayout
        nextStepButton={false}
        title="Terminos y condiciones"
        subtitle="Por favor lea atentamente los términos y condiciones sobre el uso de la aplicación, al finalizar podrá continuar.">
        <Box bg={colors.bgPrimaryDark} p={6} borderRadius={12}>
          <ScrollView
            height="250px"
            onScroll={event => handleScroll(event)}
            scrollEventThrottle={400}>
            <Text fontSize="xs">{TYC}</Text>
          </ScrollView>
          <Divider mt={6} mb={4} />
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            alignItems="center"
            justifyContent="space-between">
            <Text fontSize="sm" bold maxW="80%" lineHeight={5}>
              He leido y acepto los terminos y condiciones
            </Text>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <Checkbox
                  mr={1}
                  isDisabled={!hasReadedTyc}
                  onChange={onChange}
                  isChecked={value}
                  accessibilityLabel="He leido y acepto terminos y condiciones"
                  value="legal"
                  _dark={true}
                />
              )}
              name="legal"
              defaultValue={false}
            />
          </Box>
        </Box>
        <Box marginTop={6}>
          <PrimaryButton
            loading={loading}
            disabled={!form.watch('legal')}
            buttonProps={{onPress: handleCompleteOnboarding}}
            label="Finzalizar"
          />
        </Box>
      </StepLayout>
    );
  } else {
    return null;
  }
};

export default Step5;
