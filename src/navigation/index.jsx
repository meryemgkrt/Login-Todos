import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AutStack from './AutStack';
import UserStack from './UserStack';
export default function StackNavigator() {
  const isLogin = false;
  return <>{isLogin ? <UserStack /> : <AutStack />}</>;
}

const styles = StyleSheet.create({});
