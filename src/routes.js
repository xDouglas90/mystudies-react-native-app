import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Details, CategoryPosts, Search } from './pages';

import { colors } from './styles/variables';

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
          headerTintColor: `${colors.white}`,
          headerStyle: {
            backgroundColor: `${colors.primary}`,
          },
        }}
      />
      <Stack.Screen
        name="CategoryPosts"
        component={CategoryPosts}
        options={{
          title: 'Categoria',
          headerTintColor: `${colors.white}`,
          headerStyle: {
            backgroundColor: `${colors.primary}`,
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Pesquisa',
          headerTintColor: `${colors.white}`,
          headerStyle: {
            backgroundColor: `${colors.primary}`,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
