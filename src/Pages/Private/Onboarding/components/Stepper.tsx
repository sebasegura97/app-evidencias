import {Text} from 'native-base';
import React from 'react';
import {TOTAL_STEPS} from '../constants';
import {useOnboardingContext} from '../OnboardingContext';

const Stepper = () => {
  const {currentStep} = useOnboardingContext();
  return (
    <Text textAlign="center" marginBottom={5}>
      Paso {currentStep} de {TOTAL_STEPS}
    </Text>
  );
};

export default Stepper;
