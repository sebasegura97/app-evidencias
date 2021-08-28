import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type Me = FirebaseAuthTypes.User | null;

type ProfileData = {
  hasCompletedOnboarding: boolean;
};

type UseMeReturnType = {
  user: Me;
  profile: ProfileData | undefined;
  initializing: boolean;
};

const useMe = (): UseMeReturnType => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<Me | null>(null);
  const [profile, setProfile] = useState<ProfileData | undefined>(undefined);

  // Handle user state changes
  async function onAuthStateChanged(meData: Me) {
    setUser(meData);
    if (meData) {
      const profileData = await firestore()
        .collection(meData?.uid)
        .doc('UserData')
        .get();
      if (profileData) {
        setProfile({
          hasCompletedOnboarding: profileData.data()?.hasCompletedOnboarding,
        });
      }
    }
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
    profile,
  };
};

export default useMe;
