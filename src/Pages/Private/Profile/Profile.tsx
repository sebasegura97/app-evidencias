import React, {useEffect} from 'react';
import {View, Text, Box, Stack, FormControl, Row, Image} from 'native-base';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {Input} from 'react-native-elements';
import {Controller, useForm} from 'react-hook-form';
import LinkButton from '../../../Shared/LinkButton';
import {useState} from 'react';
import AlternativeButton from '../../../Shared/AlternativeButton';
import {useHistory} from 'react-router-native';
import useMe from '../../../Shared/Hooks/useMe';

type FormData = {
  name: string;
  lastname: string;
  dni: string;
  birthDate: string;
  phoneNumber: string;
  gender: string;
  province: string;
  department: string;
  district: string;
  street: string;
  streetNumber: string;
  flat: string;
  email: string;
};

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const {user} = useMe();

  const handleSignout = async () => {
    setLoading(true);
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const history = useHistory();

  const handleEditButton = () => {
    history.push({
      pathname: '/onboarding/step1',
    });
  };

  const handleMyEvidenceButton = () => {
    history.push({
      pathname: '/myEvidence',
    });
  };

  const {control, setValue} = useForm<FormData>();

  useEffect(() => {
    const fetchData = async () => {
      if (user?.uid) {
        const result = await firestore()
          .collection(user?.uid)
          .doc('Onboarding')
          .get();

        setValue('email', user?.email || '');
        setValue('name', result?.data()?.name);
        setValue('district', result?.data()?.district);
        setValue('dni', result?.data()?.dni);
        setValue('flat', result?.data()?.flat);
        setValue('gender', result?.data()?.gender);
        setValue('phoneNumber', result?.data()?.phoneNumber);
        setValue('province', result?.data()?.province);
        setValue('street', result?.data()?.street);
        setValue('department', result?.data()?.department);
        setValue('streetNumber', result?.data()?.streetNumber);
        setValue('birthDate', result?.data()?.birthDate);
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const inputField = (label: string, name: keyof FormData) => {
    return (
      <FormControl>
        <Stack marginTop="10px">
          <Text marginLeft="2%" fontSize="sm">
            {label}
          </Text>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                disabled={true}
                style={{
                  color: 'white',
                  opacity: 0.5,
                }}
              />
            )}
            name={name}
          />
        </Stack>
      </FormControl>
    );
  };

  return (
    <View>
      <Text fontSize="xl" textAlign="center">
        Mi Perfil
      </Text>
      <Box height="40px" />
      <Box
        justifyContent="center"
        width="100%"
        alignItems="center"
        marginTop="25px">
        <Stack width="100%" justifyContent="center" alignItems="center">
          <Box
            paddingY="20px"
            alignItems="center"
            backgroundColor="#00001B"
            borderRadius="10px"
            width="100%">
            <Box height="40px" />
            <Box width="90%">
              <Text marginLeft="1.5%" fontSize="lg">
                Tus Datos
              </Text>
              {inputField('Nombre completo:', 'name')}
              {inputField('Correo electronico:', 'email')}
              {inputField('Teléfono:', 'phoneNumber')}
              <Row width="100%">
                <Box width="45%">{inputField('DNI:', 'dni')}</Box>
                <Box width="10%" />
                <Box width="45%">{inputField('Nacimiento:', 'birthDate')}</Box>
              </Row>
              {inputField('Provincia', 'province')}
              {inputField('Ciudad', 'department')}
              {inputField('Calle', 'street')}
              <Row width="100%">
                <Box width="45%">{inputField('Número:', 'streetNumber')}</Box>
                <Box width="10%" />
                <Box width="45%">{inputField('Género:', 'gender')}</Box>
              </Row>
              <Text marginLeft="1.5%" fontSize="lg" textAlign="left">
                Tu Evidencia
              </Text>
              <Box marginLeft="-5%">
                <AlternativeButton
                  label="Ver mi evidencia"
                  buttonProps={{onPress: handleMyEvidenceButton}}
                />
              </Box>
            </Box>
          </Box>
          <Box
            position="absolute"
            top="-40px"
            height="90px"
            width="90px"
            borderRadius="50px"
            border="5px #68E1FD"
            backgroundColor="red"
          />
          <Box
            onTouchStart={handleEditButton}
            position="absolute"
            right="20px"
            top="20px">
            <Image
              alt=" "
              source={require('./assets/edit_icon.png')}
              size="5"
            />
          </Box>
        </Stack>
      </Box>
      <Box alignItems="center">
        <Box width="130px" onTouchStart={handleSignout}>
          <LinkButton label="Cerrar sesión" loading={loading} />
        </Box>
      </Box>
    </View>
  );
};

export default Profile;
