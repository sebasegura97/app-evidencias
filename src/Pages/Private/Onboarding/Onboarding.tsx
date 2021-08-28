import React from 'react';
import {useEffect} from 'react';
import {Redirect, Route} from 'react-router-native';
import {useAppContext} from '../../../Shared/AppContext/AppContex';
import {OnboardingContextProvider} from './OnboardingContext';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';

const Onboarding = () => {
  const {setShowHeader, setShowNavigation} = useAppContext();

  useEffect(() => {
    if (setShowHeader && setShowNavigation) {
      setShowHeader(false);
      setShowNavigation(false);
    }
  }, [setShowNavigation, setShowHeader]);

  return (
    <OnboardingContextProvider>
      <Redirect from="/onboarding" to="/onboarding/step1" />
      <Route path="/onboarding/step1" component={Step1} />
      <Route path="/onboarding/step2" component={Step2} />
      <Route path="/onboarding/step3" component={Step3} />
      <Route path="/onboarding/step4" component={Step4} />
      <Route path="/onboarding/tyc" component={Step5} />
    </OnboardingContextProvider>
  );
};

export default Onboarding;
