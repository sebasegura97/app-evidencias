import React, {useEffect} from 'react';
import useMe from './src/Hooks/useMe';

import {PrivatePages, PublicPages} from './src/Pages';

const App = () => {
  const {user} = useMe();

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  if (user) {
    return <PrivatePages />;
  } else {
    return <PublicPages />;
  }
};

export default App;
