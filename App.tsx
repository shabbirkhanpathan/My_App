/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ToastProvider} from 'react-native-toast-notifications';
import {RestOfYourApp} from './RestOfYourApp';

export default function App() {
  return (
    <ToastProvider>
      <RestOfYourApp />
    </ToastProvider>
  );
}
