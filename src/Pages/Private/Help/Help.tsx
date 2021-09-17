import React from 'react';
import {View, Heading} from 'native-base';
import AskForm from './components/AskForm';
import FAQ from './components/FAQ';

const Help = () => {
  return (
    <View>
      <Heading mb={4} textAlign="center">
        {' '}
        Ayuda{' '}
      </Heading>
      <AskForm />
      <FAQ />
    </View>
  );
};

export default Help;
