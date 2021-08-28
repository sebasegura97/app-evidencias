import React from 'react';
import useMe from './src/Shared/Hooks/useMe';

import {PrivatePages, PublicPages} from './src/Pages';

const App = () => {
  const {user} = useMe();

  if (user) {
    return <PrivatePages />;
  } else {
    return <PublicPages />;
  }
};

export default App;
