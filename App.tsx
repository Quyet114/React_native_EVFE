/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ManageNavigation from './src/component/navigation/ManageNavigation';
import EventDetail from './src/component/events/Quyetcomponent/EventDetail';
import EmptyEvent from './src/component/events/Quyetcomponent/EmptyEvent'
import EventUpcommingPassed from './src/component/events/screens/EventUpcomming_Passed'
function App(): React.JSX.Element {
  return (
    <>
    <EventUpcommingPassed/>
      {/* <ManageNavigation/> */}
    </>
  );
}

export default App;
