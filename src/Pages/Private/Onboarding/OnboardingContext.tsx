import React, {createContext, FC, useContext, useEffect} from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-native';

import firestore from '@react-native-firebase/firestore';

import {defaultFormData, TOTAL_STEPS} from './constants';
import {FormData, OnboardingContextType} from './types';
import useMe from '../../../Shared/Hooks/useMe';

export const OnboardingContext = createContext<OnboardingContextType>({
  currentStep: 1,
  handleNextStep: () => {},
});

export const OnboardingContextProvider: FC = ({children}) => {
  const {user} = useMe();
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

  useEffect(() => {
    const fetchData = async () => {
      if (form && user?.uid) {
        const result = await firestore()
          .collection(user?.uid)
          .doc('Onboarding')
          .get();

        form.reset(result.data());
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
