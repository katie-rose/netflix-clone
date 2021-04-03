import * as React from 'react';
import { Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import styles from './styles';

const HomeScreen = () => {
  return (
  <View style={styles.container}>
      <Image style={styles.image} source=({ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg' }) />
  </View>
  );
};

export default HomeScreen;
