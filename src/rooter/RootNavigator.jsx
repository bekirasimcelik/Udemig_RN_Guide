import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDCONTACT, CONTACTDETAIL, CONTACTSLIST, GROUPS} from '../utils/routes';
import ContactDetail from '../screens/contacts/ContactDetail';
import AddContact from '../screens/contacts/AddContact';
import ContactsList from '../screens/contacts/ContactsList';
import Groups from '../screens/groups';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={GROUPS} component={Groups} />
      <Stack.Screen name={CONTACTSLIST} component={ContactsList} />
      <Stack.Screen name={CONTACTDETAIL} component={ContactDetail} />
      <Stack.Screen name={ADDCONTACT} component={AddContact} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
