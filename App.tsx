import React, {useState} from 'react';
import {PrivatePages, PublicPages} from './src/Pages';

const App = () => {
  const [user, setUser] = useState(false);

  if (user) {
    return <PrivatePages />;
  } else {
    return <PublicPages />;
  }
};

export default App;
