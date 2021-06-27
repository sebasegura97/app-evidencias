import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {PublicLayout} from '../../Shared/Layout';

const Public = () => {
  return (
    <NativeRouter>
      <PublicLayout>
        <Route path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </PublicLayout>
    </NativeRouter>
  );
};

export default Public;
