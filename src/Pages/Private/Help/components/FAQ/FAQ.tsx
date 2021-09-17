import React from 'react';
import {Box, Text} from 'native-base';
import Collapsable from '../../../../../Shared/Collapsable';

const FAQ = () => {
  return (
    <Box>
      <Text textAlign="center" fontSize="xl" bold>
        {' '}
        Preguntas Frecuentes{' '}
      </Text>
      <Collapsable title="Pregunta 1" body="Respuesta" />
    </Box>
  );
};

export default FAQ;
