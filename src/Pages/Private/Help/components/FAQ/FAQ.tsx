import React from 'react';
import {Box, Text} from 'native-base';
import Collapsable from '../../../../../Shared/Collapsable';
import {Question} from '../../types';

interface FAQProps {
  questions: Question[];
}

const FAQ: React.FC<FAQProps> = ({questions}) => {
  return (
    <Box>
      <Text textAlign="center" fontSize="xl" marginBottom={4} bold>
        {' '}
        Preguntas Frecuentes{' '}
      </Text>
      {questions.length &&
        questions.map(({title, body}) => {
          if (title && body) {
            return (
              <Box marginBottom={2}>
                <Collapsable title={title} body={body} />
              </Box>
            );
          }
        })}
    </Box>
  );
};

export default FAQ;
