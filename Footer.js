import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
      <View style={styles.container}>
            <Text style={styles.text}>Footer</Text>
      </View>
);

const styles = StyleSheet.create({
      container: {
            padding: 20,
            backgroundColor: '#333',
      },
      text: {
            color: '#fff',
            fontSize: 16,
      },
});

export default Footer;
