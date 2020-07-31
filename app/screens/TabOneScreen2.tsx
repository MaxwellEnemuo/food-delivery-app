import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen2() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One 2</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen2.tsx" />
      <Button title='click' onPress={() => navigation.navigate('TabOneScreen', {name: 55})} />
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
