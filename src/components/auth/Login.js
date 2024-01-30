import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import {loginForm} from '../../utils/const/authForm';

export default function Login({navigation}) {
  return (
    <View className="bg-white flex-1 items-center justify-center px-5">
      <View>
        <Image source={require('../../assets/images/todo.jpeg')} />
      </View>

      <View className="w-full">
        <FlatList
          data={loginForm}
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
        <Button title={'Giriş Yap'} />
      </View>

      <View className="w-full mt-5 justify-center items-center">
        <Text className="text-primary">
          Hala bir hesabınız yok mu?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="font-[600] text-primary underline">Kayıt Ol</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}
