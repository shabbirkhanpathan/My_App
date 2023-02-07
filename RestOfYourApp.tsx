/* eslint-disable prettier/prettier */
import React, {useCallback} from 'react';
import {useToast} from 'react-native-toast-notifications';
import { Text, TouchableOpacity } from 'react-native';

export const RestOfYourApp = () => {
  const toast = useToast();
  const handle = useCallback(() => {
    toast.show('hey');
  }, [toast]);

  return (
    <TouchableOpacity onPress={handle} style={{marginTop: 100}}>
      <Text>Hello This is map</Text>
    </TouchableOpacity>
  );
};
