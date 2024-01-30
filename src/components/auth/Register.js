import {Text, View, TouchableOpacity, FlatList, Image} from 'react-native';

import React from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import {registerForm} from '../../utils/const/authForm';

export default function Register({navigation}) {
  return (
    <View className="bg-white flex-1 items-center justify-center px-5">
      <View>
        <Image source={require('../../assets/images/todo.jpeg')} />
      </View>

      <View className="w-full">
        <FlatList
          data={registerForm}
          renderItem={({item}) => (
            <View className="mt-5 w-full">
              <Input
                title={item.title}
                icon={item.icon}
                isSecure={item.isSecure}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View className="w-full mt-5">
        <Button title={'Kayıt Ol'} />
      </View>

      <View className="w-full mt-5 justify-center items-center">
        <Text className="text-primary">
          Yoksa bir hesabınız mı var?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="font-[600] text-primary underline">
              Giriş Yapın
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}
