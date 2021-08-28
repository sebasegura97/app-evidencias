import React, {createContext, FC, useContext, useEffect} from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {defaultFormData, TOTAL_STEPS} from './constants';

import {FormData, OnboardingContextType} from './types';
import {useHistory} from 'react-router-native';

export const OnboardingContext = createContext<OnboardingContextType>({
  currentStep: 1,
  handleNextStep: () => {},
});

export const OnboardingContextProvider: FC = ({children}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const history = useHistory();

  const form = useForm<FormData>({
    defaultValues: defaultFormData,
  });

  const handleNextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(1);
    }
  };

  useEffect(() => {
    history.push(`/onboarding/step${currentStep}`);
    if (currentStep === 5) {
      history.push('/onboarding/tyc');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  return (
    <OnboardingContext.Provider
      value={{
        form,
        currentStep,
        handleNextStep,
      }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);
  return context;
};
