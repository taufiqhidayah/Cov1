import * as React from 'react';
import { Button } from 'react-native-elements';
import { Text, View, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
// Page
import HomeScreen from './src/layout/HomeScreen'
import ProfileScreen from './src/layout/ProfileScreen'
import MentorScreen from './src/layout/lisdata/MentorScreen'
import DetailProfileScreen from './src/layout/lisdata/DetailProfileScreen';


type Props = {};
const Tab = createBottomTabNavigator();
const NewsStack = createStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {

            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'News') {

            iconName = focused ? 'rss' : 'rss';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }
          // You can return any component that you like here!
          return <Icon type='font-awesome' name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="News">
        {() => (
          <NewsStack.Navigator>
            <NewsStack.Screen options={{
              title: 'News',

              cardShadowEnabled: false,
              headerRight: () => (
                <TouchableHighlight underlayColor="white" style={{ marginRight: 10 }}>
                  <View style={{ height: 30, borderWidth: 0.2, borderRadius: 10, width: 100, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                    <Icon
                      name='filter'
                      type='font-awesome'
                      color='#f50'
                      style={{ fontSize: 2 }}
                    />
                    <Text style={{ marginLeft: 10, fontSize: 12 }}>FILTER BY</Text>
                  </View>
                </TouchableHighlight>
              ),
            }} name="News" component={MentorScreen} />
            <NewsStack.Screen name="Details" component={DetailProfileScreen}
              options={{
                headerRight: () => (
                  <View 
                  style={{marginRight:20}}>
                  <Icon
                    name='ellipsis-v'
                    type='font-awesome'
                    onPress={() => alert('hello')} />
                    </View>
                )
              }}
            />
          </NewsStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default function App() {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

  );
}
