import React from 'react';
import {View, Text, Box, Stack, FormControl, Row, Image, Button} from 'native-base';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {Controller, useForm} from 'react-hook-form';
import LinkButton from '../../../Shared/LinkButton';
import {useState} from 'react';
import { boxShadow } from 'styled-system';
import AlternativeButton from '../../../Shared/AlternativeButton';

type FormData = {
  email: string;
  password: string;
};

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

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const inputField = (
    label:string, 
    isRequired:boolean = false, 
    onChange = ()=>{}, 
    onBlur = ()=>{}, 
    value:string = "",
    ) => {
    return (              
    <FormControl>
      <Stack marginTop="10px">
        <Text marginLeft="2%" fontSize="sm">{label}</Text>
        <Controller
          control={control}
          rules={{
            required: isRequired,
          }}
          render={() => (
            <Input           
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              rightIcon={<Image alt="" source={require('./assets/edit_icon.png')} />}
            />
          )}
          name="email"
          defaultValue=""
        />
      </Stack>
    </FormControl>);
  }

  return (
    <View>
      <Text fontSize="xl" textAlign="center">Mi Perfil</Text>
      <Box height="40px"></Box>
      <Box justifyContent="center" width="100%" alignItems="center"  marginTop="25px">
        <Stack width="100%" justifyContent="center" alignItems="center">
          <Box paddingY="20px" alignItems="center" backgroundColor="#00001B" borderRadius="10px" width="100%">
            <Box height="40px"></Box>
            <Box width="90%">
              <Text marginLeft="1.5%" fontSize="lg">Tus Datos</Text>
              {inputField("Nombre completo:")}
              {inputField("Correo electronico:")}
              {inputField("Teléfono:")}
              <Row width="100%">
                <Box width="45%">
                  {inputField("DNI:")}
                </Box>
                <Box width="10%"></Box>
                <Box width="45%">
                  {inputField("Nacimiento:")}
                </Box>
              </Row>
              {inputField("Provincia")}
              {inputField("Ciudad")}
              {inputField("Calle")}
              <Row width="100%">
                <Box width="45%">
                  {inputField("Número:")}
                </Box>
                <Box width="10%"></Box>
                <Box width="45%">
                  {inputField("Género:")}
                </Box>
              </Row>
              <Text marginLeft="1.5%" fontSize="lg" textAlign="left">Tu Evidencia</Text>
              <Box marginLeft="-5%">
                <AlternativeButton label="Ver mi evidencia" buttonProps={{onPress:()=>{}}} />
              </Box>
            </Box>
          </Box>
          <Box position="absolute" top="-40px" height="90px" width="90px" borderRadius="50px" border="5px #68E1FD" backgroundColor="red"></Box>
        </Stack>
      </Box>
      <Box marginY="15px">
        {/* <LinkButton
          label="Cerrar sesión"
          loading={loading}
          onPress={handleSignout}
        /> */}
      </Box>
    </View>
  );
};

export default Profile;
