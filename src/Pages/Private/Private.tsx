import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import Profile from './Profile';
import Home from './Home';
import Help from './Help';
import {PrivateLayout} from '../../Shared/Layout';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import StepFour from './Steps/StepFour';
import StepsInfo from './Steps/StepsInfo/StepsInfo';
import StepOneValidation from './Steps/StepOne/StepOneValidation';
import StepTwoValidation from './Steps/StepTwo/StepTwoValidation';
import StepThreeValidation from './Steps/StepThree/StepThreeValidation';
import StepFourValidation from './Steps/StepFour/StepFourValidation';
import StepsVerification from './Steps/StepsVerification';
import StepsFinish from './Steps/StepsFinish';

const Private = () => {
  return (
    <NativeRouter>
      <PrivateLayout>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/help" component={Help} />

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
    </NativeRouter>
  );
};

export default Private;
