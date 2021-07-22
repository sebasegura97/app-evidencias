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

const Private = () => {
  return (
    <NativeRouter>
      <PrivateLayout>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/help" component={Help} />

        <Route path="/stepOne" component={StepOne} />
        <Route path="/stepTwo" component={StepTwo} />
        <Route path="/stepThree" component={StepThree} />
        <Route path="/stepFour" component={StepFour} />
        
      </PrivateLayout>
    </NativeRouter>
  );
};

export default Private;
