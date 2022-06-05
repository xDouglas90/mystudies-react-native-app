import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Details, CategoryPosts, Search } from './pages';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Detalhes',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#232630',
          },
        }}
      />
      <Stack.Screen
        name="CategoryPosts"
        component={CategoryPosts}
        options={{
          title: 'Categoria',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#232630',
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Pesquisa',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#232630',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
