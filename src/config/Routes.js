import 'react-native-gesture-handler';
import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import {PreferencesContext} from './PreferencesContext';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';

const Stack = createStackNavigator();

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    red: 'rgb(235, 87, 87)',
  },
};
const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    red: 'rgb(235, 87, 87)',
  },
};
const CombinedDefaultTheme = merge(PaperDefaultTheme, CustomDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, CustomDarkTheme);

export default function Routes() {
  const [isThemeDark, setThemeDark] = useState(false);

  const toggleTheme = useCallback(() => {
    return setThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        theme={isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme}>
        <NavigationContainer
          theme={isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Favorite"
              component={FavoriteScreen}
              options={{headerTitleStyle: styles.headerTitle}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontFamily: 'PT-Root-UI_Bold',
    fontWeight: '500',
    color: 'rgb(28, 28, 30)',
  },
});
