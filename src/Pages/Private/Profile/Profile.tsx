import React from 'react';
import {View, Text} from 'native-base';
import auth from '@react-native-firebase/auth';

import LinkButton from '../../../Shared/LinkButton';
import {useState} from 'react';

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const handleSignout = async () => {
    setLoading(true);
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text> Profile </Text>
      <LinkButton
        label="Cerrar sesión"
        loading={loading}
        onPress={handleSignout}
      />
    </View>
  );
};

export default Profile;
