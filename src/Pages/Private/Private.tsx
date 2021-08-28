import React from 'react';
import {NativeRouter, Route, Redirect} from 'react-router-native';

import {PrivateLayout} from '../../Shared/Layout';
import Profile from './Profile';
import Home from './Home';
import Help from './Help';
import Onboarding from './Onboarding';
import {AppContextProvider} from '../../Shared/AppContext/AppContex';
import useMe from '../../Shared/Hooks/useMe';

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
        </PrivateLayout>
      </AppContextProvider>
    </NativeRouter>
  );
};

export default Private;
