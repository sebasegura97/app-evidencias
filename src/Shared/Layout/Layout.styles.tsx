import React from 'react';
import {Box} from 'native-base';
import colors from '../../Constants/colors';

export const GradientBackground: React.FC = ({children}) => {
  return (
    <Box
      flex={1}
      p={4}
      bg={{
        linearGradient: {
          colors: [
            colors.bgPrimaryDark,
            colors.bgPrimaryMain,
            colors.bgPrimaryDark,
          ],
          start: [1, 1],
          end: [1, 0],
        },
      }}>
      {children}
    </Box>
  );
};
