import {Box, Heading, Text} from 'native-base';
import React, {FC} from 'react';
import PrimaryButton from '../../../../Shared/PrimaryButton';
import Stepper from '../components/Stepper';
import {useOnboardingContext} from '../OnboardingContext';

interface StepLayoutProps {
  buttonLabel?: string;
  title?: string;
  subtitle?: string;
  nextStepButton?: boolean;
}

const StepLayout: FC<StepLayoutProps> = ({
  children,
  buttonLabel = 'Continuar',
  title = 'Registro',
  subtitle,
  nextStepButton = true,
}) => {
  const {handleNextStep} = useOnboardingContext();

  return (
    <Box
      alignItems="center"
      flex={1}
      marginTop="auto"
      marginBottom="auto"
      position="relative">
      <Heading marginBottom={2}> {title} </Heading>
      {subtitle && (
        <Text fontSize="md" marginBottom={4}>
          {subtitle}{' '}
        </Text>
      )}
      <Stepper />
      <Box position="relative" width="100%">
        {children}
      </Box>
      {nextStepButton && (
        <Box marginTop={12}>
          <PrimaryButton
            buttonProps={{onPress: handleNextStep}}
            label={buttonLabel}
          />
        </Box>
      )}
    </Box>
  );
};

export default StepLayout;
