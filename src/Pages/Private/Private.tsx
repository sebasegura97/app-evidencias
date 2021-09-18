import React from 'react';
import {NativeRouter, Route, Redirect} from 'react-router-native';

import {PrivateLayout} from '../../Shared/Layout';
import Profile from './Profile';
import Home from './Home';
import Help from './Help';
import Onboarding from './Onboarding';
import {AppContextProvider} from '../../Shared/AppContext/AppContex';
import useMe from '../../Shared/Hooks/useMe';
import MyEvidence from './MyEvidence';
import MyEvidenceDetail from './MyEvidence/MyEvidenceDetail/MyEvidenceDetail';
import StepsInfo from './Steps/StepsInfo';
import StepsVerification from './Steps/StepsVerification';
import StepsFinish from './Steps/StepsFinish';
import StepOne from './Steps/StepOne';
import StepOneValidation from './Steps/StepOne/StepOneValidation';
import StepTwo from './Steps/StepTwo';
import StepTwoValidation from './Steps/StepTwo/StepTwoValidation';
import StepThree from './Steps/StepThree';
import StepThreeValidation from './Steps/StepThree/StepThreeValidation';
import StepFour from './Steps/StepFour';
import StepFourValidation from './Steps/StepFour/StepFourValidation';

const Private = () => {
  const {profile} = useMe();

  return (
    <NativeRouter>
      <AppContextProvider>
        <PrivateLayout>
          {profile?.hasCompletedOnboarding ? (
            <Redirect from="/" to="/home" />
          ) : (
            <Redirect from="/" to="/onboarding/step1" />
          )}
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/help" component={Help} />
          <Route path="/onboarding" component={Onboarding} />
          <Route path="/myEvidence" component={MyEvidence} />
          <Route path="/myEvidenceDetail" component={MyEvidenceDetail} />

          <Route path="/stepsInfo" component={StepsInfo} />
          <Route path="/stepsVerification" component={StepsVerification} />
          <Route path="/stepsFinish" component={StepsFinish} />
          <Route path="/stepOne" component={StepOne} />
          <Route path="/stepOneValidation" component={StepOneValidation} />
          <Route path="/stepTwo" component={StepTwo} />
          <Route path="/stepTwoValidation" component={StepTwoValidation} />
          <Route path="/stepThree" component={StepThree} />
          <Route path="/stepThreeValidation" component={StepThreeValidation} />
          <Route path="/stepFour" component={StepFour} />
          <Route path="/stepFourValidation" component={StepFourValidation} />
        </PrivateLayout>
      </AppContextProvider>
    </NativeRouter>
  );
};

export default Private;
