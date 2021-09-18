import React, {useEffect, useState} from 'react';
import {View, Heading, Progress, Box} from 'native-base';
import firestore from '@react-native-firebase/firestore';

import AskForm from './components/AskForm';
import FAQ from './components/FAQ';
import {Question} from './types';

const Help = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await firestore().collection('FAQ').get();
      setQuestions(
        result.docs.map(doc => {
          return {
            title: doc.data().title,
            body: doc.data().body,
          };
        }),
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (questions.length) {
      setLoading(false);
    }
  }, [questions]);

  if (loading) {
    return <Progress />;
  }

  return (
    <View>
      <Heading mb={4} textAlign="center">
        {' '}
        Ayuda{' '}
      </Heading>
      <Box marginBottom={4}>
        <AskForm />
      </Box>
      {questions.length && <FAQ questions={questions} />}
    </View>
  );
};

export default Help;
