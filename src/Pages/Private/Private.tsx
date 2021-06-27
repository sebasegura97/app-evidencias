import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import Profile from './Profile';
import Home from './Home';
import Help from './Help';
import {PrivateLayout} from '../../Shared/Layout';

const Private = () => {
  return (
    <NativeRouter>
      <PrivateLayout>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/help" component={Help} />
      </PrivateLayout>
    </NativeRouter>
  );
};

export default Private;
