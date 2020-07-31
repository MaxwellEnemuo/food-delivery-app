import * as React from 'react';
import { StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types';

export default function TabOneScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Root'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One {route.params.name}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
