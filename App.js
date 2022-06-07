import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './src/screen/Profile';
import EditProfile from './src/screen/EditProfile';

import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import reducers from './src/redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
