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
        </PrivateLayout>
      </AppContextProvider>
    </NativeRouter>
  );
};

export default Private;
