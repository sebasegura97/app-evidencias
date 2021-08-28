import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type Me = FirebaseAuthTypes.User | null;

type UseMeReturnType = {
  user: Me;
  initializing: boolean;
};

const useMe = (): UseMeReturnType => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<Me | null>(null);

  // Handle user state changes
  function onAuthStateChanged(userData: Me) {
    setUser(userData);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    initializing,
  };
};

export default useMe;
