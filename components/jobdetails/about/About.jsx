import React from 'react';
import { View, Text } from 'react-native';
import styles from './about.style';

// about component which recieves info as props and renders it
const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About this job:</Text>
      {/* content box where info is displayed */}
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  )
}

// export About component as default
export default About;
