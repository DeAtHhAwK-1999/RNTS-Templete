import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Settings = (props: any) => {
  console.log("🚀 ~ Settings ~ props:", props)
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
