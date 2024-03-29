import MainMenu from './components/MainMenu';
import Board from './components/Board';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="LogIn" component={LoginScreen} options={{
          title: 'MineMopper',
          headerTitleAlign: 'center',
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: '#E39600',
          },
        }} />
        <Stack.Screen name="Main" component={MainMenu} options={{
          title: 'MineMopper',
          headerStyle: {
            backgroundColor: '#E39600',
          },
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="Board" component={Board} options={{
          title: 'MineMopper',
          headerStyle: {
            backgroundColor: '#E39600',
          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => alert('This is a button!')}
                title="Save"
                color='#9AE190'
                margin="2"
              />
            </View>)
        }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: 8,
    backgroundColor: '#9AE190',
    padding: 5,
    borderRadius: 5,
  },
});

